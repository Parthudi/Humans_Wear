import  {Request, Response} from "express";
import UserOperator from "../operator/UserOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";
import _ from "lodash";

export default class ProductController {

  static async RegisterUser(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.RegisterUser(data);
      const result = await UserOperator.createUser(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
}
