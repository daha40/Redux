const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice')

const initialState = {
  numOficecreams : 20,
}


const iceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
      ordered:(state) => {
        state.numOficecreams --
      },
      restocked:(state,action) => {
        state.numOficecreams += action.payload
      },
        //extraReducers:{
        //['cake/ordered']:() => {
        // state.numOficecreams --
        //},
        extraReducers: (builder) => {
          builder.addCase(cakeActions.ordered, (state) => {
            state.numOficecreams --
          })
        }
    },
  
})

module.exports = iceCreamSlice.reducer
module.exports.icecreamActions = iceCreamSlice.actions