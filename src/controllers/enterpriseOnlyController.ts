/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '@apimatic/core';
import { ApiResponse, RequestOptions } from '../core';
import { ErrorsError } from '../errors/errorsError';
import { M426Error } from '../errors/m426Error';
import {
  ApiQuestionRequest,
  apiQuestionRequestSchema,
} from '../models/apiQuestionRequest';
import {
  ApiQuestionResponse,
  apiQuestionResponseSchema,
} from '../models/apiQuestionResponse';
import { optional } from '../schema';
import { BaseController } from './baseController';

export class EnterpriseOnlyController extends BaseController {
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
  async getQAEnterprise(
    body?: ApiQuestionRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ApiQuestionResponse>> {
    const req = this.createRequest('POST', '/api/question');
    const mapped = req.prepareArgs({
      body: [body, optional(apiQuestionRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, ErrorsError, 'Bad Request');
    req.throwOn(426, M426Error, 'Please use HTTPS protocol');
    req.throwOn(429, ApiError, 'Too Many Requests');
    return req.callAsJson(apiQuestionResponseSchema, requestOptions);
  }
}