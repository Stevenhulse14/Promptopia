import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

/* the "models" object is provided by the mongoose library and sotre all the registered models
   If a model named "User" already exists in the "models" object, it assignes that existing model to the "User" variable
   This prevents you from redefineing models that already exist, and reuses the existing model
   if a

*/

const User = models.User || model("User", userSchema);

export default User;
