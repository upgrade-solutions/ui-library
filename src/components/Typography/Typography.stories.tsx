import type { Meta, StoryObj } from '@storybook/react';
import { Text, Heading } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

// Text Component Stories
type TextStory = StoryObj<typeof Text>;

export const TextDefault: TextStory = {
  name: 'Text - Default',
  render: () => <Text>This is default body text using the body1 variant.</Text>,
};

export const TextVariants: TextStory = {
  name: 'Text - All Variants',
  render: () => (
    <div className="space-y-4">
      <Text variant="body1">Body 1 - Regular body text (16px)</Text>
      <Text variant="body2">Body 2 - Smaller body text (14px)</Text>
      <Text variant="caption">Caption - Small descriptive text (12px)</Text>
      <Text variant="overline">Overline - Uppercase labels (12px)</Text>
      <Text variant="subtitle1">Subtitle 1 - Medium emphasis subtitle (18px)</Text>
      <Text variant="subtitle2">Subtitle 2 - Standard emphasis subtitle (16px)</Text>
    </div>
  ),
};

export const TextColors: TextStory = {
  name: 'Text - Colors',
  render: () => (
    <div className="space-y-2">
      <Text color="primary">Primary color text</Text>
      <Text color="secondary">Secondary color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="error">Error color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="muted">Muted color text</Text>
    </div>
  ),
};

export const TextWeights: TextStory = {
  name: 'Text - Font Weights',
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
      <Text weight="extrabold">Extra bold weight text</Text>
    </div>
  ),
};

export const TextAlignment: TextStory = {
  name: 'Text - Alignment',
  render: () => (
    <div className="space-y-2">
      <Text align="left">Left aligned text</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
      <Text align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  ),
};

export const TextStyling: TextStory = {
  name: 'Text - Styling Options',
  render: () => (
    <div className="space-y-2">
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text truncate className="max-w-xs">
        Truncated text that is too long and will be cut off with an ellipsis when it exceeds
        the maximum width
      </Text>
      <Text italic underline weight="bold">
        Combined: italic, underlined, and bold
      </Text>
    </div>
  ),
};

export const TextCustomElement: TextStory = {
  name: 'Text - Custom Element',
  render: () => (
    <div className="space-y-2">
      <Text as="p">Paragraph element (default)</Text>
      <Text as="span">Span element</Text>
      <Text as="div">Div element</Text>
      <Text as="label">Label element</Text>
    </div>
  ),
};

// Heading Component Stories
type HeadingStory = StoryObj<typeof Heading>;

export const HeadingDefault: HeadingStory = {
  name: 'Heading - Default',
  render: () => <Heading>This is a default H2 heading</Heading>,
};

export const HeadingLevels: HeadingStory = {
  name: 'Heading - All Levels',
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Heading 1 - Main page title</Heading>
      <Heading level="h2">Heading 2 - Section title</Heading>
      <Heading level="h3">Heading 3 - Subsection title</Heading>
      <Heading level="h4">Heading 4 - Component title</Heading>
      <Heading level="h5">Heading 5 - Small section title</Heading>
      <Heading level="h6">Heading 6 - Smallest heading</Heading>
    </div>
  ),
};

export const HeadingColors: HeadingStory = {
  name: 'Heading - Colors',
  render: () => (
    <div className="space-y-3">
      <Heading level="h3" color="primary">
        Primary Heading
      </Heading>
      <Heading level="h3" color="secondary">
        Secondary Heading
      </Heading>
      <Heading level="h3" color="success">
        Success Heading
      </Heading>
      <Heading level="h3" color="error">
        Error Heading
      </Heading>
      <Heading level="h3" color="warning">
        Warning Heading
      </Heading>
      <Heading level="h3" color="muted">
        Muted Heading
      </Heading>
    </div>
  ),
};

