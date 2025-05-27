import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { theme } from '@/components/theme'
import { Loader } from '@/components/Loader'
import { LoaderSizes } from '@/components/Loader/constants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Loader',
  component: Loader,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <div style={{ width: '120px', height: '120px', backgroundColor: 'whitesmoke' }}>
        <Story />
      </div>
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Loader>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentLoader: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: LoaderSizes,
    },
  },
}

// ----------------------------------------------------------------------

export default meta
