import React from 'react'

const inititalState = {
    ngos : []
}

export const NgoReducer = (state = inititalState, {type, payload}) => {
  switch(type){
    case 'getNgos' :
        return {...state, ngos: payload}
    case 'addNgo' :
            {
                state.ngos.push(payload);
                return state;
            }
    default :
        return state
  }
}

export const selectedNgoReducer = (state = {}, action) => {
    switch(action.type){
        case 'getNgo' :
            return {...state, ...action.payload}
        case 'updateNgo' :
            return {...state, ...action.payload}
        case 'deleteNgo' :
            return {}
        default :
            return state
    }
}