import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import amarati from "../assets/images/amarati.avif";
import amzapenzi from "../assets/images/amzapenzi.avif";
import hammer from "../assets/images/hammer.avif";
import ipenzi from "../assets/images/ipenzi.avif";
import sapo from "../assets/images/sapos.avif";
import span from "../assets/images/span.avif";

interface CounterState {
  value: number;
}
const initialState = {
  value: 0,
  features: [
    {
      image: ipenzi,
      name: "Spanners",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      image: sapo,
      name: "hammers",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      image: amarati,
      name: "alltes",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ],
  products: [
    {
      image: span,
      name: "Spanners",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      image: span,
      name: "Spanners",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      image: span,
      name: "Spanners",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      image: hammer,
      name: "hammers",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      image: amzapenzi,
      name: "alltes",
      description:
        "sum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ],
};

const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setFormInputs: (state, action: PayloadAction<object>) => {},
  },
});

export const {} = productSlice.actions;
export const productReducer = productSlice.reducer;
