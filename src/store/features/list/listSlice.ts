import {ListApiArgs} from "@/api";
import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "@/store";
interface ListState {
	listArgs: ListApiArgs;
	end_id: string;
}
const initialState: ListState = {
	listArgs: {},
	end_id: "",
};
export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {
		changeListArgs: (state, action: {payload: ListApiArgs}) => {
			if (JSON.stringify(action.payload) === "{}") {
				state.listArgs = {};
				return;
			}
			state.listArgs = Object.assign(state.listArgs, action.payload);
		},
		changeEndId: (state, action: {payload: string}) => {
			state.end_id = action.payload;
		},
	},
});
export const listReducer = listSlice.reducer;
export const {changeListArgs, changeEndId} = listSlice.actions;
export const selectList = (state: RootState) => state.list;
