import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Checkbox as CheckboxComponent } from '@/components/Inputs/Checkbox'
import { Text } from '@/components/Text'
import { Anchor } from '@mantine/core'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/Checkbox',
  component: CheckboxComponent,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: '465px' }}>
        <Story />
      </div>
    </MantineProvider>
  ),
} satisfies Meta<typeof CheckboxComponent>

type Story = StoryObj<typeof CheckboxComponent>

// ----------------------------------------------------------------------

export const Checkbox: Story = {
  args: {
    label: (
      <Text variant='caption-l-medium'>
        Соглашаюсь с условиями{' '}
        <Anchor
          href='#'
          target='_blank'
          rel='noreferrer'
          c='text-accent-blue-accent.0'
          inherit
        >
          КИД (Ключевого информационного документа)
        </Anchor>
      </Text>
    ),
  },
}

export const CheckboxChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}

// ----------------------------------------------------------------------

export default meta
