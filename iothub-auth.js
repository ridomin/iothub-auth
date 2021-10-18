/**
 * Creates the credentials (username/password) to connect to AzureIoT Hub with SasKeys using the preview api-version
 * 
 * @param {string} hostname 
 * @param {string} deviceId 
 * @param {string} key 
 * @param {number} expiresInMins 
 * @returns 
 */
export const getIoTHubV2Credentials = async (hostname, deviceId, key, expiresInMins = 5) => {
    const apiversion = '2021-06-30-preview'
    const generateToken = async (resource, key, expires) => {
        const createHmac = async (msg, key) => {
            const keyBytes = Uint8Array.from(window.atob(key), c => c.charCodeAt(0))
            const msgBytes = Uint8Array.from(msg, c => c.charCodeAt(0))
            const cryptoKey = await window.crypto.subtle.importKey(
                'raw', keyBytes, { name: 'HMAC', hash: 'SHA-256' },
                true, ['sign']
            )
            const signature = await window.crypto.subtle.sign('HMAC', cryptoKey, msgBytes)
            return window.btoa(String.fromCharCode(...new Uint8Array(signature)))
        }
        return await createHmac(`${resource}\n\n\n${expires}\n`, key)
    }
    const expires = Math.ceil(Date.now() + expiresInMins * 60)
    const username = `av=${apiversion}&h=${hostname}&did=${deviceId}&am=SASb64&se=${expires}`
    const password = await generateToken(`${hostname}\n${deviceId}`, key, expires)
    return [username, password]
}