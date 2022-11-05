import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from './features/formSclice'
import { productReducer } from './features/productSlice'
import { urlSlice } from './features/urlSlice'

// ...

export const store = configureStore({
  reducer: {
    url:urlSlice,
    form:formReducer,
    product:productReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch