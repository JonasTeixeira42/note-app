import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NoteCard from '.'

export default {
  title: 'NoteCard',
  component: NoteCard
} as Meta

export const Default: Story = (args) => <NoteCard />
