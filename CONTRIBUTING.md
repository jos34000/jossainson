# Contributing to Portfolio

Thank you for considering contributing to this project! Here's how to ensure your contributions are properly formatted and easily understood.

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. This leads to more readable messages that are easy to follow when looking through the project history and helps in generating changelogs automatically.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** is optional.

### Type

Must be one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

### Scope

The scope should be the name of the module affected (as perceived by the person reading the changelog generated from commit messages).

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end

### Body

The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

### Examples

```
feat(auth): add ability to login with GitHub

This adds the option for users to login using their GitHub account.
The implementation uses OAuth2 and stores the user profile in our database.

Closes #123
```

```
fix(dashboard): correct alignment of header elements

The dashboard header had alignment issues on mobile devices that made
some buttons inaccessible. This fixes the layout to be responsive.
```

```
docs(readme): update installation instructions

Update installation guide to include environment setup steps
that were previously missing.
```

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
4. The Pull Request will be merged once it receives approval from maintainers.

## Branching Strategy

- `main` - Production-ready code
- `dev` - Development branch where features are merged before going to main
- `feature/feature-name` - For developing new features
- `fix/issue-name` - For bug fixes
- `docs/topic` - For documentation changes
- `refactor/component` - For code refactoring

Always branch off from `dev` for new features and fixes.

## Questions?

If you have any questions about the contribution process, please open an issue or contact the maintainers.

Thank you for your contributions!
