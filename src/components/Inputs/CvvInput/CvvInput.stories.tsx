import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { CvvInput as CvvInputComponent } from '@/components/Inputs/CvvInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/CvvInput',
  component: CvvInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '304px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof CvvInputComponent>

type Story = StoryObj<typeof CvvInputComponent>

// ----------------------------------------------------------------------

export const CvvInput: Story = {
  args: {
    label: 'CVV/CVC',
  },
}

export const CvvInputError: Story = {
  args: {
    label: 'CVV/CVC',
    error: 'Укажите код',
  },
}

// ----------------------------------------------------------------------

export default meta
