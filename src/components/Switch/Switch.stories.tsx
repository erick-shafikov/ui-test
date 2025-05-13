import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Switch } from '@/components/Switch'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Switch',
  component: Switch,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
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
