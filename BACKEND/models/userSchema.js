import {Schema, model} from "mongoose";

const userSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  role: {type: String, enum: ["admin", "user"], default: "user"}
});

const User = model("User", userSchema);

export default User;
