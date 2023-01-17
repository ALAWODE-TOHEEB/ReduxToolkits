import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id : "1", name : "soodiq", email : "soodiq@gmail.com"},
    { id : "2", name : "John", email : "John@gmail.com"},
];

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            console.log(action.payload);
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const { id, name, email} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
            console.log(action);
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            console.log(action);
            const existingUser = state.find(user => user.id === id)
            if(existingUser) {
                return state.filter(user => user.id !== id)
            }
        },
    }
})

export const { addUsers, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer