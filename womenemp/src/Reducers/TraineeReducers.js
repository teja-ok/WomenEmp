import React from 'react'

const inititalState = {
    trainees : []
}

export const traineeReducer = (state = inititalState, {type, payload}) => {
  switch(type){
    case 'getTrainees' :
        return {...state, trainees: payload}
    case 'addTrainee' :
            {
                state.trainees.push(payload);
                return state;
            }
    default :
        return state
  }
}

export const selectedTraineeReducer = (state = {}, action) => {
    switch(action.type){
        case 'getTrainee' :
            return {...state, ...action.payload}
        case 'updateTrainee' :
            return {...state, ...action.payload}
        case 'deleteTrainee' :
            return {}
        default :
            return state
    }
}