const mongoose = require('mongoose');
import { IProgram } from '../common/interfaces';

const programSchema: IProgram = new mongoose.Schema({
	school: { type: String, required: true },
	programName: { type: String, required: true },
	degreeType: { type: String, required: true },
	delivery: { type: String, required: true },
	annualTuition: { type: String, required: true },
	location: { type: String, required: true },
});

const Program = mongoose.model('Program', programSchema);

module.exports = Program;
