const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://akshitmittal20:pSD9tpjvHdOlEVax@290224.dl6gadx.mongodb.net/tasks_reveal_healhTech';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
