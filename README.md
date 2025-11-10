# E-Commerce Demo (React + Express)

This repository is a minimal e-commerce sample that matches the slide specification: users can browse products, view details, and manage a client-side shopping cart. The stack is React (frontend) and Express (backend). MongoDB is optional — the backend defaults to an in-memory JSON file for fast local testing.

Folders:
- `backend/` - Express API serving `/api/products` endpoints
- `frontend/` - React app (React Router + simple cart state)
- `architecture.md` - Technical architecture doc
- `prompts.txt` - Prompts used to generate the code/docs

Quick start (Windows PowerShell):

1) Start the backend

```powershell
cd d:/ecommerce-website_made/backend
npm install
npm run start
```

This starts the backend at http://localhost:5000

2) Start the frontend

```powershell
cd d:/ecommerce-website_made/frontend
npm install
npm run start
```

This starts the frontend at http://localhost:3000 and it will call the backend at http://localhost:5000

Notes:
- To use a real MongoDB Atlas instance, set `MONGODB_URI` in `backend/.env` and the backend will attempt to connect; otherwise it serves sample JSON data.
- The cart is client-side only (in-memory) as requested; persisting across reloads is an easy follow-up.

If you want, I can run quick checks (install & start) or add tests next. What would you like me to do now?
