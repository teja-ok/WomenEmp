import React from 'react'

const inititalState = {
    trainingcourses : []
}

export const trainingCourseReducer = (state = inititalState, {type, payload}) => {
  switch(type){
    case 'getTrainingCourses' :
        return {...state, trainingcourses: payload}
    case 'addTrainingCourse' :
            {
                state.trainingcourses.push(payload);
                return state;
            }
    default :
        return state
  }
}

export const selectedTrainingCourseReducer = (state = {}, action) => {
    switch(action.type){
        case 'getTrainingCourseById' :
            return {...state, ...action.payload}
        case 'getTrainingCourseByName' :
            return {...state, ...action.payload}    
        case 'updateTrainingCourse' :
            return {...state, ...action.payload}
        case 'deleteTrainingCourse' :
            return {}
        default :
            return state
    }
}