# E-Commerce CRUD App

A simple full-stack CRUD application for managing products, built to demonstrate
clean separation between a React (Vite) frontend and a Node/Express REST API backend.

## Tech Stack

**Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios
**Backend:** Node.js, Express.js
**Data:** In-memory data store (no database required to run)
**Tooling:** Git, nodemon

## Project Structure
```text
ecommerce-crud-app/
├── backend/                         # Node.js + Express REST API
│   ├── src/
│   │   ├── controllers/
│   │   │   └── productController.js
│   │   ├── data/
│   │   │   └── products.js          # in-memory product store and seed data
│   │   ├── middleware/
│   │   │   └── errorHandler.js      # centralized error and 404 handling
│   │   ├── routes/
│   │   │   └── productRoutes.js
│   │   └── app.js                   # Express app configuration
│   ├── server.js                    # server entry point
│   └── package.json
├── frontend/                        # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js             # configured Axios instance
│   │   ├── assets/
│   │   ├── components/              # reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/                   # route-level components
│   │   │   ├── AddProduct.jsx
│   │   │   ├── EditProduct.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ProductList.jsx
│   │   ├── App.jsx                  # route definitions
│   │   ├── index.css                # Tailwind directives
│   │   ├── main.jsx                 # app entry point
│   │   └── vite.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js               # Vite dev proxy configuration
├── package.json
├── package-lock.json
└── README.md
```


## Features

- Full CRUD on a `Product` resource (create, read, update, delete)
- REST API built with Express, following conventional status codes (200, 201, 400, 404)
- Clean separation between routes, controllers, and data layer on the backend
- Clean separation between reusable components and route-level pages on the frontend
- Centralized Axios instance with a Vite dev proxy (no hardcoded backend URLs)
- Loading and error states on every data-fetching page
- Responsive UI styled with Tailwind CSS

## API Endpoints

Base URL: `http://localhost:5000/api`

| Method | Endpoint             | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/health`             | Health check             |
| GET    | `/products`           | Get all products         |
| GET    | `/products/:id`       | Get a single product     |
| POST   | `/products`           | Create a new product     |
| PUT    | `/products/:id`       | Update an existing product |
| DELETE | `/products/:id`       | Delete a product         |

**Product shape:**

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "description": "Ergonomic wireless mouse with USB receiver",
  "price": 799,
  "category": "Electronics",
  "stock": 25,
  "imageUrl": "https://via.placeholder.com/300x300?text=Wireless+Mouse"
}
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/imSandeep-dev/ecommerce-crud-app.git
cd ecommerce-crud-app
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

PORT=5000


Start the backend in dev mode:

```bash
npm run dev
```

The API runs at `http://localhost:5000`. Confirm it's up at `/api/health`.

### 3. Set up the frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`. API calls are proxied to the backend
automatically via `vite.config.js` — no extra configuration needed.

### 4. Using the app

- View all products on the home page
- Click a product card to view full details
- Add a new product via "Add Product" in the navbar
- Edit or delete a product from its detail page

## Design Decisions

- **In-memory data store:** chosen to keep the CRUD logic and REST API easy to
  read, run, and review without database setup. The data layer is isolated in
  `server/src/data/products.js`, so swapping in a real database (e.g. MongoDB
  via Mongoose) would only touch that file and the controllers — routes and
  frontend stay unchanged.
- **Pages vs. components split (frontend):** `pages/` own routing and data
  fetching; `components/` are presentational and reusable, taking only props.
  This keeps components testable and reusable independent of any specific page.
- **Controllers vs. routes split (backend):** routes only map HTTP verb + path
  to a controller function; controllers hold the logic. Centralized
  `errorHandler` and `notFound` middleware avoid repetitive try/catch blocks.
- **Vite dev proxy:** the frontend calls a relative `/api` path instead of a
  hardcoded backend URL, so switching between local development and a deployed
  environment requires no code changes.

## Testing Performed

- Manually verified all five REST endpoints via curl/Postman (happy path and
  error cases — e.g. fetching/deleting a non-existent ID returns 404)
- Verified full CRUD flow end-to-end through the UI: list → view → add → edit
  → delete
- Verified form validation blocks submission when required fields are empty
- Verified loading and error states render correctly (tested by stopping the
  backend while the frontend was running)
- Verified responsive layout on mobile, tablet, and desktop breakpoints

## Known Limitations

- Data resets on backend restart (in-memory store, by design for this scope)
- No authentication/authorization — out of scope for this task
- No pagination — acceptable at current seed-data scale

## Possible Future Improvements

- Persist data with MongoDB/Mongoose or PostgreSQL
- Add search and category filtering on the product list
- Add pagination for larger product catalogs
- Add unit/integration tests (Jest + Supertest for backend, React Testing Library for frontend)
- Add authentication for protected create/edit/delete actions

## Status

✅ Complete — all CRUD operations implemented and tested end-to-end across frontend and backend.
