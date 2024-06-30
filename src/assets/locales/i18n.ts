import I18n, { TranslateOptions } from 'i18n-js';
import en from './en.json';

I18n.fallbacks = true;
I18n.translations = {
  en,
};

I18n.locale = 'en';

type LangKeys<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${LangKeys<T[K]> extends never
        ? ''
        : `.${LangKeys<T[K]>}`}`;
    }[keyof T]
  : never;

export type i18nKeys = LangKeys<typeof en>;

/**
 * Render a localised string from a given json path. The method we'll use
 * instead of a regular string
 * @param {i18nKeys} name path in json to template
 * @param {object} params the items you want to interpolate
 */
export function strings(name: i18nKeys, params?: TranslateOptions) {
  return I18n.t(name, params);
}

export default I18n;
