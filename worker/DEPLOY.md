# Deploying the cloud-sync Worker (dashboard — no command line)

This makes student work save online so you can see every script from any computer.
Everything else (the database, the code, the site) is already built. This is the one
step that has to happen in your Cloudflare account. ~10 minutes, all clicking.

## What's already done for you
- A D1 database named **revolutionary-voices** exists (id `5d15a34e-665a-4ff5-8579-4a3141ee51a5`) with the right table.
- The Worker code is in `worker/worker.js`.
- The site and the teacher page are ready — they just need the Worker's URL.

## Steps (Cloudflare dashboard)

1. Go to **dash.cloudflare.com** → **Workers & Pages** → **Create** → **Create Worker**.
2. Name it **`rv-sync`** → **Deploy** (it deploys a hello-world placeholder for now).
3. Click **Edit code**. Delete everything in the editor, then paste the entire contents of `worker/worker.js`. Click **Deploy**.
4. Connect the database: go to the Worker's **Settings → Bindings → Add → D1 database**.
   - **Variable name:** `DB`
   - **D1 database:** `revolutionary-voices`
   - Save.
5. Add your teacher key: **Settings → Variables and Secrets → Add**.
   - **Type:** Secret
   - **Name:** `TEACHER_KEY`
   - **Value:** a private passphrase only you know (this is what unlocks the teacher view)
   - Save / Deploy.
6. (Optional but recommended) Add a plain variable **`ALLOW_ORIGIN`** = `https://voices.mrbsocialstudies.org`.
7. Copy the Worker's URL from its overview page — it looks like
   **`https://rv-sync.<your-subdomain>.workers.dev`**.

## Then tell me the URL
Send me that `…workers.dev` URL. I'll drop it into the site (`app.js`) and the teacher
page (`teacher.html`), and you push once more. After that:
- Students enter the **class code** you give them + their **first name + last initial** → their work saves online automatically.
- You open **voices.mrbsocialstudies.org/teacher.html**, enter the class code + your teacher key, and see everyone's scripts.

## Quick test after it's live
Visit `https://rv-sync.<your-subdomain>.workers.dev/load?classCode=test&studentName=test`
in a browser — you should see `{"scripts":[]}`. That means it's running.
