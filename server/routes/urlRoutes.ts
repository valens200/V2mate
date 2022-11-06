import express, { Express, Request, Response } from 'express';
const route = express.Router();
const { home, getUrl , download} = require("../controllers/urlController")
route.get("/", home);
route.get("/url", getUrl);
route.get('/download', download)
module.exports = route;

module.exports = route;