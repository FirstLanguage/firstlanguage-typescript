# Advanced AP Is

Advanced text processing APIs

```ts
const advancedAPIsController = new AdvancedAPIsController(client);
```

## Class Name

`AdvancedAPIsController`

## Methods

* [Get Classification](/doc/controllers/advanced-ap-is.md#get-classification)
* [Get QA](/doc/controllers/advanced-ap-is.md#get-qa)
* [Get NER](/doc/controllers/advanced-ap-is.md#get-ner)


# Get Classification

# Stemmer : Defintion and it's usage

# Languages covered:

```ts
async getClassification(
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Responseclassify>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Responseclassify`](/doc/models/responseclassify.md)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await advancedAPIsController.getClassification(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error output | [`ErrorsError`](/doc/models/errors-error.md) |
| 426 | Please use HTTPS protocol | [`ApiClassify426Error`](/doc/models/api-classify-426-error.md) |


# Get QA

# Stemmer : Defintion and it's usage

# Languages covered:

```ts
async getQA(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiQaResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiQaResponse`](/doc/models/api-qa-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await advancedAPIsController.getQA();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "score": 0.028566665947437286,
  "start": 0,
  "end": 20,
  "answer": "உப்பு, புளி, மிளகாய்"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorsError`](/doc/models/errors-error.md) |
| 426 | Please use HTTPS protocol | [`M426Error`](/doc/models/m426-error.md) |


# Get NER

# Stemmer : Defintion and it's usage

# Languages covered:

```ts
async getNER(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiNerResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiNerResponse[]`](/doc/models/api-ner-response.md)

## Example Usage

```ts
const contentType = null;
try {
  const { result, ...httpResponse } = await advancedAPIsController.getNER();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
[
  {
    "entity_group": "PER",
    "word": "محمد",
    "start": "4",
    "end": "9"
  },
  {
    "entity_group": "LOC",
    "word": "برلين",
    "start": "18",
    "end": "24"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorsError`](/doc/models/errors-error.md) |
| 426 | Please use HTTPS protocol | [`M426Error`](/doc/models/m426-error.md) |

