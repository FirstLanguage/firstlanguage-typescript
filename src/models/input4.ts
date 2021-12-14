/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Input4 {
  /** Word or sentence or a paragraph. Special characters will not be stripped. */
  text: string;
  /** Allowed ISO language code. Refer languages section. */
  lang: string;
}

export const input4Schema: Schema<Input4> = object({
  text: ['text', string()],
  lang: ['lang', string()],
});
