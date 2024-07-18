import mongoose, {Schema} from "mongoose";

const userschema = new Schema({
name: {
  type: String,
  required: [true, "Name is required"]
},
email: {
  type: String,
  required: [true, "Email is required"],
  unique:true,
},
password: {
  type: String,
  required: [true, "Password is required"]
},
about: String,
profileUrl: String // CamelCase instead of camelCase
});

export const User= mongoose.models.users || mongoose.model("users", userschema);

