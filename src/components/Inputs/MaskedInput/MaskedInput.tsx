import { IMaskInput } from 'react-imask'
import { Input } from '@/components/Inputs'
import { forwardRef } from 'react'
import type { MaskedInputProps } from '@/components/Inputs/types'

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
