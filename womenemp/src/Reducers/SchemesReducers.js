import React from 'react'

const inititalState = {
    schemes: []
}

export const schemesReducer = (state = inititalState, { type, payload }) => {
    switch (type) {
        case 'getAllSchemes':
            return { ...state, schemes: payload }
        case 'addScheme':
            {
                state.schemes.push(payload);
                return state;
            }
        default:
            return state
    }
}

export const selectedSchemeReducer = (state = {}, action) => {
    switch (action.type) {
        case 'getScheme':
            return { ...state, ...action.payload }
        case 'updateSchemes':
            return { ...state, ...action.payload }
        case 'deleteScheme':
            return {}
        default:
            return state
    }
}