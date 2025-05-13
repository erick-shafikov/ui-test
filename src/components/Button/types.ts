import { ButtonVariants } from '@/components/Button/constants'
import { ButtonVariant } from '@mantine/core'

// ----------------------------------------------------------------------

type ButtonVariantsTypes = typeof ButtonVariants

export type ExtendedButtonVariant = ButtonVariant | ButtonVariantsTypes[number]
