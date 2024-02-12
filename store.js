import { configureStore} from "@reduxjs/toolkit"
import postsReducer from "../Posts/postsSlice"

export default configureStore({
    reducer: {
        posts : postsReducer
    },



})
