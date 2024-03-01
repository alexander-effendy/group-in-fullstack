import express from "express";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import 'dotenv/config'
const router = express.Router();

// Initialize Firebase
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "groupedin-b89ef.firebaseapp.com",
    projectId: "groupedin-b89ef",
    storageBucket: "groupedin-b89ef.appspot.com",
    messagingSenderId: "749597896049",
    appId: "1:749597896049:web:6ebbc97b6a36591254dad0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication route
router.post("/login", (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;

  // Authenticate user with Firebase
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User authenticated successfully
      const user = userCredential.user;
      res.status(200).json({ message: "Login successful", user });
    })
    .catch((error) => {
      // Error occurred during authentication
      const errorMessage = error.message;
      console.log(errorMessage);
      res.status(400).json({ message: "Login failed", error: errorMessage });
    });
});

router.post('/logout', (req, res) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      res.status(200).json({ message: "Logout successful" });
      console.log('Sign-out successful.');
    }).catch((error) => {
      // An error happened.
      res.status(500).json({ message: "Logout failed", error: error.message });
    });
});

export default router;
