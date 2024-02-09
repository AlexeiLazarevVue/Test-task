import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import { Button, Dropdown } from '@/shared'
import router from './router'
import { clickOutside } from '@/app/directives/clickOutside.ts'

const app = createApp(App)

app.component('button-component', Button)
app.component('dropdown-component', Dropdown)

app.use(createPinia())
app.use(router)
app.directive('click-outside', clickOutside)

app.mount('#app')
