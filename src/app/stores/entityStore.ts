import {defineStore} from "pinia";
import {Stores} from "@/shared";
import {ref} from "vue";
import {createEntity} from "@/entities";
import {useAuthStore} from "@/app/stores/authStore.ts";

export const useEntityStore = defineStore(Stores.ENTITY, () => {
    const entities = ref([])
    const types = [{
        title: 'Сделки',
        value: 'leads'
    },
        {
            title: 'Компании',
            value: 'companies'
        },
        {
            title: 'Контакты',
            value: 'contacts'
        }]
    const currentType = ref(types[0])
    const onGetEntities = () => {

    }

    const onCreateEntity = async () => {
        await createEntity({type: currentType.value.value, base_domain: useAuthStore().baseDomain})
    }

    return  {
        entities,
        onGetEntities,
        onCreateEntity,
        currentType,
        types
    }
})