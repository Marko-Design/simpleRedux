import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        return fetch(
            "https://jsonplaceholder.typicode.com/posts"
        ).then((res) => res.json())
    }
)
const postsSlice = createSlice({

    name:"posts",
    initialState: {
        list: [],
        status:null,
    },
    extraReducers : {
        [getPosts.pending] : (state,action) =>{
            state.status= "loading"
        },
        [getPosts.fulfilled] : (state,{payload}) => {
            state.list = payload
            state.status= "success"
        },
        [getPosts.rejected] : (state,action) => {
            state.status = "failed"
        },

    },


})

export default postsSlice.reducer
