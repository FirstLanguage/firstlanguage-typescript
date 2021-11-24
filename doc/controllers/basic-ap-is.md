# Basic AP Is

Basic NLP text processing APIs

```ts
const basicAPIsController = new BasicAPIsController(client);
```

## Class Name

`BasicAPIsController`

## Methods

* [Get Stemmer](/doc/controllers/basic-ap-is.md#get-stemmer)
* [Get Lemma](/doc/controllers/basic-ap-is.md#get-lemma)
* [Get Morph](/doc/controllers/basic-ap-is.md#get-morph)
* [Get Postag](/doc/controllers/basic-ap-is.md#get-postag)


# Get Stemmer

# Stemmer : Defintion and it's usage

A word takes different inflectional forms. For instance, the word, "Compute" can take the forms, "computing", "computation",  and "computerize". The NLP applications such as Search Engines and Information Extraction would want to store the base or stem of the word, i.e "Compute" instead of accomodating all its inflected forms. This will yield in dimensionality reduction and incerases the efficiency of the system. The stemmer cuts the prefix and suffix of a word.

# Languages covered:

Our stemmer works for the following  26 languages. Our stemmer works using the snowball stemmer algorithm which is also known as Porter 2 Stemming algorithm.

1. Tamil
2. Hindi
3. English
4. Arabic
5. Basque
6. Catalan
7. Danish
8. Dutch
9. Finnish
10. French
11. German
12. Greek
13. Hungarian
14. Indonesian
15. Irish
16. Italian
17. Lithuanian
18. Nepali
19. Norwegian
20. Portuguese
21. Romanian
22. Russian
23. Serbian
24. Spanish
25. Swedish
26. Turkish

```ts
async getStemmer(
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Responsestem[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Responsestem[]`](/doc/models/responsestem.md)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await basicAPIsController.getStemmer(body);
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
| 426 | Please use HTTPS protocol | [`ApiStemmer426Error`](/doc/models/api-stemmer-426-error.md) |


# Get Lemma

# Stemmer : Defintion and it's usage

# Languages covered:

```ts
async getLemma(
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Responselemma[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Responselemma[]`](/doc/models/responselemma.md)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await basicAPIsController.getLemma(body);
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
| 426 | Please use HTTPS protocol | [`ApiLemmatize426Error`](/doc/models/api-lemmatize-426-error.md) |


# Get Morph

# Stemmer : Defintion and it's usage

# Languages covered:

```ts
async getMorph(
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Responsemorph>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Responsemorph`](/doc/models/responsemorph.md)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await basicAPIsController.getMorph(body);
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
| 426 | Please use HTTPS protocol | [`ApiMorph426Error`](/doc/models/api-morph-426-error.md) |


# Get Postag

**So, What is a POS Tagger?**

Parts Of Speech Tagger, which is shortly known as POS Tagger is a software that automatically finds the word classes, when a text input is given. The text input can be a word, a sentence or a set of sentences. The word classes are the grammatical categories such as, Noun, Verb, Adverb etc. These category assigned to each word is a tag. A set of tags, each indicating a grammatical category is called, "tagsets". POS tagging is a mandatory pre processing for most of the Natural Language Processing Applications such as, Information Extraction, Information Retreival systems and Summary generation systems.

**Is POS Tagger, a language-independent software?**

No. A POS Tagger is a language-dependent software as the grammar rules will differ for every language. For instance, A word ending with "ing" might indicate a Verb" in English but this will not be applicable for other languages.

**For what languages, our  POS Tagger API will work?**

At present, our POS Tagger API works for English and Tami Languages. Soon we will extend the APIs to accomodate more languages.

**How Precise are our POS Tagger API?**

will update accuracy metrics soon .....

```ts
async getPostag(
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Responsepo[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | Add a JSON Input as per the schema defined below |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Responsepo[]`](/doc/models/responsepo.md)

## Example Usage

```ts
const contentType = null;
const body = 'Liquid error: Object of type 'DotLiquid.Hash' cannot be converted to type 'System.String'.';
try {
  const { result, ...httpResponse } = await basicAPIsController.getPostag(body);
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
| 426 | Please use HTTPS protocol | [`ApiPostag426Error`](/doc/models/api-postag-426-error.md) |

