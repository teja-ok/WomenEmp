import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchNgos = ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/NGO")
        // console.log(response)
        dispatch({type : 'getNgos', payload: response.data})
    };
    
export const fetchNgo = (id)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/NGO/${id}`)
        dispatch({type : 'getNgo', payload: response.data})
    };
export const addNgo = (ngo)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/NGO`, ngo)
        dispatch({type : 'addNgo', payload: response.data})
    };
export const deleteNgo = (id) => 
    async function (dispatch){
        const response = await WomenEmpApi.delete(`/NGO/${id}`)
        dispatch({type: 'deleteNgo'})
    }

export const updateNgo = (ngo)=> 
    async function (dispatch){
        const response = await WomenEmpApi.put(`/NGO`, ngo)
        dispatch({type : 'updateNgo', payload: response.data})
    };