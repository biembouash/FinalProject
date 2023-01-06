"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const emailValidator = (email) => {
    const regExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/;
    return email.match(regExpr);
};
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty"],
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty"],
    },
});
UserSchema.path("email").validate(emailValidator, "Invlaid email format");
exports.default = mongoose_1.default.model('User', UserSchema);
