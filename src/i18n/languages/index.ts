import type { Dictionary } from '../types';
import en_US from './en-US';
import es_ES from './es-ES';

const availableLanguages = { en_US, es_ES };

const languages = Object.entries(availableLanguages).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [`${key}`]: {
      translation: value,
    },
  }),
  {} as {
    [id in Language]: Dictionary;
  },
);

export type Language = keyof typeof availableLanguages;
export default languages;
