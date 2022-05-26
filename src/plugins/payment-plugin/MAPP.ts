import * as express from "express";
import PaymentController from "./controller/PaymentController";
const MAPP = express.Router();

// Routes
MAPP.post("/", PaymentController.Payment);


export default MAPP;
