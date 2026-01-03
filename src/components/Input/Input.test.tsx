import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { Input } from './Input'

describe('Input', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toBeInTheDocument()
      expect(input).toHaveClass('border-secondary-300')
    })

    it('renders with placeholder', () => {
      render(<Input placeholder="Enter text" />)
      expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Input label="Username" />)
      expect(screen.getByLabelText('Username')).toBeInTheDocument()
    })

    it('renders with helper text', () => {
      render(<Input helperText="This is a hint" />)
      expect(screen.getByText('This is a hint')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Input className="custom-class" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('renders default variant', () => {
      render(<Input variant="default" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-secondary-300')
    })

    it('renders error variant', () => {
      render(<Input variant="error" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-red-500')
    })

    it('renders success variant', () => {
      render(<Input variant="success" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-green-500')
    })

    it('displays error message', () => {
      render(<Input error="Invalid input" />)
      expect(screen.getByText('Invalid input')).toBeInTheDocument()
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-red-500')
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Input size="sm" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('h-8')
    })

    it('renders medium size (default)', () => {
      render(<Input size="md" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('h-10')
    })

    it('renders large size', () => {
      render(<Input size="lg" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('h-12')
    })
  })

  describe('States', () => {
    it('handles disabled state', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
      expect(input).toHaveClass('disabled:opacity-50')
    })

    it('handles readonly state', () => {
      render(<Input readOnly />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('readonly')
    })

    it('handles required state', () => {
      render(<Input required />)
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
    })
  })

  describe('Layout', () => {
    it('renders full width', () => {
      render(<Input fullWidth />)
      const container = screen.getByRole('textbox').parentElement?.parentElement
      expect(container).toHaveClass('w-full')
    })

    it('renders with left icon', () => {
      const LeftIcon = () => <span data-testid="left-icon">🔍</span>
      render(<Input leftIcon={<LeftIcon />} />)
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    })

    it('renders with right icon', () => {
      const RightIcon = () => <span data-testid="right-icon">✓</span>
      render(<Input rightIcon={<RightIcon />} />)
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })

    it('renders with both icons', () => {
      const LeftIcon = () => <span data-testid="left-icon">🔍</span>
      const RightIcon = () => <span data-testid="right-icon">✓</span>
      render(<Input leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />)
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onChange when value changes', async () => {
      const handleChange = jest.fn()
      const user = userEvent.setup()
      render(<Input onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'test')

      expect(handleChange).toHaveBeenCalled()
    })

    it('calls onFocus when focused', async () => {
      const handleFocus = jest.fn()
      const user = userEvent.setup()
      render(<Input onFocus={handleFocus} />)

      await user.click(screen.getByRole('textbox'))
      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const handleBlur = jest.fn()
      const user = userEvent.setup()
      render(<Input onBlur={handleBlur} />)

      const input = screen.getByRole('textbox')
      await user.click(input)
      await user.tab()

      expect(handleBlur).toHaveBeenCalledTimes(1)
    })

    it('does not call onChange when disabled', async () => {
      const handleChange = jest.fn()
      const user = userEvent.setup()
      render(<Input onChange={handleChange} disabled />)

      const input = screen.getByRole('textbox')
      await user.type(input, 'test')

      expect(handleChange).not.toHaveBeenCalled()
    })

    it('updates value in controlled mode', async () => {
      const TestComponent = () => {
        const [value, setValue] = useState('')
        return (
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-testid="controlled-input"
          />
        )
      }

      const user = userEvent.setup()
      render(<TestComponent />)

      const input = screen.getByTestId('controlled-input')
      await user.type(input, 'hello')

      expect(input).toHaveValue('hello')
    })
  })

  describe('Accessibility', () => {
    it('has textbox role', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('associates label with input', () => {
      render(<Input label="Email" />)
      const input = screen.getByLabelText('Email')
      expect(input).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Input aria-label="Search field" />)
      expect(screen.getByLabelText('Search field')).toBeInTheDocument()
    })

    it('supports aria-describedby for helper text', () => {
      render(<Input helperText="Enter your email address" id="email-input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-describedby')
    })

    it('supports aria-invalid for error state', () => {
      render(<Input error="Invalid email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })

    it('can be focused with keyboard', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      input.focus()
      expect(input).toHaveFocus()
    })
  })

  describe('Input Types', () => {
    it('supports email type', () => {
      render(<Input type="email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'email')
    })

    it('supports password type', () => {
      render(<Input type="password" />)
      const input = document.querySelector('input[type="password"]')
      expect(input).toBeInTheDocument()
    })

    it('supports number type', () => {
      render(<Input type="number" />)
      const input = screen.getByRole('spinbutton')
      expect(input).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles undefined value', () => {
      render(<Input value={undefined} />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('handles empty string value', () => {
      render(<Input value="" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveValue('')
    })

    it('handles multiple props together', () => {
      render(
        <Input
          label="Email"
          placeholder="email@example.com"
          helperText="We'll never share your email"
          size="lg"
          required
          fullWidth
        />
      )
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
      expect(input).toHaveClass('h-12')
    })
  })
})
