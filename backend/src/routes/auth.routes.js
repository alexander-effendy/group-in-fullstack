import express from 'express';
import { createUser, loginUser, logoutUser } from '../services/auth.service.js';
import { createMember } from '../services/members.services.js';
const router = express.Router();

/**
 * Route to register a new user.
 * @name POST/api/auth/register
 * @returns {Object} - The new user object.
 */
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // TODO: check if username is unique before creating the user
    const user = await createUser(email, password);
    await createMember(username, user.uid);
    res.status(201).send({ message: 'User created successfully', user });
  } catch (error) {
    res
      .status(400)
      .send({ message: 'Failed to create user', error: error.message });
  }
});

/**
 * Route to log in a user.
 * @name POST/api/auth/login
 * @returns {Object} - The user object.
 
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(200).send({ message: 'Login successful', user });
  } catch (error) {
    res.status(401).send({ message: 'Login failed', error: error.message });
  }
});

/**
 * Route to log out a user.
 * @name POST/api/auth/logout
 * @returns {Object} - A message confirming the user is logged out.
 */
router.post('/logout', async (req, res) => {
  try {
    await logoutUser();
    res.status(200).send({ message: 'Logout successful' });
  } catch (error) {
    res.status(400).send({ message: 'Logout failed', error: error.message });
  }
});

export default router;
