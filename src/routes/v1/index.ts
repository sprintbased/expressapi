import express from "express";

import { healthCheckRouter } from "./healthcheck";

const v1Router = express.Router();

v1Router.use("/healthcheck", healthCheckRouter);

export { v1Router };
