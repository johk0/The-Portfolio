import { createSlice } from "@reduxjs/toolkit";

const sendForms = createSlice({
	name: "sendForms",
	initialState: {
		name: "",
		job: "",
		country: "",
		phone: 0,
		plan: "basic",
		message: "",
	},
	reducers: {
		setName: (state, action) => {
			state.name = action.payload;
		},
		setJob: (state, action) => {
			state.job = action.payload;
		},
		setCountry: (state, action) => {
			state.country = action.payload;
		},
		setPhone: (state, action) => {
			state.phone = action.payload;
		},
		setPlan: (state, action) => {
			state.plan = action.payload;
		},
		setMessage: (state, action) => {
			state.message = action.payload;
		},
		resetForm: (state) => {
			state.name = "";
			state.job = "";
			state.country = "";
			state.phone = 0;
			state.plan = "basic";
			state.message = "";
		},
	},
});

export const {
	setName,
	setJob,
	setCountry,
	setPhone,
	setPlan,
	setMessage,
	resetForm,
} = sendForms.actions;
export default sendForms.reducer;
