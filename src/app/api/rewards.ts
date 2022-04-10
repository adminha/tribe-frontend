import axios from 'axios'
import { getCookie } from 'cookies-next';
import API_URL from './global'


const NestJwtToken = getCookie("NestJwtToken")
const config = {
    headers: { Authorization: `Bearer ${NestJwtToken}` }
};

export async function UpdateUserWallet(data): Promise<any> {   
    return axios.post(API_URL + '/wallet/update', data, config).then((success) => {
        console.log(success.data)
        return success.data
    }, (failure) => {
        return failure
    })
}
export async function GenerateNewWallet(data) {
    return axios.post(API_URL + '/wallet/generate', data, config).then((success) => {
        return success.data
    }, (failure) => {
        return failure
    })
}
export async function SaveDefaultWallet(data) {
    return axios.post(API_URL + '/wallet/setdefault', data, config).then((success) => {
        return success.data
    }, (failure) => {
        return failure
    })
}

export async function SendRewards(data) {
    return axios.post(API_URL + '/reward/send', data, config).then((success) => {
        return success
    }, (failure) => {
        return failure
    })
}

export async function GetRewards(username) {
    return await axios.get(API_URL + '/reward/user?username=' + username, config)
}