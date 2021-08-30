import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NoteActions, { NoteActionsProps } from '.'

export default {
  title: 'NoteActions',
  component: NoteActions,
  argTypes: {
    onDelete: { action: 'deleted' },
    onClose: { action: 'closed' }
  }
} as Meta

export const Default: Story<NoteActionsProps> = (args) => (
  <NoteActions {...args} />
)
