export const version = 1

export function migrate() {
    let items = []
    if (localStorage.streamList) {
        try {
            items = JSON.parse(localStorage.streamList).map(i => ({ title: i, url: i }))
        } catch (e) {
            console.debug('wrong format of streamList', e)
        }
        localStorage.removeItem('streamList')
    }
    if (localStorage.stream === undefined) {
        localStorage.stream = JSON.stringify({ items, version })
    }
    if (version > localStorage.stream?.version) {
        console.log('migration needed')
    }
}
