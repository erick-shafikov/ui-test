import { IMaskInput } from 'react-imask'
import { Input } from '../Input'
import { forwardRef } from 'react'
import type { MaskedInputProps } from '../types'

// ----------------------------------------------------------------------

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
  return (
    <Input
      ref={ref}
      component={IMaskInput}
      {...props}
    />
  )
})
