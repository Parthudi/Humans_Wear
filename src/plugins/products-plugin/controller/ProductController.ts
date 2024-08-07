import  {Request, Response} from "express";
import ProductOperator from "../operator/ProductOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";
import _ from "lodash";

export default class ProductController {

  static async addProductsToWishList(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.Product(data);
      const result = await ProductOperator.addProduct(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
}
