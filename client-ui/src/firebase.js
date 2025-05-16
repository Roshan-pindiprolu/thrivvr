import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDK0YBfFD1EFE7S71pU4ewmQKarvqMJZpA",
  authDomain: "thrivvr-10f4e.firebaseapp.com",
  projectId: "thrivvr-10f4e",
  storageBucket: "thrivvr-10f4e.firebasestorage.app",
  messagingSenderId: "637985711764",
  appId: "1:637985711764:web:98c637e87decc7d7dbb681",
  measurementId: "G-F5KCXP8FBM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, signInWithPopup };
