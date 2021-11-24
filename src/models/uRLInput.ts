/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Input1, input1Schema } from './input1';

export interface URLInput {
  /** Text for processing will be read from the given URL. Only HTML pages or text pages will be processed at this time. */
  input?: Input1;
}

export const uRLInputSchema: Schema<URLInput> = object({
  input: ['input', optional(lazy(() => input1Schema))],
});
