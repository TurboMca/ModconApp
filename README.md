# 🚀 ModconApp

**ModconApp** is a mobile application built using **Expo** and **React Native**. This project is designed to simplify modern app deployment workflows with **EAS (Expo Application Services)**.

---

## 📱 Features

- Built with **Expo & React Native**
- Configured for **EAS Build** & **GitHub integration**
- **Keystore management** for Android signing
- Custom **assets** and configuration

---

## 📦 Project Setup

### Step 1: Initialize Project
Created an Expo Snack project using [Expo Snack](https://snack.expo.dev/).

### Step 2: App Development
Updated `App.js` with the desired application logic and UI.

### Step 3: Add Dependencies
Added necessary dependencies in `package.json` for functionality and styling.

### Step 4: Download Project
Downloaded the project source from Expo Snack to local machine.

---

## ⚙️ Configuration

### Step 5: Configuration Files
Created essential configuration files:
- `eas.json` – for EAS Build configuration
- `app.json` – for Expo app metadata and settings

### Step 6: Assets
Added proper image and font assets to the project for branding and UI.

---

## 🗂️ GitHub Integration

### Step 7: Upload to GitHub
Uploaded the entire project to a new GitHub repository.

### Step 8: Generate Android Keystore
Used the following command inside GitHub Codespaces to generate a keystore:

```bash
keytool -genkeypair -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

### Step 9: Download Keystore
Downloaded and securely stored the generated keystore file.

---

## 🚀 EAS Build Process

### Step 10: Create Project on Expo
Created a new project on [expo.dev](https://expo.dev/) with the desired project name.

### Step 11: Update app.json
Updated `app.json` with:

```json
{
  "name": "ModconApp",
  "slug": "modconapp",
  "expo": {
    "projectId": "your-project-id"
  }
}
```

### Step 12: Go to EAS Builds
Navigate to the **Builds** tab on Expo.

### Step 13: Connect GitHub Repo
Connected the GitHub repository via **Build from GitHub**.

### Step 14: Select Platform
Choose:
- **Build Profile**: `production`
- **Platform**: `Android`

### Step 15: Build
Click **Build** and wait. If no errors appear, your build will complete successfully (🚀 rocket symbol appears).

---

## 📤 Deployment

After a successful build, your app is ready to be published or submitted to the **Play Store**!

---

## 🛠️ Tech Stack

- React Native  
- Expo  
- EAS Build  
- GitHub  
- Android Keystore  

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
