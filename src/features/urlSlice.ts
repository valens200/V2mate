import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  url: string,
  showDownload:boolean,

}

const initialState = {
    url:"",
    showDownload:false,
 
};

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<{type: string, value:string}>) => {
        if(action.payload.type == 'reset'){
            state.showDownload = false;
        }else{
            state.url = action.payload.value;
        }
    },
    setShowDownload: (state, action: PayloadAction<null>) => {
        state.showDownload = true;
    },
  },
});

export const  { setUrl, setShowDownload} = productSlice.actions;
export const urlSlice = productSlice.reducer;
