
export const streamList = document.querySelector('ul')
export const audioMetadata = navigator.mediaSession && (navigator.mediaSession.metadata = new MediaMetadata())

export const isMenu = () => document.body.classList.contains('menu')
export const isEdit = () => document.body.classList.contains('edit')
export const isRename = () => document.body.classList.contains('rename')
export const isSelected = () => document.body.classList.contains('selected')
export const active = () => document.querySelector('li.active')

export const syncStorage = () => {
    localStorage.stream = JSON.stringify({
        ...JSON.parse(localStorage.stream),
        items: [].slice.call(streamList.children).map(elm => ({
            title: elm.children[0].textContent,
            url: elm.children[1].textContent,
        }))
    })
}
export const refreshStorage = () => {
    streamList.innerHTML = ''
    localStorage.stream && JSON.parse(localStorage.stream).items?.forEach((item) => streamList.appendChild(createStreamElement(item)))
}

export const setActive = (node) => {
    active()?.classList.remove('active')
    node.classList.add('active')
}

let selectedStream = null
const audioElm = document.querySelector('audio')
export const createStreamElement = (item) => {
    const streamElm = document.createElement('li')
    const textElm = document.createElement('span')
    textElm.textContent = item.title
    streamElm.appendChild(textElm)
    const urlElm = document.createElement('span')
    urlElm.textContent = item.url
    streamElm.appendChild(urlElm)
    const renameButton = document.createElement('button')
    renameButton.classList.add('rename')
    streamElm.appendChild(renameButton)
    const removeButton = document.createElement('button')
    removeButton.classList.add('remove')
    streamElm.appendChild(removeButton)
    renameButton.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation()
        if (document.body.classList.contains('rename')) {
            if (confirm(`Apply changes ?`)) {
                syncStorage()
            } else {
                refreshStorage()
            }
            document.body.classList.remove('rename')
            streamElm.classList.remove('rename')
            textElm.contentEditable = urlElm.contentEditable = false
        } else {
            document.body.classList.add('rename')
            streamElm.classList.add('rename')
            textElm.contentEditable = urlElm.contentEditable = true
        }
    })
    removeButton.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation()
        if (confirm(`Remove ${item.title} ?`)) {
            streamElm.remove()
            syncStorage()
        }
    })
    streamElm.addEventListener('click', () => {
        if (isRename()) {
            return
        }
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
        audioElm.src = item.url
        audioElm.play()
        setActive(streamElm)
        audioMetadata && (audioMetadata.title = item.url.match(/[^/]+$/))
    })

    return streamElm
}