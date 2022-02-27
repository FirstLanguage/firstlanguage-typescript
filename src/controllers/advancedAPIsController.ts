/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ApiClassify426Error } from '../errors/apiClassify426Error';
import { ErrorsError } from '../errors/errorsError';
import { M426Error } from '../errors/m426Error';
import {
  ApiImagecaptionRequest,
  apiImagecaptionRequestSchema,
} from '../models/apiImagecaptionRequest';
import {
  ApiImagecaptionResponse,
  apiImagecaptionResponseSchema,
} from '../models/apiImagecaptionResponse';
import { ApiNerResponse, apiNerResponseSchema } from '../models/apiNerResponse';
import { ApiQaResponse, apiQaResponseSchema } from '../models/apiQaResponse';
import {
  ApiSummaryResponse,
  apiSummaryResponseSchema,
} from '../models/apiSummaryResponse';
import {
  ApiTableqaResponse,
  apiTableqaResponseSchema,
} from '../models/apiTableqaResponse';
import {
  ApiTranslateResponse,
  apiTranslateResponseSchema,
} from '../models/apiTranslateResponse';
import {
  Responseclassify,
  responseclassifySchema,
} from '../models/responseclassify';
import { array, optional, unknown } from '../schema';
import { BaseController } from './baseController';

export class AdvancedAPIsController extends BaseController {

  tryParseJSONObject (jsonString: string){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
  };


