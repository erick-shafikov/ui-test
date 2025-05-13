import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { PasswordInput as PasswordInputComponent } from '@/components/Inputs/PasswordInput/PasswordInput'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/PasswordInput',
  component: PasswordInputComponent,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </MantineProvider>
  ),
} satisfies Meta<typeof PasswordInputComponent>

type Story = StoryObj<typeof PasswordInputComponent>

// ----------------------------------------------------------------------

export const PasswordInput: Story = {
  args: {
    label: 'Введите пароль',
  },
}

export const PasswordInputError: Story = {
  args: {
    label: 'Введите пароль',
    error: 'Неверный пароль',
  },
}

// ----------------------------------------------------------------------

export default meta
