
import {ordered,restocked} from './icecreamSlice'
import { useAppSelector, useAppDispatch } from '../../app/Hooks'



export const IcecreamView = () => {
  const numOficecreams = useAppSelector((state) => state.icecream.numOficecreams)
  const dispatch = useAppDispatch()
  return (
        <div>
          <h2> Number of icecreams {numOficecreams}</h2>
          <button onClick={() => dispatch(ordered())}>Order icecream</button>
          <button onClick={() => dispatch(restocked(3))}>Restock icecream</button>
        </div>

  )
}
