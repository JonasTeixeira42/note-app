import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NoteActions from '.'

export default {
  title: 'NoteActions',
  component: NoteActions
} as Meta

export const Default: Story = (args) => <NoteActions {...args} />
