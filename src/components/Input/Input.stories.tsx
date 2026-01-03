import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Foundation/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the input',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual variant of the input',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'email@example.com',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'johndoe',
    helperText: 'Choose a unique username',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    error: 'Please enter a valid email address',
    value: 'invalid-email',
  },
}

export const Success: Story = {
  args: {
    label: 'Email',
    placeholder: 'email@example.com',
    variant: 'success',
    value: 'user@example.com',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'Disabled value',
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    value: 'This is read only',
    readOnly: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'Takes full width',
    fullWidth: true,
  },
}

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leftIcon: <span>🔍</span>,
  },
}

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    rightIcon: <span>👁️</span>,
  },
}

export const WithBothIcons: Story = {
  args: {
    label: 'Amount',
    type: 'number',
    placeholder: '0.00',
    leftIcon: <span>$</span>,
    rightIcon: <span>USD</span>,
  },
}

export const EmailType: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
  },
}

export const PasswordType: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const NumberType: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '0',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input variant="default" placeholder="Default" label="Default" />
      <Input
        variant="error"
        placeholder="Error"
        label="Error"
        error="Something went wrong"
      />
      <Input variant="success" placeholder="Success" label="Success" value="Valid input" />
    </div>
  ),
}

export const ComplexExample: Story = {
  args: {
    label: 'Company Email',
    type: 'email',
    placeholder: 'name@company.com',
    helperText: 'Use your work email address',
    leftIcon: <span>📧</span>,
    size: 'lg',
    fullWidth: true,
  },
}
