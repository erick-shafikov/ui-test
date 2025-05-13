import { MaskedInput } from '@/components/Inputs/MaskedInput'
import passwordClassNames from '@/components/Inputs/CvvInput/CvvInput.module.css'
import baseInputClassNames from '@/components/Inputs/Input.module.css'
import clsx from 'clsx'
import type { MaskedInputProps } from '@/components/Inputs/types'
import { forwardRef } from 'react'
import { CARD_CVV_MASK } from '@/constants/masks'
import { IMask } from 'react-imask'

// ----------------------------------------------------------------------

const { input, ...restClassNames } = baseInputClassNames

const classNames = clsx(input, passwordClassNames.input)

const mask = IMask.createMask({ mask: CARD_CVV_MASK })

// ----------------------------------------------------------------------

export const CvvInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => (
  <MaskedInput
    ref={ref}
    {...props}
    mask={mask}
    classNames={{ ...restClassNames, input: classNames }}
  />
))
