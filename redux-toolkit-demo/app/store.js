const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/iceCream/iceCreamSlice')
const UserReducer = require('../features/user/UserSlice')

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer:{
      cake:cakeReducer,
      icecream:icecreamReducer,
      user:UserReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


module.exports = store