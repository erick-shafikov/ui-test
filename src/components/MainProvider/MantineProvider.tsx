import { MantineProvider as MantineProviderCore } from '@mantine/core'
import { MantineProviderProps } from '@mantine/core'

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
