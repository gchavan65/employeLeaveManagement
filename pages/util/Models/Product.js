import mongoose from "mongoose";

const LeaveScrema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true,
        maxlength: 60,
    }, 
    lastname: {
        type: String,
        required: true,
        maxlength: 60,
    }, 
    email: {
        type: String,
        required: true,
        maxlength: 60,
        unique:true
    }, 
    phoneno:{
        type:Number,
        required:true,
        maxlength:10
    },
    password: {
        type: String,
        required: true,
        maxlength: 60,
    },
    Balance_leave:{
        type: String,
        required: true,
        maxlength: 60,
    },

        leavesData: [{
            
            Leave_date_from: {
                type: String,
                
            },

            Leave_date_to: {
                type: String  ,
                
            },
            address: {
                type: String  ,
                
            },
            Balance_leave:{
                type: Number  ,
                
            },
            Leave_requested:{
                type: Number  ,
                
            },
            status1:{
                type:Number,
                default:0
            },
            status2:{
                type:Number,
                default:0
            },
            status3:{
                type:Number,
                default:0
            },
            time : { type: Number, default: (Date.now) } 
        },
        {
            timestamps:true
        }
    ],
    
},
{
    timestamps:true
}

)

export default mongoose.models.Leave || mongoose.model("Leave",LeaveScrema )