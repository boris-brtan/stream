export const streamList = document.querySelector('ul')
export const audioMetadata = navigator.mediaSession && (navigator.mediaSession.metadata = new MediaMetadata())

export const isEdit = () => document.body.classList.contains('edit')
export const isRename = () => document.body.classList.contains('rename')
export const isSelected = () => document.body.classList.contains('selected')

export const active = () => document.querySelector('li.active')
export const setActive = (node) => [active(), node].forEach((elm) => elm?.classList.toggle('active'))

export const syncStorage = () => {
    localStorage.stream = JSON.stringify({
        ...JSON.parse(localStorage.stream),
        items: [].slice.call(streamList.children).map(elm => ({
            title: elm.children[0].textContent,
            url: elm.children[1].textContent,
        })),
    })
}

export const refreshStorage = () => {
    streamList.innerHTML = ''
    localStorage.stream && JSON.parse(localStorage.stream).items?.forEach((item) => createStreamElement(item, streamList))
}

export const createElement = (tag, options = {}, appendToElement = null) => {
    const element = document.createElement(tag)
    Object.entries(options).forEach(([key, value]) => { element[key] = value })
    if (appendToElement) {
        return appendToElement.appendChild(element)
    }
    return element
}

let selectedStream = null
const audioElm = document.querySelector('audio')
export const createStreamElement = (item, appendToElement = null) => {
    const streamElm = createElement('li')
    const titleElm = createElement('span', { 
        textContent: item.title,
        contentEditable: false,
        tabIndex: 0,
    }, streamElm)
    const urlElm = createElement('span', { textContent: item.url, contentEditable: false }, streamElm)
    const renameButton = createElement('button', { className: 'rename' }, streamElm)
    const removeButton = createElement('button', { className: 'remove' }, streamElm)
    renameButton.addEventListener('click', (evt) => {
        evt.stopImmediatePropagation()
        if (document.body.classList.contains('rename')) {
            confirm('Apply changes ?') && syncStorage() || refreshStorage()
        }
        [streamElm, document.body].forEach((elm) => elm.classList.toggle('rename'))
        ,[titleElm, urlElm].forEach((elm) => elm.contentEditable = !JSON.parse(elm.contentEditable))
        window.getSelection().collapse(titleElm, 1)
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
        audioElm.play().catch((e) => console.error(e))
        setActive(streamElm)
        audioMetadata && (audioMetadata.title = item.title.match(/[^/]+$/))
    })
    streamElm.addEventListener('keydown', ({ key }) => {
        if ([' ', 'Enter'].includes(key)) {
            streamElm.click()
        }
    })
    if(appendToElement) {
        return appendToElement.appendChild(streamElm)
    }
    return streamElm
}
