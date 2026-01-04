import { render, screen } from '@testing-library/react';
import { Text, Heading } from './Typography';

describe('Text Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Text>Hello World</Text>);
      const text = screen.getByText('Hello World');
      expect(text).toBeInTheDocument();
      expect(text.tagName).toBe('P');
    });

    it('renders with body1 variant', () => {
      render(<Text variant="body1">Body 1 text</Text>);
      const text = screen.getByText('Body 1 text');
      expect(text).toHaveClass('text-base');
    });

    it('renders with body2 variant', () => {
      render(<Text variant="body2">Body 2 text</Text>);
      const text = screen.getByText('Body 2 text');
      expect(text).toHaveClass('text-sm');
    });

    it('renders with caption variant', () => {
      render(<Text variant="caption">Caption text</Text>);
      const text = screen.getByText('Caption text');
      expect(text).toHaveClass('text-xs');
    });

    it('renders with overline variant', () => {
      render(<Text variant="overline">Overline text</Text>);
      const text = screen.getByText('Overline text');
      expect(text).toHaveClass('text-xs', 'uppercase', 'tracking-wide');
    });

    it('renders with subtitle1 variant', () => {
      render(<Text variant="subtitle1">Subtitle 1</Text>);
      const text = screen.getByText('Subtitle 1');
      expect(text).toHaveClass('text-lg', 'font-medium');
    });

    it('renders with subtitle2 variant', () => {
      render(<Text variant="subtitle2">Subtitle 2</Text>);
      const text = screen.getByText('Subtitle 2');
      expect(text).toHaveClass('text-base', 'font-medium');
    });

    it('renders with custom element via as prop', () => {
      render(<Text as="span">Span text</Text>);
      const text = screen.getByText('Span text');
      expect(text.tagName).toBe('SPAN');
    });
  });

  describe('Alignment', () => {
    it('renders with left alignment', () => {
      render(<Text align="left">Left aligned</Text>);
      expect(screen.getByText('Left aligned')).toHaveClass('text-left');
    });

    it('renders with center alignment', () => {
      render(<Text align="center">Center aligned</Text>);
      expect(screen.getByText('Center aligned')).toHaveClass('text-center');
    });

    it('renders with right alignment', () => {
      render(<Text align="right">Right aligned</Text>);
      expect(screen.getByText('Right aligned')).toHaveClass('text-right');
    });

    it('renders with justify alignment', () => {
      render(<Text align="justify">Justified text</Text>);
      expect(screen.getByText('Justified text')).toHaveClass('text-justify');
    });
  });

  describe('Colors', () => {
    it('renders with primary color', () => {
      render(<Text color="primary">Primary text</Text>);
      expect(screen.getByText('Primary text')).toHaveClass('text-blue-600');
    });

    it('renders with secondary color', () => {
      render(<Text color="secondary">Secondary text</Text>);
      expect(screen.getByText('Secondary text')).toHaveClass('text-gray-600');
    });

    it('renders with success color', () => {
      render(<Text color="success">Success text</Text>);
      expect(screen.getByText('Success text')).toHaveClass('text-green-600');
    });

    it('renders with error color', () => {
      render(<Text color="error">Error text</Text>);
      expect(screen.getByText('Error text')).toHaveClass('text-red-600');
    });

    it('renders with warning color', () => {
      render(<Text color="warning">Warning text</Text>);
      expect(screen.getByText('Warning text')).toHaveClass('text-yellow-600');
    });

    it('renders with muted color', () => {
      render(<Text color="muted">Muted text</Text>);
      expect(screen.getByText('Muted text')).toHaveClass('text-gray-500');
    });
  });

  describe('Font Weights', () => {
    it('renders with light weight', () => {
      render(<Text weight="light">Light text</Text>);
      expect(screen.getByText('Light text')).toHaveClass('font-light');
    });

    it('renders with normal weight', () => {
      render(<Text weight="normal">Normal text</Text>);
      expect(screen.getByText('Normal text')).toHaveClass('font-normal');
    });

    it('renders with medium weight', () => {
      render(<Text weight="medium">Medium text</Text>);
      expect(screen.getByText('Medium text')).toHaveClass('font-medium');
    });

    it('renders with semibold weight', () => {
      render(<Text weight="semibold">Semibold text</Text>);
      expect(screen.getByText('Semibold text')).toHaveClass('font-semibold');
    });

    it('renders with bold weight', () => {
      render(<Text weight="bold">Bold text</Text>);
      expect(screen.getByText('Bold text')).toHaveClass('font-bold');
    });

    it('renders with extrabold weight', () => {
      render(<Text weight="extrabold">Extra bold text</Text>);
      expect(screen.getByText('Extra bold text')).toHaveClass('font-extrabold');
    });
  });

  describe('Styling Options', () => {
    it('renders with italic style', () => {
      render(<Text italic>Italic text</Text>);
      expect(screen.getByText('Italic text')).toHaveClass('italic');
    });

    it('renders with underline', () => {
      render(<Text underline>Underlined text</Text>);
      expect(screen.getByText('Underlined text')).toHaveClass('underline');
    });

    it('renders with truncate', () => {
      render(<Text truncate>Truncated text</Text>);
      expect(screen.getByText('Truncated text')).toHaveClass('truncate');
    });

    it('combines multiple styling options', () => {
      render(
        <Text italic underline weight="bold" color="primary">
          Combined styles
        </Text>
      );
      const text = screen.getByText('Combined styles');
      expect(text).toHaveClass('italic', 'underline', 'font-bold', 'text-blue-600');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(<Text className="custom-class">Custom styled</Text>);
      expect(screen.getByText('Custom styled')).toHaveClass('custom-class');
    });

    it('merges custom className with default classes', () => {
      render(
        <Text variant="body1" className="custom-class">
          Merged classes
        </Text>
      );
      const text = screen.getByText('Merged classes');
      expect(text).toHaveClass('text-base', 'custom-class');
    });
  });
});

