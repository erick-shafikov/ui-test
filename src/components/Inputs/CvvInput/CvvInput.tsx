import { MaskedInput } from '../MaskedInput'
import passwordClassNames from './CvvInput.module.css'
import baseInputClassNames from '../Input.module.css'
import clsx from 'clsx'
import type { MaskedInputProps } from '../types'
import { forwardRef } from 'react'
import { CARD_CVV_MASK } from '../../../constants/masks'
import { IMask } from 'react-imask'

// ----------------------------------------------------------------------

const { input, ...restClassNames } = baseInputClassNames

const classNames = clsx(input, passwordClassNames.input)

const mask = IMask.createMask({ mask: CARD_CVV_MASK })

// ----------------------------------------------------------------------

export const CvvInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => (
  <MaskedInput
    ref={ref}
    inputMode='numeric'
    autoComplete='cc-csc'
    {...props}
    mask={mask}
    classNames={{ ...restClassNames, input: classNames }}
  />
))
