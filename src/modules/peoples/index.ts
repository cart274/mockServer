import * as express from "express";
const log4js = require('../../utils/logger.ts');
const router = express.Router();
import {People} from './people';
const people = new People();

router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
	let peoples = people.getAllPeoples()
	res.status(200).json({peoples})
});


module.exports = router;