import { AxiosResponse } from 'axios'
import { authApi } from '@/shared'

export const getUserToken = async (
    data: UserAPI.GET.GetToken.Params,
): UserAPI.GET.GetToken.Response => {
    return await authApi().get('/token')
}

export namespace UserAPI {
    export namespace GET {
        export namespace GetToken {
            export type Params = string
            export type Response = AxiosResponse<{
                access_token: string
                base_domain: string
            }>
        }
    }
}
