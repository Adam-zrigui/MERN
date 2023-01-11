import axios from "axios";
const axiosBaseQuery = ({baseUrl} = {baseUrl: ''}) => 
   async (query: any) => {
    try {
        const response = await axios({
            url: baseUrl + query.url,
            method: query.method,
            data: query.data
        });
        return {
            data: response.data
        }
    } catch (er : any) {
        return {
            error: {status: er.response?.status, data: er.response?.data}
        }
    }
   }

export default axiosBaseQuery
