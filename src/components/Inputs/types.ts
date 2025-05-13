import type { TextInputProps } from '@mantine/core'
import type { IMaskInputProps } from 'react-imask'

// ----------------------------------------------------------------------

export type MaskedInputProps = IMaskInputProps<HTMLInputElement> & TextInputProps
