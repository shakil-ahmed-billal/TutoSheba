import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});
const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic