import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonFile from "../../data/data.json";

export const fetchData = createAsyncThunk("fetchData", async () => {
	// const respone = await fetch(jsonFile);
	const respone = await fetch(
		"https://raw.githubusercontent.com/johk0/portoflio-data/main/data.json"
	);

	const res = await respone.json();
	return res;
	// fetch("https://raw.githubusercontent.com/johk0/portoflio-data/main/data.json")
	// 	.then((res) => res.json())
	// 	.then((data) => data);
});

const data = createSlice({
	name: "services",
	initialState: [{ id: 1, name: "test" }],
	reducers: {},
	extraReducers: (builder) => {
		// console.log("action");

		builder.addCase(fetchData.rejected, (state, action) => {
			console.error("fetch data faild", action.error.message);
			console.log("reject ", action.payload);
		});

		builder.addCase(fetchData.fulfilled, (initialState, action) => {
			// console.log(action);
			return action.payload;
		});
	},
});
// export const fData = fetchData.reducers;
export default data.reducer;
