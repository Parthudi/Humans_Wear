import UserDataObject from "../DataObjects/UserDataObjects";
import AddressDataObject from "../DataObjects/AddressDataObjects";
import User from "../schema/UserSchema";
import Address from "../schema/AddressSchema";
import _ from "lodash";
import tokenHelper from "../lib/TokenHelper";

export default class UsersOperator {

  static createUser(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const checkEmail = await UserDataObject.CheckForUniqueEmail({email: data.email}); 
        if(_.isEmpty(checkEmail)){
          const user = new User(data);
          await user.save();
          resolve({user});
        }else{
          reject({message: "Email Already In Use, Please Try Another Email",code: 400});
        }
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }

  static loginUser(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
        const email = data.email || "";
        const password = data.password || "";

        const userByEmail = await UserDataObject.FindOne({email});
        const userByPassword = await UserDataObject.FindOne({password});

        if(_.isEmpty(userByEmail) || _.isEmpty(userByPassword)){
          reject({message: "User Not Found",code: 400});
        }else{
          const token = await tokenHelper.generateToken(); 
          const updatedUser = await UserDataObject.FindOneAndUpdate(userByPassword._id, token);
          if(_.isEmpty(updatedUser)){
            reject({message: "User Unable To Login, Please Contact Customer Services", code: 400});
          }else{
            updatedUser.is_authorized = true;
            updatedUser.token = token;
            resolve({user: updatedUser});
          }
        }
      }catch(error) {
        console.log("User : --- ", error);
        reject(error);
      }
    });
  }

  static LogoutUser(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const updatedUser = await UserDataObject.FindUserByIdAndUpdate(data.id, "is_authorized", false);
          if(_.isEmpty(updatedUser)){
            reject({message: "User Unable To Logout, Please Contact Customer Services", code: 400});
          }else{
            resolve({user: updatedUser});
          }
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }

  static addAddress(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const address = new Address(data);
        await address.save();
        resolve({address});
      }catch(error) {
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }
  
  static getAddress(data: any): Promise<any>{
    return new Promise(async (resolve, reject) => {
      try{
        const address = await AddressDataObject.FindAll(data.id);
        console.log(`PARTHHERE :- ${address}`);
        if(address.length == 0){
          reject({message: "No Address Found", code: 400});
        }else{
          resolve(address);
        }
      }catch(error){
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }

  static removeAddress(data: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try{
        const address = await AddressDataObject.Remove(data.id);
        resolve(address);
      }catch(error){
        console.log("error : --- ", error);
        reject(error);
      }
    });
  }

}
