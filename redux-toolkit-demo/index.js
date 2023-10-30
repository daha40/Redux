const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/iceCream/iceCreamSlice').icecreamActions
const fetchUsers = require('./features/user/UserSlice').fetchUsers

console.log( 'initialState' , store.getState())

const unsubscribe = store.subscribe(()=>{
  console.log('update state', store.getState() )
})

store.dispatch(fetchUsers())

/*
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))



store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(3))

unsubscribe()
*/