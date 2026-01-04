import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio, RadioGroup } from './Radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'option1',
    label: 'Default radio',
    name: 'demo',
  },
}

export const Checked: Story = {
  args: {
    value: 'option1',
    label: 'Checked radio',
    name: 'demo',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    value: 'option1',
    label: 'Disabled radio',
    name: 'demo',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    value: 'option1',
    label: 'Disabled checked',
    name: 'demo',
    disabled: true,
    defaultChecked: true,
  },
}

export const WithError: Story = {
  args: {
    value: 'option1',
    label: 'With error',
    name: 'demo',
    error: 'Please select an option',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio value="sm" name="sizes" size="sm" label="Small radio" />
      <Radio value="md" name="sizes" size="md" label="Medium radio" />
      <Radio value="lg" name="sizes" size="lg" label="Large radio" />
    </div>
  ),
}

export const WithoutLabel: Story = {
  args: {
    value: 'option1',
    name: 'demo',
  },
}

export const BasicGroup: Story = {
  render: () => (
    <RadioGroup name="basic-group">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
}

export const GroupWithDefaultValue: Story = {
  render: () => (
    <RadioGroup name="default-group" defaultValue="option2">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
}

export const GroupWithError: Story = {
  render: () => (
    <RadioGroup name="error-group" error="Please select an option">
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
}

export const ControlledGroup: Story = {
  render: () => {
    const [value, setValue] = useState('option2')
    
    return (
      <div className="space-y-4">
        <RadioGroup name="controlled-group" value={value} onChange={setValue}>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
        <div className="text-sm text-gray-600">Selected: {value}</div>
      </div>
    )
  },
}

export const ComplexExample: Story = {
  render: () => {
    const [plan, setPlan] = useState('basic')
    
    return (
      <div className="max-w-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose your plan</h3>
        <RadioGroup name="plan" value={plan} onChange={setPlan}>
          <div className="space-y-3">
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <Radio value="basic" label="Basic Plan - $9/month" size="lg" />
              <p className="text-sm text-gray-500 ml-8 mt-1">
                Perfect for individuals and small projects
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <Radio value="pro" label="Pro Plan - $29/month" size="lg" />
              <p className="text-sm text-gray-500 ml-8 mt-1">
                For growing teams and businesses
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <Radio value="enterprise" label="Enterprise Plan - Custom" size="lg" />
              <p className="text-sm text-gray-500 ml-8 mt-1">
                Advanced features for large organizations
              </p>
            </div>
          </div>
        </RadioGroup>
        <div className="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-700">
          You selected: <strong>{plan}</strong>
        </div>
      </div>
    )
  },
}
