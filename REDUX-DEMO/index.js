
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()



const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


// CAKE ACTIONS
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  }
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload : qty,
  }
}




//ICECREAM
function orderIceCream(qty = 1){
  return{
    type:ICECREAM_ORDERED,
    payload: qty
  }
}

function restokIceCream(qty = 1){
  return{
    type: ICECREAM_RESTOCKED,
    payload:qty
  }
}




//const initialState = {
  //numOfCakes:10,
  //numOfIceCream:20
//}



const initialCakeState = {
  numOfCakes:10,
}

const initialIceCreamState = {
  numOfIceCream:20
}




//reducer cake
const CakeReducer = (state = initialCakeState, action) => {
      switch (action.type) {
        case CAKE_ORDERED:
          return {
            ...state,
            numOfCakes: state.numOfCakes - 1
          }
          case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
          default: 
            return state;
      }
}

//reducer ice cream
const IceCreamReducer = (state = initialIceCreamState, action) => {
      switch (action.type) {
        case ICECREAM_ORDERED:
          return {
            ...state,
            numOfIceCream: state.numOfIceCream -1
          }
        case ICECREAM_RESTOCKED:
          return{
              ...state,
              numOfIceCream: state.numOfIceCream + action.payload
        }
      default: 
        return state;
  }
}



//combineReducers
const rootReducers = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer,
})

//STORE
const store = createStore(rootReducers , applyMiddleware(logger))
console.log('Initial State', store.getState())

//SUBSCRIBE
const unSubscribe = store.subscribe(()=> ('Update state', store.getState()))

//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(restockCake(5))

const actions = bindActionCreators({orderCake,restockCake, orderIceCream, restokIceCream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(5)
actions.orderIceCream()
actions.restokIceCream(2)


unSubscribe()