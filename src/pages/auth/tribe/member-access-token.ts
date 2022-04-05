import axios from "axios";
import API_URL from "../../api/global";
import { setCookies } from 'cookies-next';

function MemberAccessToken() {
    return axios.get(API_URL + "/tribe/get-member-access-token").then((success) => {
        setCookies('TribeAccessToken', success.data)
    })
}
export default MemberAccessToken