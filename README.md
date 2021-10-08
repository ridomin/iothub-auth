# iothub-auth

Generates Shared Access Keys to connect to Azure IoT Hub from ES6 modules

[![Node.js CI](https://github.com/ridomin/iothub-auth/actions/workflows/node.js.yml/badge.svg)](https://github.com/ridomin/iothub-auth/actions/workflows/node.js.yml)

## Usage

```html
<script type="module">
import {getIoTHubV2Credentials} from 'https://www.unpkg.com/iothub-auth'
; (async ()=> {
    const [username, password] = await getIoTHubV2Credentials(
        'host', 
        'device', 
        'MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=')
    document.write(username,password)
})()
</script>
```

## apiversion

this preview uses an experimental IoTHub api-version available in private preview




