# ShopSphere - Modern E-commerce Frontend


A feature-rich, performant, and fully responsive e-commerce front-end built with a modern technology stack. This project showcases a seamless user experience for browsing, filtering, searching, and managing products in a shopping cart.

**Live Demo:** [**https://shopsphere-t4rg.vercel.app/**](https://shopsphere-t4rg.vercel.app/)

---

## 🚀 Key Features

-   **Dynamic Product Catalog:** Fetches and displays products from a live API with pagination.
-   **Advanced Filtering & Sorting:**
    -   Filter products by category.
    -   Sort products by price (Low to High & High to Low).
-   **Real-time Search:** Instantly search for products across the entire catalog.
-   **Interactive Shopping Cart:** Add, remove, and manage product quantities with state managed by Redux.
-   **Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from small phones to large desktops.
-   **Client-Side Routing:** Fast and smooth navigation between pages, powered by Next.js.
-   **Modal System:** Clean and reusable modal components for filters and other interactions.
-   **Loading & Error States:** Provides clear user feedback during API requests and handles potential errors gracefully.

---

## 🛠️ Technology Stack

This project leverages a modern, powerful stack for a high-quality development and user experience:

-   **Framework:** [**Next.js**](https://nextjs.org/) (with React 18)
-   **Language:** [**TypeScript**](https://www.typescriptlang.org/)
-   **State Management:** [**Redux Toolkit**](https://redux-toolkit.js.org/)
-   **Styling:** [**Tailwind CSS**](https://tailwindcss.com/)
-   **API:** [**DummyJSON**](https://dummyjson.com/) for product data.
-   **Icons:** [**React Icons**](https://react-icons.github.io/react-icons/)
-   **Deployment:** [**Vercel**](https://vercel.com/)

---

## 🧠 Core Concepts & Challenges

This project was an opportunity to implement and solve common challenges in front-end development.

### 1. Centralized State Management with Redux Toolkit

Managing state for the shopping cart, product filters, and search functionality required a robust solution. Redux Toolkit was chosen for its simplicity and scalability.

-   **Slices:** State is organized into logical slices (`cartSlice`, `categorySlice`, `priceSlice`, `searchSlice`), making it easy to manage and debug.
-   **Selectors:** Components use `useSelector` to efficiently access the necessary pieces of state, triggering re-renders only when relevant data changes.
-   **Actions & Reducers:** User interactions dispatch actions that are handled by reducers to update the state immutably.

## ⚙️ Getting Started

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

---

## 📂 Project Structure

The project follows a standard Next.js structure, organized for clarity and scalability.

├── components/ # Reusable React components (ProductCard, Modals, etc.)
├── pages/ # Next.js pages and API routes
│ ├── _app.tsx # Global App component
│ ├── index.tsx # Home page
│ ├── product/
│ │ └── [id].tsx # Dynamic product detail page
│ └── ...
├── public/ # Static assets (images, fonts)
├── store/ # Redux Toolkit store configuration
│ ├── cart/
│ │ └── cartSlice.ts # Slice for the shopping cart
│ ├── categories/
│ │ └── categorySlice.ts
│ └── index.ts # Root store and reducer
├── styles/ # Global styles
├── interface.ts # TypeScript interfaces and types
