/********** REQUIRES **********/
const express = require('express');
const router = express.Router();

const Program = require('../models/program');

import { IProgram } from '../common/interfaces';

/********** MIDDLEWARE **********/

/********** ROUTES **********/
//Index Route
router.get('/', async (req: any, res: any) => {
	try {
		const allPrograms: IProgram[] = await Program.find({});

		res.json({
			status: 200,
			data: allPrograms,
		});
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

//Create Route
router.post('/', async (req: any, res: any) => {
	console.log(req.body, 'Program Create Route');

	try {
		const createdProgram: IProgram = await Program.create(req.body);

		res.json({
			status: 200,
			message: 'Program creation successful.',
			data: createdProgram,
		});
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

//Show Route
router.get('/:id', async (req: any, res: any) => {
	try {
		const foundProgram: IProgram = await Program.findById(req.params.id);

		res.json({
			status: 200,
			data: foundProgram,
		});
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

//Update Route
router.put('/:id', async (req: any, res: any) => {
	try {
		const updatedProgram = await Program.findByIdAndUpdate(req.params.id, req.body, { new: true });

		res.json({
			status: 200,
			data: updatedProgram,
		});
	} catch (err) {
		console.log(err);
		res.send(err);
	}
});

//Delete Route

module.exports = router;
