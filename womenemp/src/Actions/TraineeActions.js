import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchTrainees = ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/Trainee")
        // console.log(response)
        dispatch({type : 'getTrainees', payload: response.data})
    };
    
export const fetchTrainee = (id)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Trainee/${id}`)
        dispatch({type : 'getTrainee', payload: response.data})
    };
export const addTrainee = (trainee)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/Trainee`, trainee)
        const user = {
            "userId": 100,
            "userName": trainee.userName,
            "password": trainee.password
          }
        const response2 = await WomenEmpApi.post(`/UserLogin`, user)
        dispatch({type : 'addTrainee', payload: response.data})
    };
export const deleteTrainee = (id) => 
    async function (dispatch){
        const response = await WomenEmpApi.delete(`/Trainee/${id}`)
        dispatch({type: 'deleteTrainee'})
    }

export const updateTrainee = (trainee)=> 
    async function (dispatch){
        const response = await WomenEmpApi.put(`/Trainee`, trainee)
        dispatch({type : 'updateTrainee', payload: response.data})
    };