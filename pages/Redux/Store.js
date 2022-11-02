import {configureStore} from "@reduxjs/toolkit";
import userSate from "./CartSlice";

export default  configureStore({
    reducer: {
      user: userSate ,
    },
  });