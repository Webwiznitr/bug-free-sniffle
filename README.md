# Bug-Free Sniffle 🐛🚫

Welcome to the **Bug-Free Sniffle** repository! This project is built with **Next.js 15**, **React 19**, and **Tailwind CSS v4**.

This document outlines the required setup and workflow for all contributors to ensure a smooth, consistent, and high-quality development process for our team.

---

## ⚙️ Prerequisites

- **Node.js**: `v22.0.0` or higher. We recommend using [nvm](https://github.com/nvm-sh/nvm) (an `.nvmrc` file is included).
- **Package Manager**: `npm` (v10+). _Do not use Yarn, pnpm, or bun_ to avoid lockfile conflicts (enforced via package.json engines).

## 🚀 Getting Started

1. **Fork & Clone the repository**:
   - First, click the **Fork** button at the top right of this repository to create your own copy.
   - Then, clone your forked repository:

   ```bash
   git clone https://github.com/<your-username>/bug-free-sniffle.git
   cd bug-free-sniffle
   ```

   - (Optional but recommended) Add the original repository as an upstream remote to keep your fork synced:

   ```bash
   git remote add upstream https://github.com/<upstream-org>/bug-free-sniffle.git
   ```

2. **Use the correct Node version**:

   ```bash
   nvm use
   ```

3. **Install dependencies**:
   _(This will automatically initialize the Husky Git hooks)_

   ```bash
   npm ci
   ```

4. **Environment Variables**:
   If an `.env.example` file exists, copy it to `.env.local` and fill in the required values. _(Note: Never commit `.env.local`!)_

5. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

---

## 💻 Editor Setup (VS Code)

We highly recommend using **Visual Studio Code**. When you open this project, VS Code will prompt you to install **Recommended Extensions** (Prettier, ESLint, Tailwind CSS). **Please install them.**

Our workspace settings (`.vscode/settings.json`) are configured to automatically:

- Format your code with Prettier on save.
- Fix ESLint errors on save.
- Provide Tailwind IntelliSense inside custom utilities like `cn()` and `cva()`.

---

## 🔄 Development Workflow

To maintain code quality across the team, we enforce strict linting, formatting, and commit standards.

### 1. Branching

Always sync your local `main` with the upstream repository before starting. Then, create a new branch on your fork for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bugfix-name
```

### 2. Committing Changes

We use **[Conventional Commits](https://www.conventionalcommits.org/)**. Your commit messages **must** follow this format, or Husky will reject the commit:

```text
<type>: <description>

# Examples:
feat: add user authentication form
fix: resolve mobile layout overflow on navbar
docs: update readme instructions
chore: update npm dependencies
```

_(Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`)_

**⚠️ Important:** When you run `git commit`, our `lint-staged` hook will automatically format your files with Prettier and check them with ESLint. If there are unfixable errors, your commit will be aborted.

### 3. Pull Requests (PRs)

1. Push your feature branch to your forked repository on GitHub.
2. Go to the original upstream repository and click **New Pull Request**.
3. Compare your fork's branch against the upstream `main` branch.
4. Fill out the provided **PR Template** completely.
5. Ensure all GitHub Action CI checks pass (formatting, linting, and Next.js build tests).
6. Request a review from at least one other team member.
7. Once approved and checks pass, the maintainers will squash and merge your PR.

---

## 🛠️ Available Scripts

- **`npm run dev`**: Starts the development server using Turbopack.
- **`npm run build`**: Builds the application for production.
- **`npm start`**: Starts the production server.
- **`npm run lint`**: Runs ESLint to catch errors across the project.
- **`npm run format`**: Manually formats all codebase files using Prettier.
- **`npm run format:check`**: Verifies formatting (used by CI).
- **`npm run typecheck`**: Runs the TypeScript compiler to check for type errors without emitting files.

Happy coding! 🎉
