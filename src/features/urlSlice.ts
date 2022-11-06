import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type data = {
  name:string,
  value:number
}
interface CounterState {
  url: string;
  showDownload: boolean;
  downloadDiv: boolean;
  videoData: data[]
}

const initialState = {
  videoData: [
    {
      name:"Resolution",
      value:108080,
    },
    {
      name:"FileSize",
      value:53.9,
    }
  ],
  url: "",
  showDownload: false,
  downloadDiv: false,
}as CounterState;

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<{ type: string; value: string }>) => {
      if (action.payload.type == "reset") {
        state.showDownload = false;
      } else {
        state.url = action.payload.value;
      }
    },
    setShowDownload: (state, action: PayloadAction<null>) => {
      state.showDownload = true;
    },
    setShowDownloadDiv: (state, action: PayloadAction<{ type: string }>) => {
      if (action.payload.type == "show") {
        state.downloadDiv = true;
      } else {
        state.downloadDiv = false;
      }
    },
  },
});

export const { setUrl, setShowDownload, setShowDownloadDiv } =
  productSlice.actions;
export const urlSlice = productSlice.reducer;
