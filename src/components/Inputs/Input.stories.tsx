import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { Input as InputComponent } from '@/components/Inputs/Input'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/Input',
  component: InputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof InputComponent>

type Story = StoryObj<typeof InputComponent>

// ----------------------------------------------------------------------

export const Input: Story = {
  args: {
    placeholder: 'IVAN IVANOV',
    label: 'Имя на карте',
  },
}

export const InputError: Story = {
  args: {
    placeholder: 'IVAN IVANOV',
    label: 'Имя на карте',
    error: 'Неправильный формат имени',
  },
}

// ----------------------------------------------------------------------

export default meta