  /**
   * # Text Classification  : Defintion and it's usage
   * A text classifier identifies the categories of the text given as input. Classifying the texts is one
   * of the powerful preprocessing technique in topic identification and sentiment classification
   * (product reviews, movie reviews etc)and indexing the texts while building a search system.
   *
   * # Languages covered:
   *
   * | Languages  | ISO Code |
   * |------------|----------|
   * | Arabic     | ar       |
   * | Bulgarian  | bg       |
   * | Chinese    | zh       |
   * | English    | en       |
   * | French     | fr       |
   * | German     | de       |
   * | Greek      | el       |
   * | Hindi      | hi       |
   * | Russian    | ru       |
   * | Spanish    | es       |
   * | Swahili    | sw       |
   * | Thai       | th       |
   * | Turkish    | tr       |
   * | Urdu       | ur       |
   * | Vietnamese | vi       |
   *
   * @param body         Add a JSON Input as per the schema defined below
   * @return Response from the API call
   */
  async getClassification(
    body: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Responseclassify>> {
    const req = this.createRequest('POST', '/api/classify');
    const mapped = this.tryParseJSONObject(body)
    req.header('Content-Type', 'application/json');
    req.json(mapped);
    req.throwOn(400, ErrorsError, 'Error output');
    req.throwOn(426, ApiClassify426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(responseclassifySchema, requestOptions);
  }

  /**
   * # QA : Defintion and it's usage
   * A Question Answering System retrieves the answer relevant to the question given by the user. A
   * question answering system can be used for building a text based chatbots, search engines etc. Our
   * question answering system  is mutilingual and supports 100 + languages. Please use ISO 639-2 2 digit
   * language code  to get results. For example, use 'en' for English, 'ta' for Tamil, 'hi' for Hindi,
   * 'fr' for French etc.
   *
   * For ISO code reference, please check the link https://www.loc.gov/standards/iso639-2/php/code_list.
   * php
   *
   * @param body         Add a JSON Input as per the schema defined below
   * @return Response from the API call
   */
  async getQA(
    body: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiQaResponse>> {
    const req = this.createRequest('POST', '/api/qa');
    const mapped = this.tryParseJSONObject(body)
    req.header('Content-Type', 'application/json');
    req.json(mapped);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(apiQaResponseSchema, requestOptions);
  }

  /**
   * # TableQA : Defintion and it's usage
   *
   * Table QA uses TAPAS based model to get answers from table input. The table can be parsed into a JSON
   * object or it can be a link to a CSV file. Currently only Plain CSV file is supported.
   *
   * This API works only for English language currently
   *
   * Example for flattend table in JSON Format:<br/>
   * {"Cities": ["Paris, France", "London, England", "Lyon, France"], "Inhabitants": ["2.161", "8.982",
   * "0.513"]}
   *
   * The API can return the original table rows from which the answer was extracted based on the flag
   * 'sendBackRows'
   *
   * @param body         Add a JSON Input as per the schema defined below. For URL input, if you are
   *                                providing Google drive or Google Spreadsheet url ensure that you provide a link
   *                                which can download the file directly and not the share link.  Example: For Google
   *                                Spreadsheet, the url format will be like below: https://docs.google.
   *                                com/spreadsheets/d/1TtzPAHqpaTB7Ltdq0zwZ8FamF7O9aC4KH4EpmwI/export?
   *                                format=csv&gid=151344200  Or for Google Drive, it will be like below: https://drive.
   *                                google.com/uc?id=idofthefile  For Flat table input check the example out.
   * @return Response from the API call
   */
  async getTableQA(
    body?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiTableqaResponse[]>> {
    const req = this.createRequest('POST', '/api/tableqa');
    const mapped = this.tryParseJSONObject(body)
    req.header('Content-Type', 'application/json');
    req.json(mapped);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(array(apiTableqaResponseSchema), requestOptions);
  }

  /**
   * # Image Captioning with Visual Attention : Defintion and it's usage
   *
   * Image Captioning is the process of generating textual description of an image. It uses both Natural
   * Language Processing and Computer Vision to generate the captions.
   *
   * This API works generates only English Captions
   *
   *
   * <b>Enterprise Plan Alert:</b> For Enterprise Users GPU powered endpoint can be provisioned. <b> This
   * will reduce the response time of the API by alomst 90%.</b>
   *
   * @param body         Add a JSON Input as per the schema defined below.   For URL,
   *                                                      if you are providing Google drive or Google Spreadsheet url
   *                                                      ensure that you provide a link which can download the file
   *                                                      directly and not the share link.  Example: For Google
   *                                                      Spreadsheet, the url format will be like below: https://docs.
   *                                                      google.
   *                                                      com/spreadsheets/d/1TtzPAHqpaTB7Ltdq0zwZ8FamF7OwI/export?
   *                                                      format=csv&gid=151344200  Or for Google Drive, it will be
   *                                                      like below: https://drive.google.com/uc?id=idofthefile
   * @return Response from the API call
   */
  async getImageCaption(
    body?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiImagecaptionResponse>> {
    const req = this.createRequest('POST', '/api/imagecaption');
    const mapped = this.tryParseJSONObject(body)
    req.header('Content-Type', 'application/json');
    req.json(mapped);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(apiImagecaptionResponseSchema, requestOptions);
  }

  /**
   * # Named Entity Recognition : Defintion and it's usage
   * Named Entity Recognitiion  (NER) is extracting the specific Nouns such as, Person Names, Location
   * names, Organization Names, Currency , Dates. It is a classification task. NER can be used as a sub-
   * task in applications such as Search Systems, Chatbots, Question Answering systems, Text
   * Summarization etc.
   *
   * # Languages covered:
   *
   * | Languages          | ISO Code |
   * |--------------------|----------|
   * | Arabic             | ar       |
   * | Chinese            | zh       |
   * | Dutch              | nl       |
   * | English            | en       |
   * | French             | fr       |
   * | German             | de       |
   * | Italian            | it       |
   * | Latvian            | lv       |
   * | Portuguese         | pt       |
   * | Spanish            | es       |
   *
   * For other languages we cannot guarantee results but you can try with ISO code.
   * For ISO code reference, please check the link https://www.loc.gov/standards/iso639-2/php/code_list.
   * php
   *
   *
   *
   *
   * @param body         Add a JSON Input as per the schema defined below
   * @return Response from the API call
   */
  async getNER(
    body: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiNerResponse[]>> {
    const req = this.createRequest('POST', '/api/ner');
    const mapped = this.tryParseJSONObject(body)
    req.header('Content-Type', 'application/json');
    req.json(mapped);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    return req.callAsJson(array(apiNerResponseSchema), requestOptions);
  }

  /**
   * # Summarization : Defintion and it's usage
   * Summarization generates a crisp content of the large input text which is highly coherent.
   *
   *
   * | Languages               | ISO Code |
   * |-------------------------|----------|
   * | Amharic                 | am       |
   * | Arabic                  |  ar      |
   * | Azerbaijani             |  az      |
   * | Bengali                 |  bn      |
   * | Burmese                 |  my      |
   * | Chinese                 |  zh      |
   * | English                 |  en      |
   * | French                  |  fr      |
   * | Gaelic; Scottish Gaelic | gd       |
   * | Gujarati                |  gu      |
   * | Hausa                   |  ha      |
   * | Hindi                   |  hi      |
   * | Igbo                    |  ig      |
   * | Indonesian              |  id      |
   * | Japanese                |  ja      |
   * | Kirghiz; Kyrgyz         | ky       |
   * | Korean                  |  ko      |
   * | Marathi                 |  mr      |
   * | Nepali                  |  ne      |
   * | Oromo                   | om       |
   * | Persian                 | fa       |
   * | Portuguese              |  pt      |
   * | Punjabi                 |  pa      |
   * | Pushto; Pashto          | ps       |
   * | Rundi                   | rn       |
   * | Russian                 | ru       |
   * | Serbian                 |  sr      |
   * | Sinhala; Sinhalese      |  si      |
   * | Somali                  |  so      |
   * | Spanish; Castilian      |  es      |
   * | Swahili                 |  sw      |
   * | Tamil                   |  ta      |
   * | Telugu                  |  te      |
   * | Thai                    |  th      |
   * | Tigrinya                |  ti      |
   * | Turkish                 |  tr      |
   * | Ukrainian               |  uk      |
   * | Urdu                    |  ur      |
   * | Uzbek                   |  uz      |
   * | Vietnamese              |  vi      |
   * | Welsh                   |  cy      |
   * | Yoruba                  |  yo      |
   *
   *
   *
   *
   * @param body         Add a JSON Input as per the schema defined below
   * @return Response from the API call
   */
  async getSummary(
    body?: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiSummaryResponse>> {
    const req = this.createRequest('POST', '/api/summary');
    const mapped = req.prepareArgs({ body: [body, optional(unknown())] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(apiSummaryResponseSchema, requestOptions);
  }

  /**
   * # Translation : Defintion and it's usage
   * Machine Translation is translating the text automatically from  one language to another langauge.
   *
   * # Languages covered:
   *
   * | Languages                             | ISO Code   |
   * |---------------------------------------|------------|
   * |  Abkhazian                            |   ab       |
   * |  Afrikaans                            |   af       |
   * |  Amharic                              |   am       |
   * |  Bashkir                              |   ba       |
   * |  Catalan; Valencian                   |   ca       |
   * |  Chechen                              |   ce       |
   * |  Corsican                             |   co       |
   * |  Chuvash                              |   cv       |
   * |  Ewe                                  |   ee       |
   * |  English                              |   en       |
   * |  Basque                               |   eu       |
   * |  Fijian                               |   fj       |
   * |  French                               |   fr       |
   * |  Galician                             |   gl       |
   * |  Gujarati                             |   gu       |
   * |  Manx                                 |   gv       |
   * |  Hebrew                               |   he       |
   * |  Haitian; Haitian Creole              |   ht       |
   * |  Armenian                             |   hy       |
   * |  Indonesian                           |   id       |
   * |  Igbo                                 |   ig       |
   * |  Icelandic                            |   is       |
   * |  Japanese                             |   ja       |
   * |  Kalaallisut; Greenlandic             |   kl       |
   * |  Ganda                                |   lg       |
   * |  Lingala                              |   ln       |
   * |  Malagasy                             |   mg       |
   * |  Marshallese                          |   mh       |
   * |  Macedonian                           |   mk       |
   * |  Mongolian                            |   mn       |
   * |  Nauru                                |   na       |
   * |  Bokmål, Norwegian; Norwegian Bokmål  |   nb       |
   * |  Chichewa; Chewa; Nyanja              |   ny       |
   * |  Ossetian; Ossetic                    |   os       |
   * |  Pushto; Pashto                       |   ps       |
   * |  Romansh                              |   rm       |
   * |  Rundi                                |   rn       |
   * |  Sango                                |   sg       |
   * |  Samoan                               |   sm       |
   * |  Shona                                |   sn       |
   * |  Somali                               |   so       |
   * |  Albanian                             |   sq       |
   * |  Tamil                                |   ta       |
   * |  Tigrinya                             |   ti       |
   * |  Turkmen                              |   tk       |
   * |  Tonga                                |   to       |
   * |  Turkish                              |   tr       |
   * |  Tsonga                               |   ts       |
   * |  Tatar                                |   tt       |
   * |  Tahitian                             |   ty       |
   * |  Ukrainian                            |   uk       |
   * |  Vietnamese                           |   vi       |
   * |  Walloon                              |   wa       |
   * |  Xhosa                                |   xh       |
   * |  Yoruba                               |   yo       |
   * |  Zulu                                 |   zu       |
   *
   *
   *
   *
   * @param body         Add a JSON Input as per the schema defined below
   * @return Response from the API call
   */
  async getTranslate(
    body?: unknown,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiTranslateResponse>> {
    const req = this.createRequest('POST', '/api/translate');
    const mapped = req.prepareArgs({ body: [body, optional(unknown())] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(apiTranslateResponseSchema, requestOptions);
  }
}
