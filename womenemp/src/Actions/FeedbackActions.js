import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchFeedbacks= ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/Feedback")
        console.log(response)
        dispatch({type : 'getFeedbacks', payload: response.data})
    };
    export const fetchFeedback= (id)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Feedback/${id}`)
        console.log(response)
        dispatch({type : 'getFeedbacks', payload: response.data})
    };
export const fetchFeedbackByUserId = (userId)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Feedback/User/${userId}`)
        console.log(response)
        dispatch({type : 'getFeedback', payload: response.data})
    };
export const addFeedback = (feedback)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/Feedback`, feedback)
        dispatch({type : 'addFeedback', payload: response.data})
    };
    export const updateFeedback = (feedback)=> 
    async function (dispatch){
        const response = await WomenEmpApi.put(`/Feedback`, feedback)
        dispatch({type : 'addFeedback', payload: response.data})
    };
    
export const fetchfeedbacksByScheme= (schemeName)=> 
async function (dispatch){
    const response = await WomenEmpApi.get(`/Feedback/Scheme/${schemeName}`)
    console.log(response)
    dispatch({type : 'getFeedbacks', payload: response.data})
};
export const fetchfeedbacksByTraining= (courseName)=> 
async function (dispatch){
    const response = await WomenEmpApi.get(`/Feedback/TrainingCourse/${courseName}`)
    dispatch({type : 'getFeedbacks', payload: response.data})
};