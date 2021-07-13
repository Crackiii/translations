import i18next, {i18n as I18n, InitOptions as I18nIniOptions, TFunction as I18nTFunction} from "i18next";

type I18nWithoutInitImediate = Omit<I18nIniOptions, 'initImmediate'>


const i18nCreateInstance = (options: I18nIniOptions): [I18n, Promise<I18nTFunction>] => {
  const _i18next = i18next.createInstance()
  return [_i18next, i18next.init(options)]
}
export const i18nCreateInstanceSync = (options: I18nWithoutInitImediate) => {
  const initOptions: I18nIniOptions = {...options, initImmediate: false}
  const [_i18next] = i18nCreateInstance(initOptions)

  return _i18next
}