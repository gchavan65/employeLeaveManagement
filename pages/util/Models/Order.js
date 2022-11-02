import mongoose, { Schema } from "mongoose";

const HistorySchema = new mongoose.Schema({
    _id:{
        type:Schema.Types.ObjectId, 
        ref: 'Leave',
        required: true,  
    },
    username: {
        type: String,
        required: true,
        maxlength: 60,

    },
    Balance_leave: {
        type: Number,
        required: true,
       
    },
    Leave_requested: {
        type: Number,
        required: true,
       

    },   address: {
        type: String  ,
        required: true,
    },
    Leave_date_from: {
        type: String,
        required: true,
    },

    Leave_date_to: {
        type: String  ,
        required: true,
    },
    
},
{
    timestamps:true
}

)

export default mongoose.models.History || mongoose.model("History",HistorySchema )