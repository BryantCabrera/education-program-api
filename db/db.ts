export {}; // this is included to prevent TypeScript linting errors
const mongoose = require('mongoose');
const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}.`);
});

mongoose.connection.on('error', (err: any) => {
	console.log(`Mongoose ran into an ${err}.`);
});

mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose disconnected from ${connectionString}.`);
});
