# Enterprise Only

```ts
const enterpriseOnlyController = new EnterpriseOnlyController(client);
```

## Class Name

`EnterpriseOnlyController`


# Get QA Enterprise

A Question Answering System retrieves the answer relevant to the question given by the user. A question answering system can be used for building a text based chatbots, search engines etc. Our question answering system  is mutilingual and supports 100 + languages. Please use ISO 639-2 2 digit language code  to get results. For example, use 'en' for English, 'ta' for Tamil, 'hi' for Hindi, 'fr' for French etc.

For ISO code reference, please check the link https://www.loc.gov/standards/iso639-2/php/code_list.php

For enterprise, the context for the questions will be stored in memory. The context can be read from wide range of file and any number of files.

```ts
async getQAEnterprise(
  body?: ApiQuestionRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiQuestionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ApiQuestionRequest \| undefined`](../../doc/models/api-question-request.md) | Body, Optional | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiQuestionResponse`](../../doc/models/api-question-response.md)

## Example Usage

```ts
const contentType = null;
const bodyInput: Input10 = {
  question: 'Who is father of Arya Stark?',
  lang: 'en',
};

const body: ApiQuestionRequest = {
  input: bodyInput,
};

try {
  const { result, ...httpResponse } = await enterpriseOnlyController.getQAEnterprise(body);
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
  "answer": "உப்பு, புளி, மிளகாய்"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorsError`](../../doc/models/errors-error.md) |
| 426 | Please use HTTPS protocol | [`M426Error`](../../doc/models/m426-error.md) |
| 429 | Too Many Requests | `ApiError` |

