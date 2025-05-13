import { MantineProvider as MantineProviderCore } from '@mantine/core'
import type { MantineProviderProps } from '@mantine/core'

// ----------------------------------------------------------------------

export function MantineProvider({ children, theme, ...restProps }: MantineProviderProps) {
  return (
    <MantineProviderCore
      theme={theme}
      {...restProps}
    >
      {children}
    </MantineProviderCore>
  )
}
