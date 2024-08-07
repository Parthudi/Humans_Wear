import _ from "lodash";
import Wishlist from "../schema/WishlistSchema";

export default class ProductDataObject {
    // static FindOne(keyValuePair: any): Promise<any> {
    //     return new Promise(async(resolve,reject) => {
    //        try {
    //            const user = User.findOne(keyValuePair);
    //            !user ? reject({}) : resolve(user);
    //         }catch(error) {
    //            reject(error);
    //         }
    //     });
    // }

    static FindOneAndUpdate(name: string, price: number): Promise<any> {
        return new Promise(async(resolve,reject) => {
           try {
            const product = await Wishlist.findOneAndUpdate({"name": name, "price": price }, { $inc: { count: 1 }},{ new: true, upsert: true });
            !product ? reject({}) : resolve(product);
            }catch(error) {
               reject(error);
            }
        });
    }
}