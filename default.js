let activeStream = null
let selectedStream = null
const audioElm = document.querySelector('audio')
const audioMetadata = navigator.mediaSession && (navigator.mediaSession.metadata = new MediaMetadata())
const streamInput = document.querySelector('input')
const streamList = document.querySelector('ul')

document.querySelector('button.edit').addEventListener('click', (e) => {
    document.body.classList.toggle('edit')
})

const isMenu = () => document.body.classList.contains('menu')
const isEdit = () => document.body.classList.contains('edit')
const isSelected = () => document.body.classList.contains('selected')

function syncStorage() {
    localStorage.streamList = JSON.stringify([].slice.call(streamList.children).map(elm => elm.textContent))
}

streamInput.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
        const streamElm = createStreamElement(streamInput.value)
        streamList.appendChild(streamElm)
        syncStorage()
        streamInput.value = ''
    }
});

function createStreamElement(url) {
    const streamElm = document.createElement('li')
    const textElm = document.createElement('span')
    textElm.textContent = url
    streamElm.appendChild(textElm)
    const removeButton = document.createElement('button')
    streamElm.appendChild(removeButton)
    removeButton.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation()
        if (confirm(`Remove ${url} ?`)) {
            streamElm.remove()
            syncStorage()
        }
    })
    streamElm.addEventListener('click', (evt) => {
        if (isEdit()) {
            if(isSelected()) {
                document.body.classList.remove('selected')
                streamList.insertBefore(selectedStream, streamElm)
                selectedStream = null
                syncStorage()
                return
            }
            document.body.classList.add('selected')
            selectedStream = streamElm
            return 
        }
        audioElm.src = url
        audioElm.play()
        activeStream = streamElm
        audioMetadata && (audioMetadata.title = url.match(/[^/]+$/))
    })

    return streamElm
}

localStorage.streamList && JSON.parse(localStorage.streamList).forEach((url) => streamList.appendChild(createStreamElement(url)));

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

audioMetadata && navigator.mediaSession.setActionHandler('nexttrack', () => {
    (activeStream.nextElementSibling || activeStream.parentElement.firstElementChild).click()
})

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.controller || navigator.serviceWorker.register("sw.js", {scope: "./"})
}
