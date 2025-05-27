import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { Text } from '@/components/Text/Text'
import { FontVariants } from '@/constants/font-variants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Text',
  component: Text,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
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
