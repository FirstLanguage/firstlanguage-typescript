/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Input9 {
  url: string;
}

export const input9Schema: Schema<Input9> = object({ url: ['url', string()] });
