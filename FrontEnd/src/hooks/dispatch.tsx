import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../Redux/store'

function Usedispatch() {
    const Dispatch = useDispatch<AppDispatch>()
  return Dispatch
}

export default Usedispatch
