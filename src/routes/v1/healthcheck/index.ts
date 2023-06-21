import express, { Request, Response } from "express";
export const healthCheckRouter = express.Router();

healthCheckRouter.get("/", async (req: Request, res: Response) => {
  global.io.sockets.to("healthcheck").emit("key", {
    message: "healthcheck",
  });
  return res.status(200).send("success");
});
