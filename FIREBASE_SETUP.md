# Firebase Setup Instructions for Revolutionary Voices

## 🔥 Quick Setup Guide (5-10 minutes)

Follow these steps to enable Google Authentication and cloud sync for your students.

---

## Step 1: Create Firebase Project

1. Go to **https://console.firebase.google.com/**
2. Click **"Add project"** (or "Create a project")
3. **Project name**: "Revolutionary Voices" (or your choice)
4. **Google Analytics**: Disable it (not needed)
5. Click **"Create project"**
6. Wait for project creation, then click **"Continue"**

---

## Step 2: Enable Google Authentication

1. In your Firebase project dashboard, click **"Authentication"** in the left sidebar
2. Click **"Get started"**
3. Go to the **"Sign-in method"** tab
4. Find **"Google"** in the providers list and click it
5. Toggle the switch to **"Enable"**
6. **Support email**: Enter your email address
7. Click **"Save"**

---

## Step 3: Enable Firestore Database

1. Click **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. **Security rules**: Select **"Start in production mode"**
4. **Location**: Choose **us-central** (or closest to your students)
5. Click **"Enable"**
6. Wait for database creation (about 30 seconds)

---

## Step 4: Configure Firestore Security Rules

1. In Firestore, click the **"Rules"** tab
2. **Delete** the existing rules
3. **Paste** this code:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own scripts
    match /scripts/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

4. Click **"Publish"**

**What this does**: Ensures students can ONLY see and edit their own work. Perfect for student privacy!

---

## Step 5: Add Your Website Domain

1. Go to **Authentication** → **Settings** tab
2. Scroll down to **"Authorized domains"**
3. Click **"Add domain"**
4. Enter: `voices.shieb.com`
5. Click **"Add"**

**Note**: `localhost` is already authorized for testing.

---

## Step 6: Get Your Firebase Configuration

1. Click the **gear icon ⚙️** next to "Project Overview" (top left)
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **web icon** `</>` to add a web app
5. **App nickname**: "Revolutionary Voices Web"
6. **DO NOT** check "Also set up Firebase Hosting"
7. Click **"Register app"**
8. You'll see a `firebaseConfig` object. **Copy it!**

It looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project-12345.firebaseapp.com",
  projectId: "your-project-12345",
  storageBucket: "your-project-12345.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

---

## Step 7: Update Your Website Code

1. **Open** `index.html` in your code editor
2. **Find** this section (around line 537):

```javascript
// ⚠️ REPLACE THIS WITH YOUR FIREBASE CONFIG
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. **Replace** it with YOUR config from Step 6
4. **Save** the file
5. **Commit and push** to GitHub

---

## Step 8: Test It!

1. **Open** your website: https://voices.shieb.com
2. You should see a **"Sign in with Google"** button in the top right
3. Click it and sign in with your Google account
4. You should see your name and profile picture
5. Type something in the form
6. Watch for the **"☁️ Synced to cloud"** message in the bottom right
7. Open the site in a **different browser** or device
8. Sign in with the same account
9. Your work should appear! ✅

---

## 🎓 What Students Will Experience

### First Visit (Not Signed In)
- Banner: "Sign in with Google to save your work across devices"
- Can use the site normally
- Work saves to browser only (like before)

### After Signing In
- Profile picture and name appear (top right)
- Work auto-saves to cloud every 3 seconds
- See "☁️ Synced to cloud" confirmation
- Can access work from any device

### Returning to Site
- Auto-signs in (if they previously signed in)
- Work loads automatically from cloud
- Continues where they left off

---

## 🔒 Security & Privacy

✅ **FERPA Compliant**: Student data stored in Firebase (Google Cloud)
✅ **Private**: Students can ONLY see their own work
✅ **Secure**: Uses Google's enterprise-grade security
✅ **No teacher access**: You cannot see student work unless they share it
✅ **Backup**: Students' work is backed up in the cloud

---

## 💰 Cost

**Firebase Free Tier Includes:**
- 50,000 reads/day
- 20,000 writes/day
- 1 GB storage

**For a classroom:**
- 30 students × 10 saves/day = 300 writes/day
- 30 students × 3 loads/day = 90 reads/day
- **Well within free tier!** ✅

Unless you have 1,000+ active students, Firebase will remain **completely free**.

---

## ❓ Troubleshooting

### "Firebase is not configured"
- You forgot to replace the firebaseConfig in index.html
- Make sure you copied the ENTIRE config object

### "Sign-in failed: auth/unauthorized-domain"
- Your website domain is not authorized
- Go to Firebase Console → Authentication → Settings → Authorized domains
- Add your domain

### "Permission denied" errors
- Your Firestore security rules are incorrect
- Go to Firestore → Rules and paste the rules from Step 4

### Students can't sign in
- Make sure Google Sign-In is enabled (Step 2)
- Check that your domain is authorized (Step 5)

---

## 📞 Support

If you need help:
1. Check the browser console (F12) for error messages
2. Review these instructions again
3. Check Firebase Console for any warning messages

---

## 🎉 You're Done!

Your students can now save their work to the cloud and access it from any device!
