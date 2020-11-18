import FingerprintJS from '@fingerprintjs/fingerprintjs'

export async function getfp() {
    const fp = await FingerprintJS.load()
    const result = await fp.get()
    console.log(result)
    return result
}

