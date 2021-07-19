import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3004'
    // +'https://dv-student-backend-2019.appspot.com/students'
    ,
    withCredentials: false,
    headers:{
        Accept: 'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/events')
    }
    // ,
    // getStus(){
    //     return apiClient.get('/stus')
    // }
}