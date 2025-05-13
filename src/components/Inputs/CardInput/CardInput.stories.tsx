import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'

import { CardInput as CardInputComponent } from '@/components/Inputs/CardInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/CardInput',
  component: CardInputComponent,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </MantineProvider>
  ),
} satisfies Meta<typeof CardInputComponent>

type Story = StoryObj<typeof CardInputComponent>

// ----------------------------------------------------------------------

export const CardInput: Story = {
  args: { label: 'Номер карты', value: '' },
}

export const CardInputError: Story = {
  args: {
    error: 'Неправильный номер карты',
    label: 'Номер карты',
    value: '4111',
  },
}

// ----------------------------------------------------------------------

export default meta
