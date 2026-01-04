import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Radio, RadioGroup } from './Radio'

describe('Radio', () => {
  it('renders without crashing', () => {
    render(<Radio value="option1" />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Radio value="option1" label="Option 1" />)
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument()
  })

  it('can be selected', async () => {
    const user = userEvent.setup()
    render(<Radio value="option1" label="Test radio" />)
    
    const radio = screen.getByRole('radio') as HTMLInputElement
    expect(radio.checked).toBe(false)
    
    await user.click(radio)
    expect(radio.checked).toBe(true)
  })

  it('calls onChange handler', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<Radio value="option1" label="Test" onChange={handleChange} />)
    
    await user.click(screen.getByRole('radio'))
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('respects disabled state', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<Radio value="option1" label="Disabled" disabled onChange={handleChange} />)
    
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
    
    await user.click(radio)
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('displays error message', () => {
    render(<Radio value="option1" label="Test" error="This field is required" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('applies different sizes', () => {
    const { rerender } = render(<Radio value="option1" size="sm" />)
    let radio = screen.getByRole('radio')
    expect(radio).toHaveClass('h-4', 'w-4')
    
    rerender(<Radio value="option1" size="md" />)
    radio = screen.getByRole('radio')
    expect(radio).toHaveClass('h-5', 'w-5')
    
    rerender(<Radio value="option1" size="lg" />)
    radio = screen.getByRole('radio')
    expect(radio).toHaveClass('h-6', 'w-6')
  })

  it('supports checked prop', () => {
    render(<Radio value="option1" checked readOnly />)
    const radio = screen.getByRole('radio') as HTMLInputElement
    expect(radio.checked).toBe(true)
  })

  it('applies custom className', () => {
    render(<Radio value="option1" className="custom-class" />)
    const radio = screen.getByRole('radio')
    expect(radio).toHaveClass('custom-class')
  })

  it('can be clicked via label', async () => {
    const user = userEvent.setup()
    render(<Radio value="option1" label="Click label" />)
    
    const radio = screen.getByRole('radio') as HTMLInputElement
    const label = screen.getByText('Click label')
    
    expect(radio.checked).toBe(false)
    await user.click(label)
    expect(radio.checked).toBe(true)
  })
})

describe('RadioGroup', () => {
  it('renders multiple radios', () => {
    render(
      <RadioGroup name="test-group">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
    
    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(3)
  })

  it('only allows one radio to be selected', async () => {
    const user = userEvent.setup()
    render(
      <RadioGroup name="test-group">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    
    await user.click(radios[0])
    expect(radios[0].checked).toBe(true)
    expect(radios[1].checked).toBe(false)
    
    await user.click(radios[1])
    expect(radios[0].checked).toBe(false)
    expect(radios[1].checked).toBe(true)
  })

  it('calls onChange with selected value', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(
      <RadioGroup name="test-group" onChange={handleChange}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    await user.click(screen.getByLabelText('Option 2'))
    expect(handleChange).toHaveBeenCalledWith('option2')
  })

  it('respects defaultValue', () => {
    render(
      <RadioGroup name="test-group" defaultValue="option2">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    expect(radios[0].checked).toBe(false)
    expect(radios[1].checked).toBe(true)
  })

  it('can be controlled with value prop', () => {
    const { rerender } = render(
      <RadioGroup name="test-group" value="option1">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    let radios = screen.getAllByRole('radio') as HTMLInputElement[]
    expect(radios[0].checked).toBe(true)
    expect(radios[1].checked).toBe(false)
    
    rerender(
      <RadioGroup name="test-group" value="option2">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    radios = screen.getAllByRole('radio') as HTMLInputElement[]
    expect(radios[0].checked).toBe(false)
    expect(radios[1].checked).toBe(true)
  })

  it('displays error message for the group', () => {
    render(
      <RadioGroup name="test-group" error="Please select an option">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    expect(screen.getByText('Please select an option')).toBeInTheDocument()
  })

  it('all radios share the same name attribute', () => {
    render(
      <RadioGroup name="shared-name">
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
      </RadioGroup>
    )
    
    const radios = screen.getAllByRole('radio') as HTMLInputElement[]
    expect(radios[0].name).toBe('shared-name')
    expect(radios[1].name).toBe('shared-name')
  })
})
