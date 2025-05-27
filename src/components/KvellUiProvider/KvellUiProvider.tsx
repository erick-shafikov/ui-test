import { MantineProvider as MantineProviderCore } from '@mantine/core'
import type { MantineProviderProps } from '@mantine/core'

import '@mantine/core/styles.layer.css'
import '@mantine/core/styles/baseline.layer.css'
import '@mantine/core/styles/default-css-variables.layer.css'
import '@mantine/core/styles/global.layer.css'

// ----------------------------------------------------------------------

export function KvellUiProvider({ children, theme, ...restProps }: MantineProviderProps) {
  return (
    <MantineProviderCore
      theme={theme}
      {...restProps}
    >
      {children}
    </MantineProviderCore>
  )
}
