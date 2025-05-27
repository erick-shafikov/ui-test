import { MaskedInput } from '../MaskedInput'
import { useCardLogo } from './useCardLogo'
import type { MaskedInputProps } from '../types'
import { forwardRef } from 'react'
import { CARD_NUMBER_MASK } from '../../../constants/masks'
import { IMask } from 'react-imask'
import { RiBankCardLine as CardSVG } from '@remixicon/react'

// ----------------------------------------------------------------------

const mask = IMask.createMask({ mask: CARD_NUMBER_MASK })

// ----------------------------------------------------------------------

export const CardInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
  const CardLogo = useCardLogo(props.value)

  return (
    <MaskedInput
      ref={ref}
      inputMode='numeric'
      autoComplete='cc-number'
      {...props}
      mask={mask}
      rightSection={CardLogo && <CardLogo />}
      leftSection={<CardSVG size={20} />}
      placeholder='____ ____ ____ ____'
    />
  )
})
