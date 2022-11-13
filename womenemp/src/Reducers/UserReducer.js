export const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'getUser' :
            return {...state, ...action.payload}
        case 'deleteUser' :
            return {}
        default :
            return state
    }
}