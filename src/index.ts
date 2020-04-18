import * as express from "express";
import { Request, Response } from "express";
import * as http from "http";
const log4js = require('./utils/logger.ts');
const loadModules = require('./utils/loadModules.ts')
const logger = log4js.getLogger('logger');

const app:express.Application = express();


app.use(express.json());
app.use(express.static('./public'));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({status: "Mock server"});
});

loadModules(app);

const httpPort:number = 8080;
app.set("port", httpPort);
const httpServer = http.createServer(app);

httpServer.listen(httpPort, (data) => {
  logger.trace(`Listening on port ${httpPort}`)
});