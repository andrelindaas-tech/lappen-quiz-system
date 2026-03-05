---
name: Visual Design Protocol
description: Guidelines and rules for enforcing premium visual design, modern aesthetics, and UI/UX best practices in the application.
---

# Visual Design Protocol

This skill ensures that any visual design changes or implementations in the Lappen Quiz System adhere to premium, modern web design standards.

## Core Principles

1. **Antigravity Theme (Deep Dark Mode):** 
   - **Backgrounds:** Use deep, almost black backgrounds (e.g., `#0a0a0a` or `#111111`) for the main canvas to create a sleek, immersive void.
   - **Surfaces/Cards:** Use slightly lighter, muted dark tones (e.g., `#16181c`, `#1e1e24`) for cards and panels.
   - **Borders:** Implement extremely subtle, highly transparent borders (e.g., `1px solid rgba(255, 255, 255, 0.05)`) to define geometry without harsh lines.
   - **Accents & Glowing Text:** Use vivid, cool-toned gradients (e.g., a blue-to-teal gradient like `linear-gradient(to right, #3b82f6, #14b8a6)`) for primary brand elements or clipped text to produce a subtle glowing effect.
2. **Typography & Contrast:** Use crisp, modern sans-serif fonts (like Inter, Roboto, or system-ui). 
   - **Primary Text:** High-contrast white (`#ffffff` or `rgba(255,255,255,0.9)`).
   - **Secondary Text:** Soft, muted grays (`#94a3b8` or `rgba(255,255,255,0.6)`) to establish hierarchy and prevent visual clutter.
3. **Dynamic Interactions:** Implement smooth hover effects, micro-animations, and interactive states to make the application feel responsive and alive. Wait for elements to finish animations before unmounting when appropriate.
4. **Depth & Space:** Embrace generous negative space (wide paddings and margins). Use very soft, dark drop shadows or colorful, diffused ambient glows for active elements, making them feel like they are floating.

## Implementation Workflow

When making changes to CSS files (like `fokus.css` or `index.css`) or inline styles:
- Start by understanding the existing design system context (colors, existing variables).
- Maintain consistency. Ensure all components use predefined CSS variables/tokens rather than ad-hoc styling.
- Design for an experience that doesn't just work, but "wows" the user with its polished feeling.
- Avoid placeholder designs. Always aim for a production-ready look.

## Verification

Before finalizing a visual design task:
- [ ] Check if the color contrast is accessible.
- [ ] Ensure buttons and clickable items have clear hover/active states.
- [ ] Confirm layout spacing is even, and the interface doesn't feel cluttered.
- [ ] Check if the change feels like a premium app experience, not just a standard web page.
