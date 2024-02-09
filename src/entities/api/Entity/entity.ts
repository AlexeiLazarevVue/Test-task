import { AxiosResponse } from 'axios'
import { baseApi } from '@/shared'

export const getEntity = async (
    data: EntityAPI.GET.GetEntity.Params,
): EntityAPI.GET.GetEntity.Response => {
    return await baseApi(data.base_domain).get(`/entity/${data.type}/${data.id}`)
}

export const createEntity = async (
    data: EntityAPI.POST.CreateEntity.Params,
): EntityAPI.GET.GetEntities.Response => {
    return await baseApi(data.base_domain).post(`/entity/${data.type}`, [
        {
            name: data.type,
        },
    ])
}

export namespace EntityAPI {
    export namespace GET {
        export namespace GetEntity {
            export type Params = {
                type: string
                base_domain: string
                id: number
            }
            export type Response = AxiosResponse<{
                id: number
                name: string
            }>
        }
    }
    export namespace POST {
        export namespace CreateEntity {
            export type Params = {
                type: string
                base_domain: string
            }
            export type Response = AxiosResponse<{
                id: number
                name: string
            }>
        }
    }
}
