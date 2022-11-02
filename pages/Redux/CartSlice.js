import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice({
    name:"laveSlcie",
    initialState:{
        user:[],
        status1:0,
        status2:0,
        status3:0
        // resuetedLEave:0
    },
    reducers:{
        userSate:(state,action)=>{
            state.user.push(action.payload)
            // resuetedLEave(action.payload)
        },
        reset:(state)=>{
            state.user=[]
            state.status2=0,
            state.status3=0
        }
       
    }
  
})

export const {userSate , reset}= leaveSlice.actions;

export  default leaveSlice.reducer;