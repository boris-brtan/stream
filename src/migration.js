export const version = 1

export function migrate() {
    if (localStorage.streamList || localStorage.stream === undefined) {
        localStorage.stream = JSON.stringify({
            items: JSON.parse(localStorage.streamList).map?.(i => ({
                title: i,
                url: i,
            })) || [],
            version
        })
        localStorage.removeItem('streamList')
    }
    if (version > localStorage.stream?.version) {
        console.log('migration needed');
    }
}
