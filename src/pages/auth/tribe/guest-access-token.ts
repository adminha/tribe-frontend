import axios from "axios";
import API_URL from "../../api/global";

function GuestAccessToken() {
    return axios.get(API_URL + "/tribe/get-guest-access-token").then((success) => {
       return success.data 
    })
}
export default GuestAccessToken