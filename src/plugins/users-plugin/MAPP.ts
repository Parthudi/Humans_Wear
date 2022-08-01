import * as express from "express";
import UserController from "./controller/UserController";
const MAPP = express.Router();
import TokenHelper from "./lib/TokenHelper";

// Routes
MAPP.post("/register", UserController.RegisterUser);
MAPP.post("/login", UserController.LoginUser);
MAPP.post("/logout/:id", UserController.LogoutUser);
MAPP.post("/address", UserController.AddAddress);
MAPP.get("/address/:id", UserController.getAddress);
MAPP.delete("/address/:id", UserController.deleteAddress);

export default MAPP;
