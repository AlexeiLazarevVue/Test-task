import { defineStore } from 'pinia'
import { Stores } from '@/shared'
import { onMounted, ref } from 'vue'
import { createEntity, type Entity, getEntities, getEntity } from '@/entities'
import { useAuthStore } from '@/app/stores/authStore.ts'

export const useEntityStore = defineStore(Stores.ENTITY, () => {
    const authStore = useAuthStore()
    const isEntityLoading = ref<boolean>(false)

    const entities = ref<Entity[]>([])
    const types = [
        {
            title: 'Не указано',
            value: '',
        },
        {
            title: 'Сделки',
            value: 'leads',
        },
        {
            title: 'Компании',
            value: 'companies',
        },
        {
            title: 'Контакты',
            value: 'contacts',
        },
    ]
    const currentType = ref(types[0])
    const onGetEntity = async (id: number) => {
        const entity = await getEntity({
            type: currentType.value.value,
            base_domain: authStore.baseDomain,
            id,
        })

        return entity
    }

    const onCreateEntity = async () => {
        isEntityLoading.value = true
        const data = await createEntity({
            type: currentType.value.value,
            base_domain: authStore.baseDomain,
        })
        const newEntities = data.data._embedded[currentType.value.value]
        console.log(data.data._embedded)

        for (const entity of newEntities) {
            const fetchedEntity = await onGetEntity(entity.id)
            entities.value.push(fetchedEntity.data)
            console.log(entities.value)
        }
        isEntityLoading.value = false
    }

    return {
        entities,
        onGetEntity,
        onCreateEntity,
        isEntityLoading,
        currentType,
        types,
    }
})
