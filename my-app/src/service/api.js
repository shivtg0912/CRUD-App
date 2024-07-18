import axios from 'axios';
const URL='http://localhost:8000';
export const addUser=async(data)=> {
    try {
        await axios.post(`${URL}/add`,data);
        console.log("yay");
    }catch(error) {
        console.log("Error while catching addUser API ",error);
    }
}