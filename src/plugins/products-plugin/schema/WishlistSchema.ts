import mongoose from "mongoose";

interface IWishlist {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  type: "admin" | "user";
  is_authorized: boolean;
  token: string;
  created_at: Date;
  modified_at: Date;
}

const Schema = mongoose.Schema;

const wishListSchema = new Schema({
  image: {
    type: String,
    require: [true, "Image not found"],
  },
  name: {
    type: String,
    required: [true, "product name not found"],
  },
  price: { type: Number, required: [true, "Please enter price"] },
  count: { type: Number, required: [true, "Please enter count"] },
  token: {type: String},
  created_at: { type: Date, default: Date() },
  modified_at: { type: Date, default: Date() },
});

export interface IWishListSchema extends IWishlist, mongoose.Document {}
export default mongoose.model<IWishListSchema>("wishlist", wishListSchema);
