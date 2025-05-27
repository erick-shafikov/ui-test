import type { Meta, StoryObj } from '@storybook/react'

import { KvellUiProvider } from '@/components/KvellUiProvider'

import { RiArrowLeftLine as ArrowLeftSVG, RiLockLine as LockSVG } from '@remixicon/react'

import { theme } from '@/components/theme'
import { Button } from '@/components/Button'
import { Text } from '@/components/Text/Text'
import {
  ButtonSizes,
  ButtonVariants,
  LG_BUTTON_SIZE,
  PRIMARY_BUTTON_VARIANT,
  SECONDARY_BUTTON_VARIANT,
  TERTIARY_BUTTON_VARIANT,
} from '@/components/Button/constants'
import { BODY_S_MEDIUM_FONT_VARIANT } from '@/constants/font-variants'

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Button',
  argTypes: { variant: ButtonVariants },
  component: Button,
  decorators: (Story) => (
    <KvellUiProvider theme={theme}>
      <Story />
    </KvellUiProvider>
  ),
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentButton: Story = {
  args: {
    children: 'Текст кнопки',
    variant: 'tertiary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ButtonVariants,
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ButtonSizes,
    },
  },
}

export const PrimaryButton: Story = {
  args: {
    variant: PRIMARY_BUTTON_VARIANT,
    leftSection: <LockSVG size={20} />,
    fullWidth: true,
    style: { maxWidth: '465px' },
    children: <Text variant={BODY_S_MEDIUM_FONT_VARIANT}>Оплатить 7 605,30 RUB</Text>,
    size: LG_BUTTON_SIZE,
  },
}

export const SecondaryButton: Story = {
  args: {
    variant: SECONDARY_BUTTON_VARIANT,
    leftSection: <ArrowLeftSVG size={20} />,
    children: 'Вернуться на сайт продавца',
  },
}

export const TertiaryButton: Story = {
  args: {
    variant: TERTIARY_BUTTON_VARIANT,
    leftSection: <ArrowLeftSVG size={20} />,
    children: 'Сохранённые карты',
  },
}

// ----------------------------------------------------------------------

export default meta