describe('Heading Component', () => {
  describe('Rendering', () => {
    it('renders with default level (h2)', () => {
      render(<Heading>Default Heading</Heading>);
      const heading = screen.getByText('Default Heading');
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe('H2');
    });

    it('renders h1 heading', () => {
      render(<Heading level="h1">H1 Heading</Heading>);
      const heading = screen.getByText('H1 Heading');
      expect(heading.tagName).toBe('H1');
      expect(heading).toHaveClass('text-4xl', 'font-bold');
    });

    it('renders h2 heading', () => {
      render(<Heading level="h2">H2 Heading</Heading>);
      const heading = screen.getByText('H2 Heading');
      expect(heading.tagName).toBe('H2');
      expect(heading).toHaveClass('text-3xl', 'font-bold');
    });

    it('renders h3 heading', () => {
      render(<Heading level="h3">H3 Heading</Heading>);
      const heading = screen.getByText('H3 Heading');
      expect(heading.tagName).toBe('H3');
      expect(heading).toHaveClass('text-2xl', 'font-semibold');
    });

    it('renders h4 heading', () => {
      render(<Heading level="h4">H4 Heading</Heading>);
      const heading = screen.getByText('H4 Heading');
      expect(heading.tagName).toBe('H4');
      expect(heading).toHaveClass('text-xl', 'font-semibold');
    });

    it('renders h5 heading', () => {
      render(<Heading level="h5">H5 Heading</Heading>);
      const heading = screen.getByText('H5 Heading');
      expect(heading.tagName).toBe('H5');
      expect(heading).toHaveClass('text-lg', 'font-medium');
    });

    it('renders h6 heading', () => {
      render(<Heading level="h6">H6 Heading</Heading>);
      const heading = screen.getByText('H6 Heading');
      expect(heading.tagName).toBe('H6');
      expect(heading).toHaveClass('text-base', 'font-medium');
    });

    it('renders with custom element via as prop', () => {
      render(
        <Heading level="h1" as="div">
          Div as H1
        </Heading>
      );
      const heading = screen.getByText('Div as H1');
      expect(heading.tagName).toBe('DIV');
      expect(heading).toHaveClass('text-4xl', 'font-bold');
    });
  });

  describe('Alignment', () => {
    it('renders with center alignment', () => {
      render(<Heading align="center">Centered Heading</Heading>);
      expect(screen.getByText('Centered Heading')).toHaveClass('text-center');
    });
  });

  describe('Colors', () => {
    it('renders with error color', () => {
      render(<Heading color="error">Error Heading</Heading>);
      expect(screen.getByText('Error Heading')).toHaveClass('text-red-600');
    });
  });

  describe('Font Weights', () => {
    it('overrides default weight', () => {
      render(<Heading weight="light">Light Heading</Heading>);
      expect(screen.getByText('Light Heading')).toHaveClass('font-light');
    });
  });

  describe('Styling Options', () => {
    it('renders with italic style', () => {
      render(<Heading italic>Italic Heading</Heading>);
      expect(screen.getByText('Italic Heading')).toHaveClass('italic');
    });

    it('renders with underline', () => {
      render(<Heading underline>Underlined Heading</Heading>);
      expect(screen.getByText('Underlined Heading')).toHaveClass('underline');
    });

    it('renders with truncate', () => {
      render(<Heading truncate>Truncated Heading</Heading>);
      expect(screen.getByText('Truncated Heading')).toHaveClass('truncate');
    });
  });

  describe('Custom className', () => {
    it('applies custom className', () => {
      render(<Heading className="custom-heading">Custom Heading</Heading>);
      expect(screen.getByText('Custom Heading')).toHaveClass('custom-heading');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML heading elements', () => {
      const { container } = render(
        <>
          <Heading level="h1">Level 1</Heading>
          <Heading level="h2">Level 2</Heading>
          <Heading level="h3">Level 3</Heading>
        </>
      );
      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(container.querySelector('h2')).toBeInTheDocument();
      expect(container.querySelector('h3')).toBeInTheDocument();
    });
  });
});
