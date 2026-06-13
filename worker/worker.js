/**
 * Revolutionary Voices — cloud sync Worker
 *
 * Bridges the static site to a Cloudflare D1 database.
 * Students save/load their own work with a class code; only the teacher
 * (with the teacher key) can list an entire class.
 *
 * Required bindings (set in the Cloudflare dashboard):
 *   - D1 database binding named  DB   -> revolutionary-voices
 *   - Secret/variable           TEACHER_KEY  -> a passphrase only you know
 *
 * Optional variable:
 *   - ALLOW_ORIGIN -> comma-separated list of allowed site origins.
 *     Defaults to both the teacher domain and the old one so the move is seamless.
 */

const DEFAULT_ORIGIN = "https://voices.mrbsocialstudies.org,https://voices.shieb.com";

// Reflect the caller's origin if it's on the allow-list (supports multiple domains)
function pickOrigin(env, request) {
  const allowed = ((env && env.ALLOW_ORIGIN) || DEFAULT_ORIGIN)
    .split(",").map(s => s.trim()).filter(Boolean);
  const reqOrigin = request.headers.get("Origin");
  if (reqOrigin && allowed.includes(reqOrigin)) return reqOrigin;
  return allowed[0];
}

function corsHeaders(env, request) {
  return {
    "Access-Control-Allow-Origin": pickOrigin(env, request),
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

// Keep inputs sane and bounded
function clean(s, max) {
  return String(s == null ? "" : s).trim().slice(0, max || 80);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ch = corsHeaders(env, request);
    const reply = (body, status) => new Response(JSON.stringify(body), {
      status: status || 200,
      headers: { "Content-Type": "application/json", ...ch },
    });

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: ch });
    }

    try {
      // ---- Save (or update) one script ----
      if (request.method === "POST" && url.pathname === "/save") {
        const body = await request.json().catch(() => ({}));
        const classCode = clean(body.classCode, 40);
        const studentName = clean(body.studentName, 60);
        const slotName = clean(body.slotName, 80) || "Untitled";
        if (!classCode || !studentName) {
          return reply({ error: "classCode and studentName are required" }, 400);
        }
        const data = typeof body.data === "string" ? body.data : JSON.stringify(body.data || {});
        if (data.length > 100000) {
          return reply({ error: "script too large" }, 413);
        }
        await env.DB.prepare(
          `INSERT INTO scripts (class_code, student_name, slot_name, data, updated_at)
           VALUES (?, ?, ?, ?, ?)
           ON CONFLICT(class_code, student_name, slot_name)
           DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at`
        ).bind(classCode, studentName, slotName, data, new Date().toISOString()).run();
        return reply({ ok: true }, 200);
      }

      // ---- Load one student's own scripts ----
      if (request.method === "GET" && url.pathname === "/load") {
        const classCode = clean(url.searchParams.get("classCode"), 40);
        const studentName = clean(url.searchParams.get("studentName"), 60);
        if (!classCode || !studentName) {
          return reply({ error: "classCode and studentName are required" }, 400);
        }
        const { results } = await env.DB.prepare(
          `SELECT slot_name, data, updated_at FROM scripts
           WHERE class_code = ? AND student_name = ? ORDER BY updated_at DESC`
        ).bind(classCode, studentName).all();
        return reply({ scripts: results || [] }, 200);
      }

      // ---- Teacher: list an entire class (key-protected) ----
      if (request.method === "GET" && url.pathname === "/class") {
        const classCode = clean(url.searchParams.get("classCode"), 40);
        const key = url.searchParams.get("key") || "";
        if (!env.TEACHER_KEY || key !== env.TEACHER_KEY) {
          return reply({ error: "unauthorized" }, 401);
        }
        if (!classCode) {
          return reply({ error: "classCode is required" }, 400);
        }
        const { results } = await env.DB.prepare(
          `SELECT student_name, slot_name, data, updated_at FROM scripts
           WHERE class_code = ? ORDER BY student_name, updated_at DESC`
        ).bind(classCode).all();
        return reply({ scripts: results || [] }, 200);
      }

      return reply({ error: "not found" }, 404);
    } catch (err) {
      return reply({ error: "server error", detail: String(err && err.message || err) }, 500);
    }
  },
};