export const HeadingWeights: HeadingStory = {
  name: 'Heading - Font Weights',
  render: () => (
    <div className="space-y-3">
      <Heading level="h3" weight="light">
        Light Heading
      </Heading>
      <Heading level="h3" weight="normal">
        Normal Heading
      </Heading>
      <Heading level="h3" weight="medium">
        Medium Heading
      </Heading>
      <Heading level="h3" weight="semibold">
        Semibold Heading
      </Heading>
      <Heading level="h3" weight="bold">
        Bold Heading
      </Heading>
      <Heading level="h3" weight="extrabold">
        Extra Bold Heading
      </Heading>
    </div>
  ),
};

export const HeadingAlignment: HeadingStory = {
  name: 'Heading - Alignment',
  render: () => (
    <div className="space-y-3">
      <Heading level="h3" align="left">
        Left Aligned Heading
      </Heading>
      <Heading level="h3" align="center">
        Center Aligned Heading
      </Heading>
      <Heading level="h3" align="right">
        Right Aligned Heading
      </Heading>
    </div>
  ),
};

export const HeadingStyling: HeadingStory = {
  name: 'Heading - Styling Options',
  render: () => (
    <div className="space-y-3">
      <Heading level="h3" italic>
        Italic Heading
      </Heading>
      <Heading level="h3" underline>
        Underlined Heading
      </Heading>
      <Heading level="h3" truncate className="max-w-md">
        Truncated Heading That Is Very Long And Will Be Cut Off
      </Heading>
    </div>
  ),
};

export const HeadingCustomElement: HeadingStory = {
  name: 'Heading - Custom Element',
  render: () => (
    <div className="space-y-3">
      <Heading level="h1">Native H1 element</Heading>
      <Heading level="h1" as="div">
        H1 styling on DIV element
      </Heading>
      <Heading level="h2" as="span">
        H2 styling on SPAN element
      </Heading>
    </div>
  ),
};

export const CombinedExample: HeadingStory = {
  name: 'Combined - Article Layout',
  render: () => (
    <article className="max-w-2xl space-y-4">
      <Heading level="h1" align="center" color="primary">
        The Future of Web Development
      </Heading>
      <Text variant="subtitle1" align="center" color="muted">
        A comprehensive guide to modern development practices
      </Text>
      <Text variant="caption" align="center" color="muted">
        Published on January 3, 2026
      </Text>

      <div className="space-y-4 mt-8">
        <Heading level="h2">Introduction</Heading>
        <Text variant="body1">
          Web development continues to evolve at a rapid pace. In this article, we'll explore
          the latest trends and technologies shaping the future of how we build for the web.
        </Text>

        <Heading level="h3" color="primary">
          Modern Frameworks
        </Heading>
        <Text variant="body1">
          React, Vue, and Angular have become the cornerstone of modern web development,
          providing developers with powerful tools to build interactive user interfaces.
        </Text>

        <Heading level="h3" color="success">
          Key Takeaways
        </Heading>
        <Text variant="body2">
          • Component-based architecture improves code reusability
          <br />
          • TypeScript adds type safety to JavaScript
          <br />• Modern build tools optimize performance
        </Text>

        <Heading level="h4">Conclusion</Heading>
        <Text variant="body1" italic>
          The future is bright for web developers who embrace modern tools and best practices.
        </Text>
      </div>
    </article>
  ),
};

export const InteractivePlayground: TextStory = {
  name: 'Interactive Playground',
  args: {
    children: 'Edit me in the controls below!',
    variant: 'body1',
    align: 'left',
    color: undefined,
    weight: undefined,
    italic: false,
    underline: false,
    truncate: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['body1', 'body2', 'caption', 'overline', 'subtitle1', 'subtitle2'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    color: {
      control: 'select',
      options: [undefined, 'primary', 'secondary', 'success', 'error', 'warning', 'muted'],
    },
    weight: {
      control: 'select',
      options: [undefined, 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
    },
    italic: {
      control: 'boolean',
    },
    underline: {
      control: 'boolean',
    },
    truncate: {
      control: 'boolean',
    },
  },
};
