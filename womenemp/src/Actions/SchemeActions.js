import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchSchemes = () =>
    async function (dispatch) {
        const response = await WomenEmpApi.get("/Schemes")
        console.log(response)
        dispatch({ type: 'getAllSchemes', payload: response.data })
    };

export const fetchSchemesById = (id) =>
    async function (dispatch) {
        const response = await WomenEmpApi.get(`/Schemes/${id}`)
        console.log(response)
        dispatch({ type: 'getAllSchemes', payload: response.data })
    };
export const addSchemes = (scheme) =>
    async function (dispatch) {
        const response = await WomenEmpApi.post(`/Schemes`, scheme)
        dispatch({ type: 'addScheme', payload: response.data })
    };

export const fetchSchemesByType = (schemeType) =>
    async function (dispatch) {
        const response = await WomenEmpApi.get(`/Schemes/schemeType/${schemeType}`)
        console.log(response)
        dispatch({ type: 'getAllSchemes', payload: response.data })
    };
export const fetchSchemesByLaunchDate = (launchDate) =>
    async function (dispatch) {
        const response = await WomenEmpApi.get(`/Schemes/date/${launchDate}`)
        dispatch({ type: 'getAllSchemes', payload: response.data })
    };