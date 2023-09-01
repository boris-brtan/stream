import { active, audioMetadata, createStreamElement, streamList, syncStorage, refreshStorage } from './helper'
import { migrate } from './migration'

migrate()

document.querySelector('button.edit').addEventListener('click', () => document.body.classList.toggle('edit'))

audioMetadata && navigator.mediaSession.setActionHandler('previoustrack', () => {
    (active().previousElementSibling || active().parentElement.lastElementChild).click()
})
audioMetadata && navigator.mediaSession.setActionHandler('nexttrack', () => {
    (active().nextElementSibling || active().parentElement.firstElementChild).click()
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.controller || navigator.serviceWorker.register('sw.js', { scope: './' })
}

refreshStorage()

document.querySelector('input').addEventListener('keyup', (evt) => {
    if (evt.key === 'Enter') {
        createStreamElement({
            title: evt.target.value,
            url: evt.target.value,
        }, streamList)
        syncStorage()
        evt.target.value = ''
    }
})
