import axios from 'axios'
import MemberAccessToken from '../auth/tribe/member-access-token'
import API_URL from './global'
import { setCookies } from 'cookies-next';

async function LoginApi(data): Promise<any> {
    return axios.post(API_URL + '/auth/login', data).then((success) => {
        setCookies('NestJwtToken', success.data.access_token)
        MemberAccessToken()
        return [true, success.data]
    }, (failure) => {
        return false
    })
}
export default LoginApi