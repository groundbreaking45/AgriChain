# **App Name**: AgriChain

## Core Features:

- Smart Contract Escrow: Utilize a PaymentEscrow contract to hold buyer funds and release them to the farmer upon delivery confirmation or after a timeout, supporting both native tokens and ERC20 tokens.
- AI-Based Credit Scoring: Implement a Cloud Function (scoreCredit) that computes a credit score (300–900) based on yield history, transaction history, and consistency, with a baseline weighted score and categorization (A/B/C buckets) for transparency; the score uses the onTimeRate and salesCount of a user as tool.
- Tokenized Sustainability Rewards: Implement an ERC20 token (AGREEN) contract, mintable by a co-op admin, to reward farmers for logging sustainable actions (e.g., drip irrigation, organic certification).
- Mobile-First, Low-Bandwidth UX: Prioritize fast, text-first layouts, large tap targets, skeleton loaders, image lazy loading, responsive images, offline caching via PWA service worker, route-level code splitting, and minimal JS.
- Multilingual Support (EN/HI): Implement a language switcher in the header and onboarding, ensuring all strings are in translation files (en.json and hi.json), providing at least 60 common UI keys translated.
- Secure Profile Management: Allow users to read and write their own profiles with admins able to read all profiles; restrict writes to products to the owner (farmer) and admins; and implement immutable fields validation.

## Style Guidelines:

- Primary color: Forest Green (#388E3C) to represent growth, nature, and agriculture.
- Background color: Light beige (#F5F5DC), providing a soft and natural backdrop to complement the green.
- Accent color: Earthy Orange (#D35400) to highlight key CTAs and interactive elements, offering a warm contrast.
- Body font: 'PT Sans' (sans-serif) for readability and a modern, yet warm feel; Headline font: 'Playfair' for a fashionable high-end feel.
- Code font: 'Source Code Pro' for displaying code snippets.
- Use simple, line-based icons representing crops, farming equipment, and sustainability actions.
- Employ a card-based layout with ample spacing and large tap targets, ensuring a mobile-first design with clear information hierarchy.