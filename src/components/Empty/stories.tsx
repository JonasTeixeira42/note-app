import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Empty, { EmptyProps } from '.'

import backgroundImage from 'assets/images/search-image.svg'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: "You don't have any notes",
    image: backgroundImage
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
