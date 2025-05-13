import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { MaskedInput as MaskedInputComponent } from '@/components/Inputs/MaskedInput'
import CalendarSVG from '@/assets/calendar.svg'
import { CARD_EXPIRY_DATE_MASK, PHONE_MASK } from '@/constants/masks'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/MaskedInput',
  component: MaskedInputComponent,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: '304px' }}>
        <Story />
      </div>
    </MantineProvider>
  ),
} satisfies Meta<typeof MaskedInputComponent>

type Story = StoryObj<typeof MaskedInputComponent>

// ----------------------------------------------------------------------

export const MaskedInput: Story = {
  args: {
    mask: PHONE_MASK,
    value: '77777777777',
    label: 'Номер телефона',
  },
}

export const MaskedInputExpiryDate: Story = {
  args: {
    leftSection: <CalendarSVG />,
    mask: CARD_EXPIRY_DATE_MASK,
    value: '1225',
    label: 'Срок действия',
  },
}

export const MaskedInputExpiryDateError: Story = {
  args: {
    leftSection: <CalendarSVG />,
    mask: CARD_EXPIRY_DATE_MASK,
    value: '0120',
    label: 'Срок действия',
    error: 'Срок действия карты истёк',
  },
}

// ----------------------------------------------------------------------

export default meta
