import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";

type data = {
  name: string;
  value: number;
};
interface CounterState {
  showPortal: boolean;
  url: string;
  resultUrl:string,
  showDownload: boolean;
  downloadDiv: boolean;
  videoData: data[];
}

const initialState = {
  videoData: [
    {
      name: "Resolution",
      value: 108080,
    },
    {
      name: "FileSize",
      value: 53.9,
    },
  ],
  url: "",
  resultUrl:"",
  showPortal: false,
  showDownload: false,
  downloadDiv: false,
} as CounterState;

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<{ type: string; value: string }>) => {
      if (action.payload.type == "reset") {
        state.showDownload = false;
      } else  if (action.payload.type = "result"){
        state.resultUrl = action.payload.value;
      }else{
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
    setShowPortal: (state, action: PayloadAction<{ type: boolean }>) => {
      if (action.payload.type) {
        state.showPortal = true;
      }else{
        state.showDownload = false;
      }
    },
  },
});

export const { setUrl, setShowDownload, setShowPortal, setShowDownloadDiv } =
  productSlice.actions;
export const urlSlice = productSlice.reducer;
