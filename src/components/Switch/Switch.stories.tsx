import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { Switch } from '@/components/Switch'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Switch',
  component: Switch,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

// ----------------------------------------------------------------------

export const ComponentSwitch: Story = {
  args: {
    description: 'Сохранить карту в KVELL.Pay',
  },
  argTypes: {
    checked: { control: 'boolean' },
    error: {
      control: 'text',
    },
  },
}

// ----------------------------------------------------------------------

export default meta
