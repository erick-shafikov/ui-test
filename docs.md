# система коммитов:

## Фикс

текст коммита: fix: описание

изменит версию библиотеки from x.y.z => x.y.z + 1

## Новый функционал

текст коммита: feat: description

изменит версию библиотеки x.y.z => x.y + 1.z

```tsx
import { TestButton } from '@kvell-group/ui'
```

# Добавление контекста (обязательно)

## Добавление контекста в Next-js проект c использованием page router

```tsx
// MantineContext.tsx
import { ReactNode } from 'react'

import { MantineProvider, theme } from '@kvell-group/ui'

type MantineContextProps = { children: ReactNode }

export const MantineContext = ({ children }: MantineContextProps) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
)
```

```tsx
//app.tsx
import { MantineContext } from '@/client/contexts/MantineContext'
//...
import '@mantine/core/styles.layer.css'
//...

const App = () => {
  //...
  return <MantineContext>{getLayout(<Component {...pageProps} />, pageProps)}</MantineContext>
}
```

```tsx
//_document.tsx
import { ColorSchemeScript, mantineHtmlProps } from '@kvell-group/ui'

class MyDocument extends Document {
  //...
  render() {
    return (
      <Html {...mantineHtmlProps}>
        <Head>
          {/*... */}
          <ColorSchemeScript defaultColorScheme='auto' />
          {/*... */}
        </Head>
      </Html>
    )
  }
}
```

добавить в файл конфигурации

```js
const nextConfigBase = {
  //...
  // compiler: {
  //   styledComponents: true,
  // },
  transpilePackages: ['@kvell-group/ui'],
  //...
}
```

# использование компонентов

## Button

варианты:

- primary
- secondary
- tertiary

Текст кнопки имеет Caption L/Medium класс по умолчанию. Чтобы добавить текст другого стиля можно использовать компонент Typography

```jsx
<Button>
  <TypographyBodySMedium>текст кнопки</TypographyBodySMedium>
</Button>
```

## Typography

Оборачивает компонент Text. Что бы создать компонент:

- найти соответствующие переменные в blank (файл от дизайна)

```css
:root {
  --typography-size-body-s: 16px;
  --typography-line-height-body-s: 24px;
  --typography-letter-spacing-body-s: -0.20000000298023224px;
}
```

- добавить переменные в тему

```ts
const theme = {
  //
  spacing: {
    //blank variables
    'body-s': ' -0.20000000298023224px',
  },
  fontSizes: {
    //blank variables
    'body-s-medium': '16px',
  },
  lineHeights: {
    //blank variables
    'body-s': '24px',
  },
}
```

- использовать их в стилях

```css
/* Text.module.css */
.body-s {
  font-family: var(--mantine-font-family);
  font-weight: 500;
  font-size: var(--mantine-font-size-body-s-medium);
  line-height: var(--mantine-line-height-body-s);
  letter-spacing: var(--mantine-letter-spacing-body-s);
}
```

- добавить в типизацию

```tsx
//Text.tsx
import { TextProps as TextBaseProps } from '@mantine/core'
import { Text as TextBase } from '@mantine/core'
import { ReactNode } from 'react'

import classesNames from '@/components/Text/Text.module.css'

// ----------------------------------------------------------------------

type TextVariants =
  | TextBaseProps['variant']
  // ....
  | 'body-s-medium'

export type TextProps = Omit<TextBaseProps, 'variant'> & {
  children: ReactNode
  variant: TextVariants
}

export const Text = (props: TextProps) => (
  <TextBase
    {...props}
    classNames={{ root: classesNames[props.variant || 'text'] }}
  />
)
```

# расширение типизации компонентов

[ссылка на источник](https://mantine.dev/styles/variants-sizes/#custom-variants-types)

```ts
// mantine.d.ts

import { ButtonVariant } from '@mantine/core'

type ExtendedButtonVariant = ButtonVariant | 'primary' | 'secondary' | 'tertiary'

declare module '@mantine/core' {
  export interface ButtonProps {
    variant?: ExtendedButtonVariant
  }
}
```
