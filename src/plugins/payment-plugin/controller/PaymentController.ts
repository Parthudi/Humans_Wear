import  {Request, Response} from "express";
import PaymentOperator from "../operator/PaymentOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";
import appConfig from "../../../config/appConfig";
import Stripe from "stripe";

const stripe = new Stripe(`${appConfig.get("Secret_key")}`, {
  apiVersion: "2020-08-27",
});

export default class PaymentController {

  static async Payment(req: Request, res: Response) {
    try{
      const {products, token, user} = req.body;
      return stripe.customers.create({
        email: token.email,
        source: token.id
      }).then(customer => {
        stripe.charges.create({
          amount: products.amount * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country
            }
          }
        });
      }).then(result => res.status(200).json(result))
      .catch(err => console.log(err));

    //   const params: Stripe.CustomerCreateParams = {
    //     description: "Parth Parmar",
    // };
    // console.log(`payment :- ${payment}`);
    //   return ResponseHandler.sendSuccess(res, payment, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }

  
}
