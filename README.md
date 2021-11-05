# iothub-auth

Generates Shared Access Keys to connect to Azure IoT Hub from ES6 modules

[![Node.js CI](https://github.com/ridomin/iothub-auth/actions/workflows/node.js.yml/badge.svg)](https://github.com/ridomin/iothub-auth/actions/workflows/node.js.yml)

## api-versions support

IoT Hub has two authentication schemes:

- V1 `getIoTHubV1Credentials` Used for *classic* hubs:  `api-version=2020-09-30`
- V2 `getIoTHubV2Credentials` Used for *broker-enabled* hubs: `api-version=2021-06-30-preview`

## Usage

```html
<script type="module">
import {getIoTHubV2Credentials} from 'https://unpkg.com/iothub-auth'
; (async ()=> {
    const [username, password, websocket] = await getIoTHubV2Credentials(
        'host', 
        'device', 
        'MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=')
    document.write(username,password)
})()
</script>
```


