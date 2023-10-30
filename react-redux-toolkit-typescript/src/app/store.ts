import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import UserReducer from '../features/users/userSlice'

const store = configureStore({
    reducer:{
      cake:cakeReducer,
      icecream:icecreamReducer,
      user:UserReducer
    },
    //middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch