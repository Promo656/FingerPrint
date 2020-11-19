import FingerprintJS from '@fingerprintjs/fingerprintjs'

export async function getFp() {
    const fp = await FingerprintJS.load()
    return await fp.get()
}

export function parseHttpHeaders(httpHeaders: any) {
    return httpHeaders.split("\n")
        .map((x: string) => x.split(/: */, 2))
        .filter((x: any[]) => x[0])
        .reduce((ac: { [x: string]: any; }, x: any[]) => {
            ac[x[0]] = x[1]
            return ac;
        }, {});
}

export function getHttpHeaders() {
    let request = new XMLHttpRequest()
    request.open('GET', document.location.origin, false)
    request.send(null)
    return parseHttpHeaders(request.getAllResponseHeaders())
}
