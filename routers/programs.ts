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

//Show Route

//Update Route

//Delete Route

module.exports = router;
