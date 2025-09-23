import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root (one level up from src/)
dotenv.config({ path: path.resolve(__dirname, "../.env") });
const secret = process.env.JWT_SECRET || 'EF435483JHFG89RT435395KJBUYTR5678';
const options = process.env.JWT_EXPIRES_IN || '1d';

const generateToken = (payload) => {
    try {
        if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
            throw new Error("Payload must be a plain object");
        }
        const token = jwt.sign(payload, secret, { expiresIn: options });
        console.log("Generated Token:", token); // Debugging line
        return token;
    } catch (error) {
        console.error("Error generating token:", error); // Debugging line
        throw error;
    }
}

export default generateToken;