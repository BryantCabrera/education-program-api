const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
	school: { type: String, required: true },
	programName: { type: String, required: true },
	degreeType: { type: String, required: true },
	delivery: { type: String, required: true },
	annualTuition: { type: Number, required: true },
	location: { type: String, required: true },
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
