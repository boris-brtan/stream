
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
    localStorage.stream && JSON.parse(localStorage.stream).items?.forEach((item) => createStreamElement(item, streamList))
}

export const setActive = (node) => {
    [active(), node].forEach((elm) => elm?.classList.toggle('active'))
}

export const createElement = (tag, options = {}, appendToElement = null) => {
    const element = document.createElement(tag)
    Object.entries(options).forEach(([key, value]) => {
        element[key] = value
    })
    if (appendToElement) {
        return appendToElement.appendChild(element)
    }
    return element
}

let selectedStream = null
const audioElm = document.querySelector('audio')
export const createStreamElement = (item, appendToElement = null) => {
    const streamElm = createElement('li')
    const textElm = createElement('span', {
        textContent: item.title,
    }, streamElm)
    const urlElm = createElement('span', {
        textContent: item.url,
    }, streamElm)
    const renameButton = createElement('button', {
        className: 'rename',
    }, streamElm)
    streamElm.appendChild(renameButton)
    const removeButton = createElement('button', {
        className: 'remove',
    }, streamElm)
    renameButton.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation()
        if (document.body.classList.contains('rename')) {
            if (confirm(`Apply changes ?`)) {
                syncStorage()
            } else {
                refreshStorage()
            }
            [streamElm, document.body].forEach((elm) => elm.classList.remove('rename'))
            [textElm, urlElm].forEach((elm) => elm.contentEditable = false) 
        } else {
            [streamElm, document.body].forEach((elm) => elm.classList.add('rename'))
            [textElm, urlElm].forEach((elm) => elm.contentEditable = true)
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
        audioElm.play().catch((e) => e)
        setActive(streamElm)
        audioMetadata && (audioMetadata.title = item.title.match(/[^/]+$/))
    })
    if(appendToElement) {
        return appendToElement.appendChild(streamElm)
    }
    return streamElm
}
