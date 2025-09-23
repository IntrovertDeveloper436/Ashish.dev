import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const isAuth = async (req, res, next) => {
    try {
        let token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ error: 'No token provided, authorization denied' });
        }

        let verified = jwt.verify(token, JWT_SECRET);
        if (!verified) {
            return res.status(401).json({ error: 'Token verification failed, authorization denied' });
        }
        req.userId = verified.id || verified._id;
        next();
    } catch (error) {
        return res.status(500).json({ error: `Auth middleware error ! ${error}` });
    }
}

export default isAuth;