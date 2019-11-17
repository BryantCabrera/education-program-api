/********** REQUIRES **********/
const express = require('express');
const router = express.Router();

const Program = require('../models/program');

import { IProgram } from '../common/interfaces';

/********** MIDDLEWARE **********/

/********** ROUTES **********/
//Index Route
router.get('/', async (req: {}, res: any) => {
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

//Update Route

//Delete Route

module.exports = router;
