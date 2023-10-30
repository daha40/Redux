const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce


const initialState = {
    name:'Daha',
    address:{
      street: 'CITE LAID HAFIANE N 400',
      city: 'KH',
      state: 'KH',
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
  const UpdateStreet = (street) =>{
    return{
      type:STREET_UPDATED,
      payload:street,
    }
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case STREET_UPDATED:
        //return {
          //...state,
          //address:{
            //...state.address,
            //street: action.payload
          //} 
        //}
          return produce(state, (draft) => {
            draft.address.street = action.payload
          })
        default: 
          return state;
    }
}


const store = createStore(reducer)
console.log('Initial State', store.getState())

const unSubscribe = store.subscribe(()=> console.log('Update state', store.getState()))

store.dispatch(UpdateStreet('N 400 CITE KOSIDAR'))

unSubscribe()