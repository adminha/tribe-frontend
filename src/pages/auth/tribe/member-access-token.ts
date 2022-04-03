import axios from "axios";
import API_URL from "../../api/global";

function MemberAccessToken() {
    return axios.get(API_URL + "/tribe/get-member-access-token").then((success) => {
       return success.data 
    })
}
export default MemberAccessToken