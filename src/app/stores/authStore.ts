import {defineStore} from "pinia";
import {Stores} from "@/shared";
import {onMounted, ref} from "vue";
import {getUserToken} from "@/entities";

export const useAuthStore = defineStore(Stores.AUTH, () => {
    const token = ref<string>()
    const baseDomain = ref<string>()

    const onGetUserToken = async () => {
        const { data } = await getUserToken()
        token.value = data.access_token
        baseDomain.value = data.base_domain
        localStorage.setItem('token', token.value)
    }

    return {
        token,
        baseDomain,
        onGetUserToken
    }
})