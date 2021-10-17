import _ from "lodash";
import User from "../schema/UserSchema";

export default class UserDataObject {
    
    static CheckForUniqueEmail(emailCheck: any): Promise<any> {
        return new Promise(async(resolve,reject) => {
           try {
                User.find(emailCheck, (err, user) => {
                    err ? reject({}) : resolve(user);
                });
            }catch(error) {
               reject(error);
            }
        });
    }

    static FindUserByIdAndUpdate(_id: string, updateKey: string, updateValue: any): Promise<any> {
        return new Promise(async(resolve,reject) => {
           try {
                const dataTobBeUpdate: any = {};
                dataTobBeUpdate[`${updateKey}`] = updateValue;
                User.findByIdAndUpdate({_id}, dataTobBeUpdate, (err, user) => {
                    err ? reject({}) : resolve(user); 
                });
            }catch(error) {
               reject(error);
            }
        });
    }

    static FindOne(keyValuePair: any): Promise<any> {
        return new Promise(async(resolve,reject) => {
           try {
               console.log(keyValuePair);
               const user = User.findOne(keyValuePair);
               !user ? reject({}) : resolve(user);
            }catch(error) {
               reject(error);
            }
        });
    }
}