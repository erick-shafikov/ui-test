import type { Meta, StoryObj } from '@storybook/react'

import { MantineProvider } from '@/components/MainProvider'
import { Text } from '@/components/Text'

import '@mantine/core/styles.css'
import { theme } from '@/components/theme'
import { Modal } from '@/components/Modal'
import { Button } from '@/components/Button'

import { useDisclosure } from '@mantine/hooks'
import { Flex } from '@mantine/core'

// ----------------------------------------------------------------------

const ModalWrapper = () => {
  const [opened, { open, close }] = useDisclosure(true)

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={'Невозможно сменить \nспособ оплаты'}
      >
        <Text
          variant='caption-l-regular'
          c='text-base-secondary.0'
          mb='1.5rem'
          display='block'
        >
          Чтобы оплатить другим способом, необходимо <br />
          вернуться на сайт и повторить платёж
        </Text>
        <Flex gap='sm'>
          <Button
            variant='secondary'
            size='xs'
            fullWidth
          >
            Вернуться на сайт
          </Button>
          <Button
            variant='primary'
            size='xs'
            fullWidth
          >
            Остаться
          </Button>
        </Flex>
      </Modal>

      <Button
        variant='default'
        onClick={open}
      >
        Открыть модальное окно
      </Button>
    </>
  )
}

// ----------------------------------------------------------------------

const meta = {
  title: 'Components/Modal',
  component: ModalWrapper,
  decorators: (Story) => (
    <MantineProvider theme={theme}>
      <Story />
    </MantineProvider>
  ),
} satisfies Meta<typeof ModalWrapper>

type Story = StoryObj<typeof meta>

// ----------------------------------------------------------------------

export const ComponentCardInput: Story = {}

// ----------------------------------------------------------------------

export default meta
