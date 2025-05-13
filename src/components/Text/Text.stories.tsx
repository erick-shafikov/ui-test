import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Text } from '@/components/Text/Text'
import { FontVariants } from '@/constants/font-variants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Text',
  component: Text,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof Text>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentText: Story = {
  args: {
    children: 'Компонент типографии',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: FontVariants,
    },
  },
}

// ----------------------------------------------------------------------

export default meta
