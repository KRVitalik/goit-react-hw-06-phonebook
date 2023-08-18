import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const contactSlice = createSlice({
    name: "myContact",
    initialState,
    reducers: {
        setContacts(state, action) {
            state.contacts.push(action.payload)
            state.contacts.sort((firstContact, secondContact) =>
                firstContact.name.localeCompare(secondContact.name))
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        filteredContact(state, action) {
            state.filter = action.payload;
        },
    }
});

const persistConfig = {
    key: 'myContact',
    storage,
    blacklist: ['filter'],
};

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer)

export const {deleteContact, setContacts, filteredContact} = contactSlice.actions;
export const contactReducer = contactSlice.reducer;