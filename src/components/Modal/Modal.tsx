import { Modal as ModalBase } from '@mantine/core'
import '@mantine/core/styles/Modal.layer.css'
import classNames from './Modal.module.css'
import textClassNames from '../../styles/typography.module.css'
import { BODY_M_MEDIUM_FONT_VARIANT } from '../../constants/font-variants'

// ----------------------------------------------------------------------

export const Modal = ModalBase.withProps({
  classNames: { ...classNames, title: textClassNames[BODY_M_MEDIUM_FONT_VARIANT] },
})
