import admin from 'firebase-admin';
import serviceAccount from '../../.FirebaseAdminSDK.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const authMiddleware = async (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    return res.status(401).send({ message: 'No token provided' });
  }

  if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
    res.status(401).send({ message: 'Invalid token' });
  }

  const token = headerToken.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying auth token', error);
    res.status(403).send({ message: 'Could not authorize' });
  }

};

export default authMiddleware;
