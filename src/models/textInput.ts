/**
 * FirstLanguage APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Input, inputSchema } from './input';

export interface TextInput {
  /** Direct Text Input */
  input: Input;
}

export const textInputSchema: Schema<TextInput> = object({
  input: ['input', lazy(() => inputSchema)],
});