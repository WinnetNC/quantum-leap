![CI](https://github.com/WinnetNC/frontend-template/actions/workflows/ci.yml/badge.svg)

## 🚀 Frontend Template

A scalable, production-ready frontend template built with modern tools and best practices. Designed for rapid development, maintainability, and clean architecture.

### 📁 Project Structure

```
frontend-template/
├── .github/
│   ├── workflows/      # GitHub Actions CI
├── cypress/    # e2e Cypress tests
├── public/
├── src/
│   ├── assets/
│   ├── components/     # Co-located component + tests
│   ├── pages/
│   ├── hooks/
│   ├── config/   # Config-driven data source
│   ├── utils/
│   ├── types/
│   ├── test/   # React Testing Library setup
│   ├── App.tsx
│   ├── main.tsx
│   ├── App.css
│   └── index.css
├── .env.example
├── index.html
├── tailwind.config.ts
├── cypress.config.ts
├── eslint.config.js
├── tsconfig.app.json
├── tsconfig.app.json
├── tsconfig.json # Includes path aliases (e.g., @/components)
├── vite.config.ts # Includes path aliases and Vitest config
├── package.json
└── README.md
```

### ⚙️ Tech Stack

- React + TypeScript
- Vite (fast build tool)
- Tailwind CSS (utility-first styling)
- Material UI (component library)
- Cypress (end-to-end testing)
- Vitest + React Testing Library (unit/component tests)

### ✨ Features

- Clean, scalable folder structure
- Component-based architecture with co-located tests
- Tailwind + MUI integration
- Environment configuration (dev/staging/production)
- ESLint + Prettier setup
- CI-ready structure with GitHub Actions
- Cypress for E2E tests
- Vitest + React Testing Library for component/unit tests
- Path aliases (`@/components`, `@/pages`, etc.)

### 📦 Use Cases

- SaaS frontends
- Dashboards
- Portfolio projects
- Production-ready UI systems
- Config-driven apps (no API required)

### 🚀 Scripts

```json
{
  "scripts": {
    "dev": "vite --mode development",
    "staging": "vite --mode staging",
    "build": "tsc -b && vite build --mode production",
    "preview": "vite preview",
    "lint": "eslint .",
    "test": "vitest",
    "test:run": "vitest run",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}
```

### 🚀 Getting Started

```bash
npm install
npm run dev
```

### 🧪 Testing

Unit/Component tests: run with Vitest + React Testing Library

```bash
npm run test:run
```

End-to-end tests: run with Cypress

```bash
npm run cypress:run
```

### 🚀 Deployment (Optional)

This template does not include active Continuous Deployment (CD) by default.

Recommended approach:

- Use platforms like Vercel or Netlify
- Configure deployment per project
- Map branches:
  - development → staging
  - main → production

CI (lint, build, test) is included and should pass before deployment.

### 💡 Notes

- Use aliases like @/components to simplify imports.
- Environment files .env.development, .env.staging, .env.production control different builds.
- CI ensures linting, build and all tests pass before merging to development or main.
- This project uses a committed `package-lock.json` to ensure consistent installs across environments.
