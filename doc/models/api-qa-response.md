
# Api Qa Response

## Structure

`ApiQaResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `score` | `number` | Required | What is the confident score of the answer |
| `start` | `number` | Required | Start position of the answer in the context |
| `end` | `number` | Required | End position of the answer in the context |
| `answer` | `string` | Required | Answer to the question.<br>**Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "score": 147.4,
  "start": 224.84,
  "end": 12.78,
  "answer": "answer4"
}
```

