
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `apikey` | `string` | API Key can be copied from your dashboard |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  apikey: 'apikey',
})
```

## FirstLanguage API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| basicAPIs | Gets BasicAPIsController |
| advancedAPIs | Gets AdvancedAPIsController |
| enterpriseOnly | Gets EnterpriseOnlyController |

