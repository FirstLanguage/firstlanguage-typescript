# Advanced AP Is

Advanced text processing APIs

```ts
const advancedAPIsController = new AdvancedAPIsController(client);
```

## Class Name

`AdvancedAPIsController`

## Methods

* [Get Classification](/doc/controllers/advanced-ap-is.html#get-classification)
* [Get QA](/doc/controllers/advanced-ap-is.html#get-qa)
* [Get NER](/doc/controllers/advanced-ap-is.html#get-ner)
* [Get Summary](/doc/controllers/advanced-ap-is.html#get-summary)
* [Get Translate](/doc/controllers/advanced-ap-is.html#get-translate)


# Get Classification

# Text Classification  : Defintion and it's usage

A text classifier identifies the categories of the text given as input. Classifying the texts is one of the powerful preprocessing technique in topic identification and sentiment classification (product reviews, movie reviews etc)and indexing the texts while building a search system.

# Languages covered:

| Languages  | ISO Code |
|------------|----------|
| Arabic     | ar       |
| Bulgarian  | bg       |
| Chinese    | zh       |
| English    | en       |
| French     | fr       |
| German     | de       |
| Greek      | el       |
| Hindi      | hi       |
| Russian    | ru       |
| Spanish    | es       |
| Swahili    | sw       |
| Thai       | th       |
| Turkish    | tr       |
| Urdu       | ur       |
| Vietnamese | vi       |

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

[`Responseclassify`](/doc/models/responseclassify.html)

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

## Example Response *(as JSON)*

```json
{
  "labels": [
    "positive",
    "negative"
  ],
  "scores": [
    0.9966060519218445,
    0.0033939925488084555
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error output | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`ApiClassify426Error`](/doc/models/api-classify-426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get QA

# QA : Defintion and it's usage

A Question Answering System retrieves the answer relevant to the question given by the user. A question answering system can be used for building a text based chatbots, search engines etc. Our question answering system  is mutilingual and supports 100 + languages. Please use ISO 639-2 2 digit language code  to get results. For example, use 'en' for English, 'ta' for Tamil, 'hi' for Hindi, 'fr' for French etc.

For ISO code reference, please check the link https://www.loc.gov/standards/iso639-2/php/code_list.php

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

[`ApiQaResponse`](/doc/models/api-qa-response.html)

## Example Usage

```ts
const contentType = null;
const body = 'request body';
try {
  const { result, ...httpResponse } = await advancedAPIsController.getQA(body);
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
| 400 | Bad Request | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`M426Error`](/doc/models/m426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get NER

# Named Entity Recognition : Defintion and it's usage

Named Entity Recognitiion  (NER) is extracting the specific Nouns such as, Person Names, Location names, Organization Names, Currency , Dates. It is a classification task. NER can be used as a sub-task in applications such as Search Systems, Chatbots, Question Answering systems, Text Summarization etc.

# Languages covered:

| Languages          | ISO Code |
|--------------------|----------|
| Arabic             | ar       |
| Chinese            | zh       |
| Dutch              | nl       |
| English            | en       |
| French             | fr       |
| German             | de       |
| Italian            | it       |
| Latvian            | lv       |
| Portuguese         | pt       |
| Spanish            | es       |

For other languages we cannot guarantee results but you can try with ISO code.
For ISO code reference, please check the link https://www.loc.gov/standards/iso639-2/php/code_list.php

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

[`ApiNerResponse[]`](/doc/models/api-ner-response.html)

## Example Usage

```ts
const contentType = null;
const body = 'requestbpdy';
try {
  const { result, ...httpResponse } = await advancedAPIsController.getNER(body);
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
| 400 | Bad Request | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`M426Error`](/doc/models/m426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get Summary

# Summarization : Defintion and it's usage

Summarization generates a crisp content of the large input text which is highly coherent.

| Languages               | ISO Code |
|-------------------------|----------|
| Amharic                 | am       |
| Arabic                  |  ar      |
| Azerbaijani             |  az      |
| Bengali                 |  bn      |
| Burmese                 |  my      |
| Chinese                 |  zh      |
| English                 |  en      |
| French                  |  fr      |
| Gaelic; Scottish Gaelic | gd       |
| Gujarati                |  gu      |
| Hausa                   |  ha      |
| Hindi                   |  hi      |
| Igbo                    |  ig      |
| Indonesian              |  id      |
| Japanese                |  ja      |
| Kirghiz; Kyrgyz         | ky       |
| Korean                  |  ko      |
| Marathi                 |  mr      |
| Nepali                  |  ne      |
| Oromo                   | om       |
| Persian                 | fa       |
| Portuguese              |  pt      |
| Punjabi                 |  pa      |
| Pushto; Pashto          | ps       |
| Rundi                   | rn       |
| Russian                 | ru       |
| Serbian                 |  sr      |
| Sinhala; Sinhalese      |  si      |
| Somali                  |  so      |
| Spanish; Castilian      |  es      |
| Swahili                 |  sw      |
| Tamil                   |  ta      |
| Telugu                  |  te      |
| Thai                    |  th      |
| Tigrinya                |  ti      |
| Turkish                 |  tr      |
| Ukrainian               |  uk      |
| Urdu                    |  ur      |
| Uzbek                   |  uz      |
| Vietnamese              |  vi      |
| Welsh                   |  cy      |
| Yoruba                  |  yo      |

```ts
async getSummary(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiSummaryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiSummaryResponse`](/doc/models/api-summary-response.html)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await advancedAPIsController.getSummary(body);
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
  "summary": "YouTube has announced a ban on videos spreading misinformation about Covid vaccines."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`M426Error`](/doc/models/m426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get Translate

# Translation : Defintion and it's usage

Machine Translation is translating the text automatically from  one language to another langauge.

# Languages covered:

| Languages                             | ISO Code   |
|---------------------------------------|------------|
|  Abkhazian                            |   ab       |
|  Afrikaans                            |   af       |
|  Amharic                              |   am       |
|  Bashkir                              |   ba       |
|  Catalan; Valencian                   |   ca       |
|  Chechen                              |   ce       |
|  Corsican                             |   co       |
|  Chuvash                              |   cv       |
|  Ewe                                  |   ee       |
|  English                              |   en       |
|  Basque                               |   eu       |
|  Fijian                               |   fj       |
|  French                               |   fr       |
|  Galician                             |   gl       |
|  Gujarati                             |   gu       |
|  Manx                                 |   gv       |
|  Hebrew                               |   he       |
|  Haitian; Haitian Creole              |   ht       |
|  Armenian                             |   hy       |
|  Indonesian                           |   id       |
|  Igbo                                 |   ig       |
|  Icelandic                            |   is       |
|  Japanese                             |   ja       |
|  Kalaallisut; Greenlandic             |   kl       |
|  Ganda                                |   lg       |
|  Lingala                              |   ln       |
|  Malagasy                             |   mg       |
|  Marshallese                          |   mh       |
|  Macedonian                           |   mk       |
|  Mongolian                            |   mn       |
|  Nauru                                |   na       |
|  Bokmål, Norwegian; Norwegian Bokmål  |   nb       |
|  Chichewa; Chewa; Nyanja              |   ny       |
|  Ossetian; Ossetic                    |   os       |
|  Pushto; Pashto                       |   ps       |
|  Romansh                              |   rm       |
|  Rundi                                |   rn       |
|  Sango                                |   sg       |
|  Samoan                               |   sm       |
|  Shona                                |   sn       |
|  Somali                               |   so       |
|  Albanian                             |   sq       |
|  Tamil                                |   ta       |
|  Tigrinya                             |   ti       |
|  Turkmen                              |   tk       |
|  Tonga                                |   to       |
|  Turkish                              |   tr       |
|  Tsonga                               |   ts       |
|  Tatar                                |   tt       |
|  Tahitian                             |   ty       |
|  Ukrainian                            |   uk       |
|  Vietnamese                           |   vi       |
|  Walloon                              |   wa       |
|  Xhosa                                |   xh       |
|  Yoruba                               |   yo       |
|  Zulu                                 |   zu       |

```ts
async getTranslate(
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ApiTranslateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown \| undefined` | Body, Optional | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ApiTranslateResponse`](/doc/models/api-translate-response.html)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await advancedAPIsController.getTranslate(body);
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
  "generated_text": "இன்று நல்ல நாள்."
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`M426Error`](/doc/models/m426-error.html) |
| 429 | Too Many Requests | `ApiError` |

