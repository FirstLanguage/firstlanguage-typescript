# Basic AP Is

Basic NLP text processing APIs

```ts
const basicAPIsController = new BasicAPIsController(client);
```

## Class Name

`BasicAPIsController`

## Methods

* [Get Stemmer](/doc/controllers/basic-ap-is.html#get-stemmer)
* [Get Lemma](/doc/controllers/basic-ap-is.html#get-lemma)
* [Get Morph](/doc/controllers/basic-ap-is.html#get-morph)
* [Get Postag](/doc/controllers/basic-ap-is.html#get-postag)


# Get Stemmer

# Stemmer : Defintion and it's usage

A word takes different inflectional forms. For instance, the word, "Compute" can take the forms, "computing", "computation",  and "computerize". The NLP applications such as Search Engines and Information Extraction would want to store the base or stem of the word, i.e "Compute" instead of accomodating all its inflected forms. This will yield in dimensionality reduction and incerases the efficiency of the system. The stemmer cuts the prefix and suffix of a word.

# Languages covered:

Our stemmer works for the following  26 languages.

| Languages    | ISO Code   |
|--------------|------------|
|  Arabic      |  ar        |
|  Catalan     |  ca        |
|  Danish      |  da        |
|  German      |  de        |
|  Greek       |  el        |
|  English     |  en        |
|  Spanish     |  es        |
|  Basque      |  eu        |
|  Finnish     |  fi        |
|  French      |  fr        |
|  Irish       |  ga        |
|  Hindi       |  hi        |
|  Hungarian   |  hu        |
|  Indonesian  |  id        |
|  Italian     |  it        |
|  Lithuanian  |  lt        |
|  Nepali      |  ne        |
|  Dutch       |  nl        |
|  Norwegian   |  no        |
|  Portuguese  |  pt        |
|  Romanian    |  ro        |
|  Russian     |  ru        |
|  Serbian     |  sr        |
|  Swedish     |  sv        |
|  Tamil       |  ta        |
|  Turkish     |  tr        |

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

[`Responsestem[]`](/doc/models/responsestem.html)

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

## Example Response *(as JSON)*

```json
[
  {
    "orginalText": "????????????",
    "stem": "????????????"
  },
  {
    "orginalText": "??????????????????",
    "stem": "???????????????"
  },
  {
    "orginalText": "?????????????????????",
    "stem": "?????????"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error output | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`ApiStemmer426Error`](/doc/models/api-stemmer-426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get Lemma

# Lemmatizer : Defintion and it's usage

Lemmatizer is similar to stemmer that gives the stemmed version of a word but lemmatizer differs from the stemmer in giving a meaningful stem or the lemma. For instance, for the word, "smiling", the stemmer would give, "smil", stemming the suffix, "ing" but the lemmatizer would give the meaningful stem, "smile". lemmatizers can be used in applications such as,  Machine Translation, Search Engines, Text Summarization etc.

# Languages covered:

| Languages          | ISO Code |
|--------------------|----------|
| Catalan            | ca       |
| Danish             | da       |
| Dutch              | nl       |
| English            | en       |
| French             | fr       |
| German             | de       |
| Greek              | el       |
| Italian            | it       |
| Lithuanian         | lt       |
| Macedonian         | mk       |
| Norwegian (Bokm??l) | nb       |
| Polish             | pl       |
| Portuguese         | pt       |
| Romanian           | ro       |
| Russian            | ru       |
| Spanish            | es       |

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

[`Responselemma[]`](/doc/models/responselemma.html)

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

## Example Response *(as JSON)*

```json
[
  {
    "orginalText": "Smiling",
    "lemmatized": "smile"
  },
  {
    "orginalText": "makes",
    "lemmatized": "make"
  },
  {
    "orginalText": "everyone",
    "lemmatized": "everyone"
  },
  {
    "orginalText": "happy",
    "lemmatized": "happy"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error output | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`ApiLemmatize426Error`](/doc/models/api-lemmatize-426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get Morph

# Morphological Analyzer : Defintion and it's usage

Morphological Analyzer analyzes how a word is formed. It breaks a word into smaller units called, "morphemes" and gives a clue on the pattern of words of a particular langauge.  It can be used for building applications such as,  Machine Translation, Text Summarization, Search systems etc.

# Languages covered:

| Languages          | ISO Code |
|--------------------|----------|
| Catalan            | ca       |
| Danish             | da       |
| Dutch              | nl       |
| English            | en       |
| French             | fr       |
| German             | de       |
| Greek              | el       |
| Italian            | it       |
| Japanese           | ja       |
| Lithuanian         | lt       |
| Macedonian         | mk       |
| Norwegian (Bokm??l) | nb       |
| Polish             | pl       |
| Portuguese         | pt       |
| Russian            | ru       |
| Spanish            | es       |

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

[`Responsemorph`](/doc/models/responsemorph.html)

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

## Example Response *(as JSON)*

```json
{
  "Let": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  },
  "us": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  },
  "begin": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  },
  "the": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  },
  "API": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  },
  "development": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  },
  ".": {
    "VerbForm": [
      "Inf"
    ],
    "Case": [
      "Acc"
    ],
    "Number": [
      "Sing"
    ],
    "Person": [
      "1"
    ],
    "PronType": [
      "Art"
    ],
    "Definite": [
      "Def"
    ],
    "NounType": [
      "Prop"
    ]
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error output | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`ApiMorph426Error`](/doc/models/api-morph-426-error.html) |
| 429 | Too Many Requests | `ApiError` |


# Get Postag

# Parts of Speech Tagger : Defintion and it's usage

Parts of Speech Tagger, which is shortly known as POS Tagger is a software that automatically finds the word classes, when a text input is given. The text input can be a word, a sentence or a set of sentences. The word classes are the grammatical categories such as, Noun, Verb, Adverb etc. The category assigned to each word is called as a tag. A set of tags, each indicating a grammatical category is called, "tagsets". POS tagging is a mandatory pre-processing for most of the Natural Language Processing Applications such as, Information Extraction, Information Retreival systems and Summary generation systems. A POS Tagger is a language-dependent software as the grammar rules will differ for every language. For instance, a word ending with "ing" might indicate a "Verb" in English but this will not be applicable for other languages.

# Languages covered:

| Languages          | ISO Code |
|--------------------|----------|
| Chinese            | zh       |
| Dutch              | nl       |
| English            | en       |
| German             | de       |
| Italian            | it       |
| Lithuanian         | lt       |
| Polish             | pl       |
| Romanian           | ro       |
| Tamil              | ta       |

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

[`Responsepo[]`](/doc/models/responsepo.html)

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

## Example Response *(as JSON)*

```json
[
  {
    "orginalText": "Let",
    "postag": "VERB"
  },
  {
    "orginalText": "us",
    "postag": "PRON"
  },
  {
    "orginalText": "begin",
    "postag": "VERB"
  },
  {
    "orginalText": "the",
    "postag": "DET"
  },
  {
    "orginalText": "API",
    "postag": "PROPN"
  },
  {
    "orginalText": "development",
    "postag": "NOUN"
  },
  {
    "orginalText": ".",
    "postag": "PUNCT"
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error output | [`ErrorsError`](/doc/models/errors-error.html) |
| 426 | Please use HTTPS protocol | [`ApiPostag426Error`](/doc/models/api-postag-426-error.html) |
| 429 | Too Many Requests | `ApiError` |

