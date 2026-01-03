# @dna/ui-library

A comprehensive React UI component library built with TypeScript, TailwindCSS, and fully tested with Jest.

## Installation

```bash
npm install @dna/ui-library
# or
pnpm add @dna/ui-library
# or
yarn add @dna/ui-library
```

## Usage

```tsx
import { Button } from '@dna/ui-library'
import '@dna/ui-library/styles'

function App() {
  return <Button variant="primary">Click me</Button>
}
```

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Build the library
pnpm build

# Type checking
pnpm typecheck

# Lint
pnpm lint
```

## Components

- **Foundation Components**: Button, Input, Checkbox, Radio, Select, Typography
- **Composite Components**: Card, Modal, Dropdown, Tabs, Accordion, Toast, Tooltip
- **Layout Components**: Container, Grid, Stack, Spacer

## Testing

All components are fully unit tested with minimum 80% code coverage.

## License

MIT
