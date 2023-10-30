import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './cakeSlice'

const CakeView = () => {
  const [value, setValue] = React.useState(1)
  const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2> Number of cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <input type='number' value={value} onChange={ e => setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
    </div>
  )
}

export default CakeView