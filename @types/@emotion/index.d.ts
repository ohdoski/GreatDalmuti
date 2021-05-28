import { InterpolationWithTheme } from '@emotion/core'

// https://github.com/emotion-js/emotion/issues/693

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<Theme>
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: InterpolationWithTheme<Theme>
    }
  }
}
