import UserDataObject from "../UserDataObjects/UserDataObjects";
import User from "../schema/UserSchema";
import _ from "lodash";

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
          const updatedUser = await UserDataObject.FindUserByIdAndUpdate(userByEmail._id, "is_authorized", true);
          if(_.isEmpty(updatedUser)){
            reject({message: "User Unable To Login, Please Contact Customer Services", code: 400});
          }else{
            updatedUser.is_authorized = true;
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

}
