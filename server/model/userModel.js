import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName : {type: String, required: true},
    email : {type : String, required: true, unique: true},
    password : {type : String, required: true},
    profilePicture : {type : String},
    createdAt : {type : Date, default : Date.now},
    updatedAt : {type : Date, default : Date.now},
    role : {type : String, enum : ['admin', 'customer'], default : 'customer'},
    orderHistory : [{type : mongoose.Schema.Types.ObjectId, ref : 'Order'}]
}, {timestamps : true});

const User = mongoose.model('User', userSchema);



export const validateUserBody = (req, res, next) => {
    const { userName, email, pass, profilePic, role} = req.body;
    if (!userName || !email || !pass ) {
        return res.status(400).send("Missing required fields: userName, email, password, profilePic, or role");
    }
    next();
}


export default User;


//middlware for checking the correct body of the user request