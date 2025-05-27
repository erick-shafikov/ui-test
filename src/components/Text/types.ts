import { FontVariants as FontVariantsConstants } from '../../constants/font-variants'
import type { TextProps as TextBaseProps } from '@mantine/core'

// ----------------------------------------------------------------------

type FontVariantsConstantsType = typeof FontVariantsConstants

export type TextVariants = TextBaseProps['variant'] | FontVariantsConstantsType[number]
