import { createPolymorphicComponent, Button as MantineButton } from '@mantine/core'
import type { ButtonProps as BaseButtonProps } from '@mantine/core'
import '@mantine/core/styles/UnstyledButton.css'
import '@mantine/core/styles/Button.css'
import classNames from '@/components/Button/Button.module.css'
import { forwardRef } from 'react'
import { ExtendedButtonVariant } from '@/components/Button/types'

// ----------------------------------------------------------------------

type ButtonProps = BaseButtonProps & { variant?: ExtendedButtonVariant }

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { size = 'md', ...resProps } = props
    return (
      <MantineButton
        ref={ref}
        size={size}
        {...resProps}
        classNames={classNames}
      />
    )
  })
)
