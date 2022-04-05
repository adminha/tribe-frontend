import axios from 'axios'
import { getCookie } from 'cookies-next';
import API_URL from './global'

async function RewardsAPI(data): Promise<any> {
    const NestJwtToken = getCookie("NestJwtToken")
    const config = {
        headers: { Authorization: `Bearer ${NestJwtToken}` }
    };
    return axios.post(API_URL + '/wallet/update', data, config).then((success) => {
        console.log(success.data)
        return success.data
    }, (failure) => {
        return failure
    })
}
export default RewardsAPI