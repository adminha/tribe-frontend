import axios from 'axios'
import API_URL from './global'

async function LoginApi(data): Promise<any> {
    return axios.post(API_URL + '/auth/login', data).then((success) => {
        return axios.get(API_URL + "/tribe/get-guest-access-token").then((success) => {
            return [true, success.data]
        }, (failure) => {
            return [true, null]
        })
    }, (failure) => {
        return false
    })
}
export default LoginApi