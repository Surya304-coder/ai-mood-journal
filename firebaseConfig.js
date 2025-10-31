import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";  // Remove getAuth import
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqUAX2xIgs8AcvxlaujDQ9LEo3paVUbAQ",
  authDomain: "ai-mood-journal-ddffd.firebaseapp.com",
  projectId: "ai-mood-journal-ddffd",
  storageBucket: "ai-mood-journal-ddffd.firebasestorage.app",
  messagingSenderId: "547141260757",
  appId: "1:547141260757:web:26884632101eb9b9c2995c",
};

let app;
let auth;

try {
  // Avoid re-initializing Firebase if already initialized
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (_) {
  console.error("Firebase initialization error:", _);
}

export { app, auth };