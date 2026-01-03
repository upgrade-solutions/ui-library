# Copilot Instructions
I want to create a UI library from scratch. It will be compatible with npm, built in React, with TailwindCSS, and leverage Storybook. Your goal
is to create an entire UI library with components and their variations, and fully unit tested with jest.

## Tech Stack
- **React 18+** - Component framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **Storybook** - Component documentation and development
- **Rollup/Vite** - Build tooling 

## Overall Plan

### Phase 1: Project Setup
1. Initialize the project structure with necessary configuration files
2. Set up package.json with React, TypeScript, TailwindCSS, and testing dependencies
3. Configure TailwindCSS for the component library
4. Set up Storybook for component documentation and development
5. Configure Jest and React Testing Library for unit testing
6. Set up build tooling (Rollup/Vite) for library bundling
7. Create base TypeScript configuration
8. Set up ESLint and Prettier for code quality

### Phase 2: Foundation Components
Build foundational, atomic components that other components will depend on:
- Typography (Text, Heading)
- Button
- Input
- Checkbox
- Radio
- Select
- Icon system

### Phase 3: Composite Components
Build more complex components using the foundation:
- Card
- Modal
- Dropdown
- Tabs
- Accordion
- Toast/Notification
- Tooltip
- Form components

### Phase 4: Layout Components
- Container
- Grid
- Stack
- Spacer

### Phase 5: Documentation & Publishing
1. Complete Storybook stories for all components
2. Generate documentation
3. Set up npm publishing workflow
4. Create usage examples

## Component Creation Loop

For each new component, follow this systematic approach:

### Step 0: Create Git Branch
1. Create a feature branch: `git checkout -b component/[component-name]`
   - Example: `git checkout -b component/input`
2. Ensure you're starting from the latest main branch
3. This isolates your work and enables code review via PR

### Step 1: Create Component Folder Structure
```
src/components/[ComponentName]/
├── index.ts                    # Public exports
├── [ComponentName].tsx         # Main component implementation
├── [ComponentName].test.tsx    # Unit tests
├── [ComponentName].stories.tsx # Storybook stories
├── [ComponentName].types.ts    # TypeScript interfaces/types
└── README.md                   # Component-specific documentation (optional)
```

### Step 2: Write Tests First (TDD Approach)
1. Create `[ComponentName].test.tsx`
2. Define test cases covering:
   - Rendering with default props
   - All prop variations
   - User interactions (clicks, keyboard events, etc.)
   - Accessibility requirements (ARIA attributes, keyboard navigation)
   - Edge cases and error states
   - Conditional rendering scenarios
3. Run tests to confirm they fail initially

### Step 3: Implement the Component
1. Create `[ComponentName].types.ts` with TypeScript interfaces
2. Implement `[ComponentName].tsx`:
   - Accept typed props
   - Apply TailwindCSS classes for styling
   - Support variants and sizes through props
   - Ensure accessibility (semantic HTML, ARIA attributes)
   - Handle edge cases
   - Export component
3. Create `index.ts` to export component and types
4. Run tests to verify implementation

### Step 4: Create Storybook Stories
1. Create `[ComponentName].stories.tsx`
2. Document all component variations:
   - Default state
   - All variants (primary, secondary, etc.)
   - All sizes (sm, md, lg, etc.)
   - Interactive states (hover, focus, disabled, etc.)
   - Complex usage examples
3. Add controls for interactive prop testing

### Step 5: Verify & Iterate
1. Run all tests: `npm test`
2. Check Storybook: `npm run storybook`
3. Verify TypeScript types
4. Review accessibility
5. Update component if needed

### Step 6: Integration & Git Workflow
1. Export component from main `src/index.ts`
2. Update library documentation
3. **Update STATUS.md** - Mark component as complete, update metrics
4. Run final verification:
   ```bash
   pnpm test:coverage  # Ensure 100% coverage
   pnpm typecheck      # No TypeScript errors
   pnpm build          # Successful build
   pnpm storybook      # Verify in Storybook
   ```
5. **Commit changes**:
   ```bash
   git add .
   git commit -m "feat: add [ComponentName] component
   
   - Implement [ComponentName] with [list key features]
   - Add 100% test coverage ([X] tests)
   - Add [Y] Storybook stories
   - Update STATUS.md and exports"
   ```
6. **Create Pull Request**:
   ```bash
   git push origin component/[component-name]
   ```
   - Create PR on GitHub with description of changes
   - Request code review
   - Link to any related issues
   - Include screenshots from Storybook if applicable

### Step 7: After PR Approval
1. Merge PR to main branch
2. Delete feature branch
3. Pull latest main for next component: `git checkout main && git pull`

## Quality Standards

### Testing Requirements
- Minimum 80% code coverage per component
- Test all user interactions
- Test accessibility features
- Include snapshot tests for visual regression

### Accessibility Standards
- WCAG 2.1 Level AA compliance
- Semantic HTML elements
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management

### Code Standards
- TypeScript strict mode
- No implicit any types
- Comprehensive prop documentation
- Consistent naming conventions
- Clean, readable code with comments where needed
