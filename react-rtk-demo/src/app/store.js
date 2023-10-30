import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import UserReducer from '../features/user/userSlice'


const store = configureStore({
    reducer:{
      cake:cakeReducer,
      icecream:icecreamReducer,
      user:UserReducer
    },
    //middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export default store