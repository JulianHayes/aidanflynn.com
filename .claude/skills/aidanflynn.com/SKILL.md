```markdown
# aidanflynn.com Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill provides a comprehensive guide to the development patterns used in the `aidanflynn.com` repository. The project is built with TypeScript and Next.js, following specific conventions for file naming, imports, and exports. It also outlines testing patterns and suggests helpful commands for common workflows. Use this skill to maintain consistency and efficiency when contributing to the codebase.

## Coding Conventions

### File Naming
- **PascalCase** is used for file names.
  - Example: `UserProfile.tsx`, `HomePage.ts`

### Import Style
- **Alias imports** are preferred.
  - Example:
    ```typescript
    import Button from '@/components/Button';
    ```

### Export Style
- **Default exports** are used for modules.
  - Example:
    ```typescript
    const UserProfile = () => { /* ... */ };
    export default UserProfile;
    ```

### Commit Patterns
- Commit messages are **freeform** with no enforced prefix.
- Average commit message length: **53 characters**.
  - Example: `Update navigation bar to include contact link`

## Workflows

_No automated workflows detected in this repository._

## Testing Patterns

- **Testing framework:** Unknown (not detected)
- **Test file pattern:** Files named with `*.test.*`
  - Example: `UserProfile.test.tsx`
- Place tests alongside the modules they test or in a dedicated `__tests__` directory.

  ```typescript
  // UserProfile.test.tsx
  import { render } from '@testing-library/react';
  import UserProfile from './UserProfile';

  test('renders user profile', () => {
    render(<UserProfile />);
    // assertions...
  });
  ```

## Commands

| Command | Purpose |
|---------|---------|
| /conventions | Show coding conventions and examples |
| /test-patterns | Show how to write and locate tests |
```