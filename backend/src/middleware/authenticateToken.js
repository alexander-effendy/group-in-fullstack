import admin from 'firebase-admin';

/**
 * Middleware function to authenticate a token.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const authenticateToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <Token>
  if (!token) return res.status(401).send({ message: 'No token provided.' });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying auth token', error);
    res.status(403).send({ message: 'Invalid token.' });
  }
};

export default authenticateToken;
