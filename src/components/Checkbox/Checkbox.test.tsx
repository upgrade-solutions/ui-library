import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument()
  })

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Test checkbox" />)
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)
    
    await user.click(checkbox)
    expect(checkbox.checked).toBe(true)
    
    await user.click(checkbox)
    expect(checkbox.checked).toBe(false)
  })

  it('calls onChange handler', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<Checkbox label="Test" onChange={handleChange} />)
    
    await user.click(screen.getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('respects disabled state', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<Checkbox label="Disabled" disabled onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
    
    await user.click(checkbox)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('displays error message', () => {
    render(<Checkbox label="Test" error="This field is required" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('applies different sizes', () => {
    const { rerender } = render(<Checkbox size="sm" />)
    let checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('h-4', 'w-4')
    
    rerender(<Checkbox size="md" />)
    checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('h-5', 'w-5')
    
    rerender(<Checkbox size="lg" />)
    checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('h-6', 'w-6')
  })

  it('supports checked prop', () => {
    render(<Checkbox checked readOnly />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  it('supports indeterminate state', () => {
    render(<Checkbox indeterminate />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.indeterminate).toBe(true)
  })

  it('applies custom className', () => {
    render(<Checkbox className="custom-class" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveClass('custom-class')
  })

  it('can be clicked via label', async () => {
    const user = userEvent.setup()
    render(<Checkbox label="Click label" />)
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    const label = screen.getByText('Click label')
    
    expect(checkbox.checked).toBe(false)
    await user.click(label)
    expect(checkbox.checked).toBe(true)
  })
})
