import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import ProgressBar from '.'

export default {
  title: 'ProgressBar',
  component: ProgressBar
} as Meta

export const Default: Story = (args) => <ProgressBar {...args} />
