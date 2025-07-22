# 🧠 Next.js Learning Project

This is a learning project built with **Next.js 13+ (App Router)** to explore and demonstrate core concepts including routing, data fetching, layouts, server and client components, suspense, and more.

---

## 📂 Project Structure & Features

### 🧭 Navigation
- A `Header` component is included and reused in the layout.
- Navigation across:
  - `/` - Home
  - `/posts` - Posts list
  - `/articles` - Articles section

### 📄 Pages and Components

#### `/posts`
- **Server Component**
- Fetches post data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Uses `fetch()` with `revalidate: 10` to demonstrate Incremental Static Regeneration (ISR)
- Each post is linked to `/posts/[id]`

#### `/posts/[id]`
- Displays post details based on dynamic `postId`
- Includes:
  - 2-second artificial delay using `setTimeout` to simulate loading
  - Suspense fallback UI (`LoadingPostDetails`)
  - `revalidate: 10` for fresh data every 10 seconds

#### `/articles`
- Articles page with nested routing
- Includes:
  - `articles/page.jsx` – main articles page
  - `articles/features/page.jsx` – features section
  - `articles/[title]/page.jsx` – dynamic route for article titles

#### `/components/Todo.jsx`
- **Client Component** using `"use client"`
- Demonstrates:
  - `useEffect()` for fetching API data
  - `useState()` for managing fetched data
  - Error handling for failed requests

---

## 🧩 Layout & Styling

- Shared `layout.jsx` for articles section
- Basic inline styles used for all elements
- Spinner implemented via inline styles and `@keyframes` in JSX

---

## 🧪 Concepts Covered

✅ File-based routing  
✅ Dynamic routes  
✅ Nested layouts  
✅ Server components  
✅ Client components (`use client`)  
✅ Data fetching using `fetch()`  
✅ ISR with `revalidate`  
✅ Suspense with fallback  
✅ Component composition  
✅ Link-based navigation  
✅ Loading UI  
✅ Inline styling  
✅ Console debugging  

---

## 🚀 How to Run

1. Clone the repo  
2. Install dependencies:
   ```bash
   npm install
