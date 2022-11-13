import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNgos } from '../../Actions/NgoActions';
import NgosView from './NgosView';

function Ngos() {
    const ngos = useSelector((state) => state.allNgos.ngos)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchNgos())
    },[])
  return (
    <div>
        <NgosView ngos={ngos} />
    </div>
  )
}

export default Ngos