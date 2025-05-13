import { Switch as SwitchBase } from '@mantine/core'
import classes from '@/components/Switch/Switch.module.css'
import textClassNames from '@/styles/typography.module.css'
import clsx from 'clsx'
import { CAPTION_L_MEDIUM_FONT_VARIANT } from '@/constants/font-variants'

// ----------------------------------------------------------------------

const descriptionClassName = clsx(
  classes.description,
  textClassNames[CAPTION_L_MEDIUM_FONT_VARIANT]
)

// ----------------------------------------------------------------------

export const Switch = SwitchBase.withProps({
  classNames: { ...classes, description: descriptionClassName },
  size: 'xs',
})
