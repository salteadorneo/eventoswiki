import classNames, { type ArgumentArray } from 'classnames'
import classNamesModule from 'classnames/bind'

export const bindClassNames = (...classes: ArgumentArray): string => {
  return classNames(...classes)
}

export const bindModuleClassNames = (styles: Record<string, string>) => classNamesModule.bind(styles)
