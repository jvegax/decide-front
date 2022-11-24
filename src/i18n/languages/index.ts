import type { Dictionary } from '../types';
import en_US from './en-US';
import es_ES from './es-ES';
import de_DE from './de-DE';
import se_SV from './se-SV';

const availableLanguages = { en_US, es_ES , de_DE, se_SV};

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
