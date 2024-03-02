// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCm6g14sB0SCp5matkoig3aktPlAsYQIUY',
  authDomain: 'groupedin-b89ef.firebaseapp.com',
  projectId: 'groupedin-b89ef',
  storageBucket: 'groupedin-b89ef.appspot.com',
  messagingSenderId: '749597896049',
  appId: '1:749597896049:web:6ebbc97b6a36591254dad0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth service for the default app
const auth = getAuth(app);

export { app, auth };