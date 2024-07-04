import express from "express";
import cors from "cors";
import { bookingController } from "./src/controllers/bookingController.js";
import bodyParser from "body-parser";

export const createServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
 
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  app.post("/booking", bookingController)

  app.get("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  return app;
};
