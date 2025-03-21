# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. This has aleady configured some common libraries for a fixed-price project

This works well with node 20.18.3

## Main package

ESlint\
Prettier\
Husky\
React-router-dom\
Shadcn - TailwindCSS v4\
React-query\
React-hook-form\
Zod

Color name reference: https://www.color-name.com/

## Main functions:

### Components UI

**Shadcn components (atoms):** (src/components/common)

- Button
- Collapsible
- Form
- Tooltip

**Common components:** (src/components/common)

- React-hook form custom input
- Sidebar: intergrate with sidebar context (see _src/contexts/sidebar.context.tsx_ & _src/hooks/context-hooks/useSideBarContext.ts_)
- Authguard: prevent unauthorized access
- Layout components
- Forms: Login, Register, OTP, Forgot password ...

### Configuaration

- Axios
- React-query

### Context

- Auth context
- Sidebar context
