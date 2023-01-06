import mongoose from "mongoose";

//Email type validator
const emailValidator = (email: string) => {
    const regExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/
    return email.match(regExpr)
}

//The model of the Database collection 'User'
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name cannot be empty"] //This field is require and the error mensage is "Name cannot be empty"
    },
    email:{
        type:String,
        required: [true, "Email cannot be empty"], //This field is require and the error mensage is "Author cannot be empty"
    },
    password:{
        type:String,
        required: [true, "Password cannot be empty"], //This field is require and the error mensage is "Author cannot be empty"
    },
})

UserSchema.path("email").validate(emailValidator, "Invlaid email format")//Checks for a valid email

export default mongoose.model('User', UserSchema);