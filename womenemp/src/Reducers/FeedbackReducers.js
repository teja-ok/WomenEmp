import React from 'react'

const inititalState = {
    feedbacks : []
}

export const feedbackReducer = (state = inititalState, {type, payload}) => {
  switch(type){
    case 'getFeedbacks' :
        return {...state, feedbacks: payload}
    case 'addFeedback' :
            {
                state.feedbacks.push(payload);
                return state;
            }
    default :
        return state
  }
}

export const selectedFeedbackReducer = (state = {}, action) => {
    switch(action.type){
        case 'getFeedback' :
            return {...state, ...action.payload}
        case 'updateFeedback' :
            return {...state, ...action.payload}
        case 'deleteFeedback' :
            return {}
        default :
            return state
    }
}