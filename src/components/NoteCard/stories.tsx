import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import NoteCard, { NoteCardProps } from '.'

export default {
  title: 'NoteCard',
  component: NoteCard,
  args: {
    title: 'Some Note',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita…',
    type: 'personal',
    date: 'Jan 23, 2021'
  }
} as Meta

export const Default: Story<NoteCardProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: 'auto' }}>
    <NoteCard {...args} />
  </div>
)

export const FinishedNote: Story<NoteCardProps> = (args) => (
  <div style={{ maxWidth: '40rem', margin: 'auto' }}>
    <NoteCard {...args} />
  </div>
)

FinishedNote.args = {
  isFinished: true
}
