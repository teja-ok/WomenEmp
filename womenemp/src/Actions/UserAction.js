import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchUser = (username, password)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/UserLogin/${username}/${password}`)
        console.log(response)
        dispatch({type : 'getUser', payload: response.data})
    };

export const deleteUser = (userId)=> 
    async function (dispatch){
        const response = await WomenEmpApi.delete(`/UserLogin/${userId}`)
        // console.log(response)
        dispatch({type : 'deleteUser', payload: response.data})
    };