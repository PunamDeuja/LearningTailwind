import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        user : []
    },
    reducers : {
        setBlog(){
            console.log("hello world")
        }
    }
})

export const {setBlog} = userSlice.actions
export default userSlice.reducer