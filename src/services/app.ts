import express from "express";
import * as http from "http";
import { v4 as UUID } from "uuid";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import DBConnection from "../database/DBConnection";
import appConfig from "../config/appConfig";
import MAPPInit from "./MAPPInit";

import {MAPP as UserRoutes } from "../plugins/users-plugin/index";
import {MAPP as ProductRoutes} from "../plugins/payment-plugin/index";

DBConnection.connect(appConfig.get("database:mongodb:db"))
  .then(async (result) => {
    const port = appConfig.get("port");
    const app = express();
    const h = new http.Server(app);
    await MAPPInit.initMicroService(app);

    app.use((req, res, next) => {
      res.locals.request_id = UUID();
      next();
    });

    app.use(cors());
    app.use(morgan("dev"));
    app.use(bodyParser.json({limit: "50mb"}));

    app.use("/v1/users", UserRoutes);
    app.use("/v1/payment", ProductRoutes);

    app.get("/", (req, res) => {
      res.status(200).send("<H1>Welcome to Humans Wear Server By Parth Parmar</H1>");
    });
    
    const server = h.listen(port, () => {
      console.log(`server started at localhost:${port}`);
    });

    MAPPInit.errorHandler(app);
  })
  .catch((error) => {
    console.log("Microservice:mongo connection failed", error);
  });
