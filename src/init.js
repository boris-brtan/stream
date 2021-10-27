import { active, audioMetadata, createStreamElement, isMenu, streamList, syncStorage, refreshStorage } from "./helper"
import { migrate } from './migration'

migrate()

document.querySelector('button.edit').addEventListener('click', (e) => document.body.classList.toggle('edit'))

audioMetadata && navigator.mediaSession.setActionHandler('previoustrack', () => {
    (active().previousElementSibling || active().parentElement.lastElementChild).click()
})
audioMetadata && navigator.mediaSession.setActionHandler('nexttrack', () => {
    (active().nextElementSibling || active().parentElement.firstElementChild).click()
})

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.controller || navigator.serviceWorker.register("sw.js", {scope: "./"})
}

refreshStorage()

document.querySelector('input').addEventListener('keyup', (evt) => {
    if (evt.key === 'Enter') {
        const streamElm = createStreamElement({
            title: evt.target.value,
            url: evt.target.value,
        }, streamElm)
        syncStorage()
        evt.target.value = ''
    }
});

function handleTouchStart(e) {
    const startX = e.touches && e.touches[0].clientX || e.clientX

    const handleSwipe = (evt) => {
        const swipeLength = (evt.touches && evt.changedTouches[0].clientX || evt.clientX) - startX
        if (!isMenu() && swipeLength > 150) {
            document.body.classList.add('menu')
        } else if (isMenu() && swipeLength < -150) {
            document.body.classList.remove('menu')
        }
        e.target.removeEventListener('touchend', handleSwipe)
        e.target.removeEventListener('mouseup', handleSwipe)
    }
    if ((!isMenu() && startX < 50) || (isMenu() && startX < 300)) {
        e.target.addEventListener('touchend', handleSwipe)
        e.target.addEventListener('mouseup', handleSwipe)
    }
}
document.body.ontouchstart = handleTouchStart
document.body.onmousedown = handleTouchStart
