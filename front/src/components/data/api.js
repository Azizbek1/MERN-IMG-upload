import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/';

export const singleFileUpload = async (data, options) => {
    try {
        await axios.post(`${apiUrl}singleFile`, data, options)
    }catch (err) {
        throw err;
    }
}

export const getSingleFiles = async () => {
    try {
        const {data} = await axios.get(`${apiUrl}getSingleFiles`)
        return data
    }catch (err) {
        throw err;
    } 
}


export const multipleFilesUpload = async (data, options) => {
    try {
       await axios.post(`${apiUrl}multipleFiles`, data, options)
    }catch (err) {
        throw err;
    } 
}


export const getMultipleFiles = async () => {
    try {
        const {data} = await axios.get(`${apiUrl}getMultleFiles`)
        return data
    }catch (err){
        throw err;
    }
}