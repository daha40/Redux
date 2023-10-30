import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ordered,restocked} from './iceCreamSlice'



export const IcecreamView = () => {
  const numOficecreams = useSelector((state) => state.icecream.numOficecreams)
  const dispatch = useDispatch()
  return (
        <div>
          <h2> Number of icecreams {numOficecreams}</h2>
          <button onClick={() => dispatch(ordered())}>Order icecream</button>
          <button onClick={() => dispatch(restocked(3))}>Restock icecream</button>
        </div>

  )
}
