import {AxiosResponse} from "axios";
import {baseApi} from "@/shared";

export const getEntities = async (data: EntityAPI.GET.GetEntities.Params) : EntityAPI.GET.GetEntities.Response => {

}

export const createEntity = async (data: EntityAPI.POST.CreateEntity.Params) : EntityAPI.GET.GetEntities.Response => {
  await baseApi(data.base_domain).post(`/${data.type}`)
}

export namespace EntityAPI {
    export namespace GET {
        export namespace GetEntities {
            export type Params = string
            export type Response = AxiosResponse<string>
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