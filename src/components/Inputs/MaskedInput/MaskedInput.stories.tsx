import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { MaskedInput as MaskedInputComponent } from '@/components/Inputs/MaskedInput'

import { PHONE_MASK } from '@/constants/masks'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Inputs/MaskedInput',
  component: MaskedInputComponent,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ maxWidth: '304px' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof MaskedInputComponent>

type Story = StoryObj<typeof MaskedInputComponent>

// ----------------------------------------------------------------------

export const MaskedInput: Story = {
  args: {
    mask: PHONE_MASK,
    value: '77777777777',
    label: 'Номер телефона',
  },
}

// ----------------------------------------------------------------------

export default meta
