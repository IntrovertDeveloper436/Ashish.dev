// Import necessary modules
import app from './app.js';
import { server } from './server.js';
import { connectDB } from './config/db.connection.js';

// Start the server after successful DB connection
const start = async () => {
	// Connect to MongoDB
	const mongoUri =app.get('MONGO_URI');
	await connectDB(mongoUri);

	// Start the server
	server.listen(app.get('port'), () => {
		console.log(`Listening on PORT ${app.get('port')} : http://localhost:${app.get('port')}`);
	});
};

start();
