let activeStream = null
const audioElm = document.querySelector('audio')
const audioMetadata = navigator.mediaSession && (navigator.mediaSession.metadata = new MediaMetadata())
const streamInput = document.querySelector('input')
const streamList = document.querySelector('ul')

streamInput.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 13) {
        const streamElm = createStreamElement(streamInput.value)
        streamList.appendChild(streamElm)
        localStorage.streamList = JSON.stringify([].slice.call(streamList.children).map(elm => elm.textContent))
        streamInput.value = ''
    }
});

function createStreamElement(url) {
    const streamElm = document.createElement('li')
    streamElm.addEventListener('click', (evt) => {
        audioElm.src = url
        audioElm.play()
        activeStream = streamElm
        if (audioMetadata) {
            audioMetadata.title = url.match(/[^/]+$/)
            navigator.mediaSession.setActionHandler('nexttrack', () => {
                (activeStream.nextElementSibling || activeStream.parentElement.firstElementChild).click()
            })
        }
    })
    streamElm.textContent = url

    return streamElm
}

localStorage.streamList && JSON.parse(localStorage.streamList).forEach((url) => streamList.appendChild(createStreamElement(url)));

if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("active service worker found, no need to register");
    } else {
        // Register the service worker
        navigator.serviceWorker
            .register("sw.js", {
                scope: "./"
            })
            .then(function (reg) {
                console.log("Service worker has been registered for scope: " + reg.scope);
            });
    }
}
