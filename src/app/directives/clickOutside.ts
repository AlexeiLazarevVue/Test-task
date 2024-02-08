import type { Directive } from 'vue'

export const clickOutside: Directive = {
    mounted(element, { value }) {
        element.clickOutside = function (event: Event) {
            if (!(element === event.target || element.contains(event.target))) {
                value(event)
            }
        }

        document.body.addEventListener('click', element.clickOutside)
    },
    unmounted(element) {
        document.body.removeEventListener('click', element.clickOutside)
    },
}
