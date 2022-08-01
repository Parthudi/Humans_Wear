import _ from "lodash";
import Address from "../schema/AddressSchema";

export default class AddressDataObject {
    
    static FindAll(userId: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try{
                Address.find({}).populate("user").exec((err,addresses) => {
                    if(err || _.isEmpty(addresses)){
                        reject({message: "Address Not Found"});
                    }
                    else{
                        // const Address = addresses && addresses.length > 0 ? addresses.filter(address => address["user"]["_id"].toString() === userId) : [addresses];
                        resolve(addresses);
                    }
                });
            }catch(error) {
               reject(error);
            }
        });
    }

    static Remove(addressId: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try{
                Address.remove({"_id": addressId}).exec((err, address) => {
                    err ? reject({message: "Address Not Found"}) : resolve({message: "Address Deleted Successful"});
                });
            }catch(error){
                reject(error);
            }
        });
    }

}