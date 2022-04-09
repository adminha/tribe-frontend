import axios from "axios"
import API_URL from "./global"

async function RegisterApi(data): Promise<any> {
    return axios.post(API_URL + '/users/register', data).then((success) => {
        return success
    }, (failure) => {
        throw failure
    })
}
export default RegisterApi