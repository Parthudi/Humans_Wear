import ProductDataObject from "../DataObjects/ProductDataObjects";
import Wishlist from "../schema/WishlistSchema";
import _ from "lodash";

export default class ProductOperator {

  static addProduct(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
          const product = await ProductDataObject.FindOneAndUpdate(data.name, data.price );
          if(_.isEmpty(product)){
            const wishlist = new Wishlist(data);
            await wishlist.save();
            resolve({wishlist});
          }
          resolve({product})
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }
}
