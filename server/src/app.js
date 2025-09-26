// Import necessary modules
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from "url";

//Import Routing Files
import utilsRoutes from './routes/utils.routes.js';
import authRouter from './routes/auth.route.js';

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root (one level up from src/)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Initialize Express app
const app = express();

// App Configuration
app.set('port', process.env.PORT || 8000);
app.set('MONGO_URI', process.env.MONGODB_URI);
app.set('JWT_SECRET', process.env.JWT_SECRET);
app.set('JWT_EXPIRES_IN', process.env.JWT_EXPIRES_IN || '1d');

//Middleware Setup
app.use(
  cors({
    origin: "http://localhost:3000",   // frontend URL
    credentials: true,                 // allow cookies / Authorization headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ limit: '40kb', extended: true }));


// Use Routes
app.use('/', utilsRoutes);
app.use('/api/auth', authRouter);

// Export the configured app
export default app;