# Presence App

This is a [Next.js](https://nextjs.org) project that allows you to toggle the presence of users. The project is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Further Development Ideas

Here are some ideas for extending the functionality and addressing potential challenges:


#### 1. WebSocket Integration

- Why: Synchronising multiple tablets or devices in real-time to ensure a consistent view of the user presence list.

- How:

	- Use a WebSocket server (e.g., Socket.IO or Next.js WebSocket support).

	- Broadcast updates when a user toggles their presence.

	- All connected devices would instantly reflect these changes.

#### 2. Privacy Concerns

- Problem: Displaying full names in a public space may expose sensitive information.

- Solution:

	- Implement a system where users identify themselves by their date of birth and the first letter of their name.

	- Store and display anonymised identifiers (e.g., A-0101 for Alice, born January 1st).

	- Ensure no identifiable information is exposed publicly.

#### 3. Database Integration

- Why: Relying on a database enables leveraging Next.js server components and improves scalability.

- How:

	- Integrate a database (e.g., PostgreSQL, MongoDB, or Supabase).

	- Migrate the mock data to a persistent database layer.

	- Use server components to fetch and manage user presence data, reducing the need for client-side operations.

#### 4. Filtering and Pagination

- Why: As the user list grows, it becomes essential to manage the display effectively.

- How:

	- Add a search bar to filter users by name or identifier.

	- Implement pagination or infinite scrolling for long lists.

## Directory Structure

```
.
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── UserCard.tsx
│   ├── fonts/
│   │   ├── GeistVF.woff
│   │   └── GeistMonoVF.woff
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── toggle-presence/
│   │   └── page.tsx
│   └── users/
│       └── page.tsx
├── context/
│   ├── UserContext.tsx
│   └── userData.ts
├── public/
│   └── ...
├── types/
│   └── user.ts
├── .env
├── .gitignore
├── .prettierrc
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```