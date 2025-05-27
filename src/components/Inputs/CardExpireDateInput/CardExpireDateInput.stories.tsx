import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { CardExpireDateInput as CardExpireDateInputComponent } from '@/components/Inputs/CardExpireDateInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/CardExpireDate',
  component: CardExpireDateInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '144px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof CardExpireDateInputComponent>

type Story = StoryObj<typeof CardExpireDateInputComponent>

// ----------------------------------------------------------------------

export const CardExpireDateInput: Story = {
  args: {
    value: '1225',
    label: 'Срок действия',
  },
}

export const CardExpireDateInputError: Story = {
  args: {
    value: '0120',
    label: 'Срок действия',
    error: 'Срок действия карты истёк',
  },
}

// ----------------------------------------------------------------------

export default meta
