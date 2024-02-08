import axios from "axios";
import config from "@/app/config.ts";
import {useAuthStore} from "@/app/stores/authStore.ts";

export const baseApi = (base_domain) => {
    return axios.create({
        baseURL: config.baseURL(base_domain),
        headers: {
            Authorization: `${useAuthStore().token}`,
            'Content-Type': 'application/json'
        }
    })
}
export const genesisApi = axios.create({
    baseURL: config.genesis,
    headers: {
        'X-client-id': config.x_client_id,
        'Content-Type': 'application/json'

}
})