
# Input 3

## Structure

`Input3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | URL where the content is hosted. |
| `lang` | `string` | Required | Allowed language code. Refer Allowed languages section. |
| `contentType` | `string` | Required | Allowed values or html or text. If html is specified all html tags and special characters will be stripped before processing. |
| `labels` | `unknown[]` | Required | Labels to classify |

## Example (as JSON)

```json
{
  "url": "http://news.bbc.co.uk/2/hi/health/2284783.stm",
  "lang": "en",
  "contentType": "html",
  "labels": [
    "good",
    "bad"
  ]
}
```

