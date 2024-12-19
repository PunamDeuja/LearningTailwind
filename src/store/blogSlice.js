import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        status: "success",
        singleBlog: {},
        deleteBlog: {}
    },
    reducers: {
        setBlog(state, action) {
            state.blogs = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setSingleBlog(state, action) {
            state.singleBlog = action.payload
        },
        setDeleteBlog(state, action) {
            state.deleteBlog = action.payload
        }
    }
})

export const { setBlog, setStatus, setSingleBlog, setDeleteBlog } = blogSlice.actions
export default blogSlice.reducer
export function fetchBlog() {
    return async function fetchBlogThunks(dispatch) {
        try {
            const response = await axios.get("https://67512d6569dc1669ec1d4f68.mockapi.io/blogs")
            dispatch(setStatus("success"))
            dispatch(setBlog(response.data))
        } catch (error) {
            dispatch(setStatus("error"))
        }
    }

}

export function fetchSingleBlog(id) {
    return async function fetchBlogThunks(dispatch) {
        try {
            const response = await axios.get("https://67512d6569dc1669ec1d4f68.mockapi.io/blogs/" + id)
            dispatch(setStatus("success"))
            dispatch(setSingleBlog(response.data))
        } catch (error) {
            console.log(error)
            dispatch(setStatus("error"))
        }
    }

}

export function fetchDeleteBlog(id) {
    return async function fetchDeleteBlogThunks(dispatch) {
        try {
            const response = await axios.delete("https://67512d6569dc1669ec1d4f68.mockapi.io/blogs/" + id)
            dispatch(setStatus("success"))
        } catch (error) {
            dispatch(setStatus("error"))
        }
    }

}