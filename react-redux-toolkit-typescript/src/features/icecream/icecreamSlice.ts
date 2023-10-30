import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

type initialState = {
  numOficecreams: number
}

const initialState: initialState  = {
  numOficecreams : 20,
}


const iceCreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
      ordered:(state) => {
        state.numOficecreams --
      },
      restocked:(state,action: PayloadAction<number> ) => {
        state.numOficecreams += action.payload
      },
      /*
          extraReducers:{
          ['cake/ordered']:() => {
          state.numOficecreams --
          },

          extraReducers: (builder) => {
          builder.addCase(cakeOrdered.ordered, (state) => {
            state.numOficecreams--
          })
        }
      */
    },
  
})

export default  iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions