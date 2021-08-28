import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Modal, { ModalProps } from '.'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    isOpen: true,
    title: 'Add note',
    children: 'Modal'
  },
  argTypes: {
    onAdd: { action: 'added' },
    onClose: { action: 'canceled' },
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<ModalProps> = (args) => <Modal {...args} />
