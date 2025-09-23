// Import necessary modules
import { createServer } from 'node:http';
import app from './app.js';
import { initializeSocket } from './config/socketManager.js';

// Create HTTP server and initialize Socket.io
const server = createServer(app);
const io = initializeSocket(server);

// Export server and io for use in other modules
export { server, io };
