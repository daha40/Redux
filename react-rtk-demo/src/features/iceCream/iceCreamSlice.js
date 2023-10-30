import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

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
          builder.addCase(cakeOrdered.ordered, (state) => {
            state.numOficecreams--
          })
        }
    },
  
})

export default  iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions