import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const contactSlice =  createSlice({
    name: "myContact",
    initialState,
    reducers: {
        setContacts(state, action) {
            console.log(state)
        },
        deleteContact(state, action) {
            console.log(state, action)
        },
        filteredContact(state, action) {
            console.log(state, action)
        },
    }
})

console.log(contactSlice)
export const {deleteContact, setContacts, filteredContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;