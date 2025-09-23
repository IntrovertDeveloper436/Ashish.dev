// Import necessary modules and create router
import express from 'express';
const Router = express.Router();

//Route for root Path
Router.get('/', (req, res) => { 
    res.status(200).json({ message: 'Welcome! The server is running smoothly!' });
});

// Simple route for health check
Router.get('/health', (req, res) => {
   res.status(200).json({ status: 'OK', timestamp: new Date().toISOString(), uptime: process.uptime() });
});



export default Router;