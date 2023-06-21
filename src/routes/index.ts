import express from "express";
import { v1Router } from "./v1";

const appRouter = express.Router();

appRouter.use("/v1", v1Router);

export { appRouter };
