import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxlength: 60,

    },
    password: {
        type: String,
        required: true,
        maxlength: 60,
    },  

},{
    timestamps:true
})

export default mongoose.models.admin || mongoose.model("admin",adminSchema )