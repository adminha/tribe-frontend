import axios from 'axios'
import { getCookie } from 'cookies-next';
import API_URL from './global'

export function getTokenHeader() {
    const NestJwtToken = getCookie("NestJwtToken")
    const config = {
        headers: { Authorization: `Bearer ${NestJwtToken}` }
    };
    return config
}

export async function UpdateUserWallet(data): Promise<any> {   
    return axios.post(API_URL + '/wallet/update', data, getTokenHeader()).then((success) => {
        console.log(success.data)
        return success.data
    }, (failure) => {
        return failure
    })
}
export async function GenerateNewWallet(data) {
    return axios.post(API_URL + '/wallet/generate', data, getTokenHeader()).then((success) => {
        return success.data
    }, (failure) => {
        return failure
    })
}
export async function SaveDefaultWallet(data) {
    return axios.post(API_URL + '/wallet/setdefault', data, getTokenHeader()).then((success) => {
        return success.data
    }, (failure) => {
        return failure
    })
}

export async function SendRewards(data) {
    return axios.post(API_URL + '/reward/send', data, getTokenHeader()).then((success) => {
        return success
    }, (failure) => {
        return failure
    })
}

export async function GetRewards(username) {
    return await axios.get(API_URL + '/reward/user?username=' + username, getTokenHeader())
}