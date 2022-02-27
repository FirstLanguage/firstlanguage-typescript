/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface ApiTableqaResponse {
  /** Original Question */
  query?: string;
  answer?: string[];
  rows?: string[];
}

export const apiTableqaResponseSchema: Schema<ApiTableqaResponse> = object({
  query: ['query', optional(string())],
  answer: ['answer', optional(array(string()))],
  rows: ['rows', optional(array(string()))],
});
