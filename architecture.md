# Technical architecture

Goal: Build a minimal E-Commerce web app that allows users to explore products, view details, and manage a shopping cart.

Overview:
- Frontend: React with React Router for navigation. Single-page app served using react-scripts in development. Cart state is client-side using React Context (keeps it simple and lightweight).
- Backend: Node.js + Express providing a small REST API: GET /api/products and GET /api/products/:id. The backend will use a sample JSON dataset by default and will optionally connect to MongoDB Atlas if a `MONGODB_URI` environment variable is provided.
- Database: MongoDB Atlas (optional). The repo is runnable without external DB for quick testing.

Data flow:
- Frontend requests product lists and details from backend endpoints.
- Cart actions are handled in the frontend (add/remove/update quantity) and not persisted by default.

Deployment notes / next steps:
- For production use, enable MongoDB persistence and add authentication; add unit tests and basic CI; enable CORS restrictions and environment-based configs.
