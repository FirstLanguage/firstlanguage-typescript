/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Text for processing will be read from the given URL. */
export interface Input1 {
  /** URL where the content is hosted. */
  url: string;
  /** Allowed language code. Refer Allowed languages section. */
  lang: string;
  /**
   * Allowed values are:html,plaintext, pdf, docx
   * If html is specified all html tags and special characters will be stripped before processing.
   * For PDF and docx, all text will be read. Scanned documents will not work.
   */
  contentType: string;
}

export const input1Schema: Schema<Input1> = object({
  url: ['url', string()],
  lang: ['lang', string()],
  contentType: ['contentType', string()],
});
