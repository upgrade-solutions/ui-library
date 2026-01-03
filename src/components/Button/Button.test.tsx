import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('inline-flex')
    })

    it('renders children correctly', () => {
      render(<Button>Test Button</Button>)
      expect(screen.getByText('Test Button')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })
  })

  describe('Variants', () => {
    it('renders primary variant', () => {
      render(<Button variant="primary">Primary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary-600')
    })

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-secondary-600')
    })

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-2')
    })

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-transparent')
    })

    it('renders danger variant', () => {
      render(<Button variant="danger">Danger</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-red-600')
    })
  })

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Button size="sm">Small</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-8')
    })

    it('renders medium size (default)', () => {
      render(<Button size="md">Medium</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10')
    })

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-12')
    })
  })

  describe('States', () => {
    it('handles disabled state', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:opacity-50')
    })

    it('handles loading state', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(screen.getByText('Loading')).toBeInTheDocument()
    })

    it('shows loading spinner when loading', () => {
      render(<Button loading>Submit</Button>)
      const spinner = screen.getByRole('button').querySelector('svg')
      expect(spinner).toBeInTheDocument()
    })
  })

  describe('Layout', () => {
    it('renders full width', () => {
      render(<Button fullWidth>Full Width</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('w-full')
    })

    it('renders with left icon', () => {
      const LeftIcon = () => <span data-testid="left-icon">←</span>
      render(<Button leftIcon={<LeftIcon />}>With Icon</Button>)
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    })

    it('renders with right icon', () => {
      const RightIcon = () => <span data-testid="right-icon">→</span>
      render(<Button rightIcon={<RightIcon />}>With Icon</Button>)
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })

    it('renders with both icons', () => {
      const LeftIcon = () => <span data-testid="left-icon">←</span>
      const RightIcon = () => <span data-testid="right-icon">→</span>
      render(
        <Button leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
          Both Icons
        </Button>
      )
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Click me</Button>)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      )

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('does not call onClick when loading', async () => {
      const handleClick = jest.fn()
      const user = userEvent.setup()
      render(
        <Button onClick={handleClick} loading>
          Loading
        </Button>
      )

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accessibility', () => {
    it('has button role', () => {
      render(<Button>Button</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('supports aria-label', () => {
      render(<Button aria-label="Custom label">Button</Button>)
      expect(screen.getByLabelText('Custom label')).toBeInTheDocument()
    })

    it('supports type attribute', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('can be focused', () => {
      render(<Button>Focusable</Button>)
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })
  })

  describe('Edge Cases', () => {
    it('handles empty string children', () => {
      render(<Button>{''}</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('handles multiple props together', () => {
      render(
        <Button variant="primary" size="lg" fullWidth disabled className="custom">
          Complex Button
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('w-full', 'h-12', 'custom')
    })
  })
})
