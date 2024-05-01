import { configureStore } from "@reduxjs/toolkit";
import fetchData from "./slices/alldata";
import sendfomrs from "./slices/sendfomrs";
export const store = configureStore({
	reducer: {
		data: fetchData,
		formData: sendfomrs,
	},
});
export default store;
