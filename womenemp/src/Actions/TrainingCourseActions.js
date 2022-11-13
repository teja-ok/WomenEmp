import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchTrainingCourses = ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/TrainingCourse")
        // console.log(response)
        dispatch({type : 'getTrainingCourses', payload: response.data})
    };
    
export const fetchTrainingCourseById = (trainingCourseId)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/TrainingCourse/${trainingCourseId}`)
        dispatch({type : 'getTrainingCourseById', payload: response.data})
    };
export const fetchTrainingCourseByName = (CourseName)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/TrainingCourse/courseName/${CourseName}`)
        dispatch({type : 'getTrainingCourseByName', payload: response.data})
    };    
export const addTrainingCourse = (trainingcourse)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/TrainingCourse`,trainingcourse)
        dispatch({type : 'addTrainingCourse', payload: response.data})
    };
export const updateTrainingCourse = (trainingcourse)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/TrainingCourse`,trainingcourse)
        dispatch({type : 'updateTrainingCourse', payload: response.data})
    };
    export const deleteTrainingCourse = (trainingCourseId)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/TrainingCourse/${trainingCourseId}`)
        dispatch({type : 'deleteTrainingCourse', payload: response.data})
    };