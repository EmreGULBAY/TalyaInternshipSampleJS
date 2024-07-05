import bodyParser from "body-parser";
import express from "express";
import { bookingController } from "./controllers/bookingController.js";

export const createServer = () => {
  const app = express();
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.json({success: true});
  });

  app.post("/booking", bookingController)

  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  return app;
};
