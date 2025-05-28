import { Checkbox as MantineCheckbox } from '@mantine/core'
import textClassNames from '../../../styles/typography.module.css'
import classNames from './Checkbox.module.css'
import { CAPTION_L_MEDIUM_FONT_VARIANT } from '../../../constants/font-variants'
import clsx from 'clsx'

// ----------------------------------------------------------------------

const inputClassName = clsx(textClassNames[CAPTION_L_MEDIUM_FONT_VARIANT], classNames.label)

// ----------------------------------------------------------------------

export const Checkbox = MantineCheckbox.withProps({
  size: 'sm',
  classNames: {
    label: inputClassName,
    root: classNames.root,
    inner: classNames.inner,
    input: classNames.input,
    icon: classNames.icon,
  },
})
