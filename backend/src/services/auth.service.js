import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth } from '../config/firebase.js';

/**
 * Service function to create a new user.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} The new user object.
 */

const createUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

/**
 * Service function to login a user.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} The user object.
 * @throws {Error} The error message.
 */

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

/**
 * Service function to logout a user.
 * @returns {Promise<void>} A promise that resolves when the user is logged out.
 * @throws {Error} The error message.
 */

const logoutUser = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
};

export { createUser, loginUser, logoutUser };
