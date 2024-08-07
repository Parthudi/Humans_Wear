import mongoose, { ObjectId } from "mongoose";

interface IAddress {
  placetype: string;
  mobile: string;
  pincode: string;
  address: string;
  town: string;
  city: string;
  state: string;
  user: ObjectId;
  modeofpayment: string;
  created_at: Date;
  modified_at: Date;
}

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    placetype: { type: String, require: [true, "Please choose placetype"]},
    mobile: { type: String, required: [true, "Please enter mobile number"]},
    pincode: { type: String, required: [true, "Please enter  pincode"]},
    address: { type: String, required: [true, "Please enter address"]},
    town: {type: String, required: [true, "Please enter town"]},
    state: {type: String, required: [true, "Please enter town"]},
    city: {type: String, required: [true, "Please enter city"]},
    user: {type: "ObjectId", ref: "users"},
    modeofpayment: {type: String, required: [true, "Please enter mode of payment"]},
    created_at: { type: Date, default: Date() },
    modified_at: { type: Date, default: Date() },
});

export interface IAddressSchema extends IAddress, mongoose.Document {}
export default mongoose.model<IAddressSchema>("address", addressSchema);
