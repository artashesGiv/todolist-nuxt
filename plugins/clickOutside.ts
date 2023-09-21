let listeners: (ev: MouseEvent) => void

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted: (el, binding) => {
            listeners = (ev: MouseEvent) => onClick(ev, el, binding.value)
            addEventListener('click', listeners)
        },

        unmounted: (el, binding) => {
            removeEventListener('click', listeners)
        },
    })
})

const onClick = (
    event: MouseEvent,
    element: HTMLElement,
    callback: () => void,
) => {
    if (event.target == element || event.composedPath().includes(element)) {
        return
    }

    callback()
}
