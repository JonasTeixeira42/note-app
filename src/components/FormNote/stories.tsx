import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import FormNote from '.'

export default {
  title: 'FormNote',
  component: FormNote
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '84.7rem', margin: '0 auto' }}>
    <FormNote {...args} />
  </div>
)
