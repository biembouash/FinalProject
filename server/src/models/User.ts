import mongoose from "mongoose";

const emailValidator = (email: string) => {
    const regExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/
    return email.match(regExpr)
}

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name cannot be empty"]
    },
    email:{
        type:String,
        required: [true, "Email cannot be empty"],
    },
    password:{
        type:String,
        required: [true, "Password cannot be empty"],
    },
})

UserSchema.path("email").validate(emailValidator, "Invlaid email format")

export default mongoose.model('User', UserSchema);