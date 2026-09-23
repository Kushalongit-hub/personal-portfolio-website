# Mobile Layout Implementation Plan

## Goal
Make the portfolio fully responsive using Tailwind `md:` breakpoints, keeping one codebase.

## Changes

### Hero
- Convert nav to `flex-col md:flex-row` with wrapped items on mobile.
- Keep the existing 2-column grid; it already stacks on mobile.
- Ensure terminal and BlackHoleVideo stack below the bio on small screens.

### Projects
- Keep the monitor-frame layout for `md:` and up.
- Keep the existing mobile grid inside `md:hidden` and ensure cards are full-width.
- Remove any fixed heights that break small screens.

### Research
- Add `bg-blueprint-grid` to the view wrapper.
- Keep single-column centered card layout; no desktop-only assumptions.

### Contact
- Keep fixed full-black overlay.
- Ensure grid and terminal are padded for mobile.

### Global
- Preserve shader background behavior on all screen sizes.
- Verify text remains readable and touch targets are large enough.

## Validation
- Run `npm run build` to confirm no TypeScript errors.
- Review generated pages at common mobile widths.
