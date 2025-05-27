import { MaskedInput } from '../MaskedInput'

import type { MaskedInputProps } from '../types'
import { forwardRef } from 'react'
import { CARD_EXPIRY_DATE_MASK } from '../../../constants/masks'
import { IMask } from 'react-imask'
import { RiCalendarLine as CalendarSVG } from '@remixicon/react'

// ----------------------------------------------------------------------

const mask = IMask.createMask({ mask: CARD_EXPIRY_DATE_MASK })

// ----------------------------------------------------------------------

export const CardExpireDateInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
  return (
    <MaskedInput
      ref={ref}
      autoComplete='cc-exp'
      inputMode='numeric'
      {...props}
      mask={mask}
      placeholder='____ ____ ____ ____'
      leftSection={<CalendarSVG size={20} />}
    />
  )
})
