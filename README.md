# 📅 Event & Task Management System (MERN Stack) — Practical 6 & 7

A complete, modular full-stack application built with **React (Vite), Node.js, Express, MongoDB (Mongoose), and JWT Authentication** for the **Advanced Web Development Frameworks (AWDF)** practical syllabus.

> **✅ Status: Practical 6 & 7 Performed & Verified**  
> - **Practical 6:** Full-stack CRUD operations and MERN architecture  
> - **Practical 7:** JWT Authentication (`bcryptjs`, `jsonwebtoken`), Protected Routes (`authMiddleware`), Input Validation Middleware (`validateTask`), User Model & `/api/auth/me`

---

## 📑 Table of Contents
- [Practical 7 Performed Overview](#-practical-7-performed-overview)
- [Practical 6 Performed Overview](#-practical-6-performed-overview)
- [Tech Stack](#-tech-stack)
- [Project Architecture & Auth Pipeline](#-project-architecture--auth-pipeline)
- [Folder Structure](#-folder-structure)
- [Practical Syllabus Mapping](#-practical-syllabus-mapping)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
- [API Endpoints Reference (Including Auth)](#-api-endpoints-reference)
- [Testing Authentication Endpoints](#-testing-authentication-endpoints)
- [License](#-license)

---

## 🔐 Practical 7 Performed Overview

In **Practical 7**, security, user management, and middleware layers were added:

1. **User Model & Schema ([User.js](backend/models/User.js))**:
   - `email` (String, required, unique, trimmed)
   - `password` (String, hashed with `bcryptjs` salt rounds = 10)
   - `timestamps` (`createdAt`, `updatedAt`)

2. **Authentication Routes ([authRoutes.js](backend/routes/authRoutes.js))**:
   - `POST /api/auth/register` — Validates input, hashes password, saves user
   - `POST /api/auth/login` — Verifies password hash, issues signed JWT token (expires in 1h)
   - `GET /api/auth/me` — Protected endpoint returning logged-in user profile (excluding password)

3. **Authentication Middleware ([authMiddleware.js](backend/middleware/authMiddleware.js))**:
   - Extracts `Bearer <token>` from the `Authorization` header
   - Verifies JWT using `process.env.JWT_SECRET`
   - Attaches decoded user `{ id: user._id }` to `req.user`
   - Rejects unauthorized or malformed requests with `401 Unauthorized`

4. **Validation Middleware ([validateTask.js](backend/middleware/validateTask.js))**:
   - Validates that mandatory fields (`title`) are non-empty before processing requests

5. **Protected Route Pipeline**:
   ```
   Client Request ──> authMiddleware (JWT Check) ──> validateTask ──> Controller/DB
   ```

---

## 📅 Practical 6 Performed Overview

In **Practical 6**, the generic full-stack template was adapted into an **Event Management System**:
- **Backend Model ([Event.js](backend/models/Event.js))**: `title`, `description`, `eventDate`, `location`, `category`, `status`, `createdAt`
- **Backend REST API ([eventRoutes.js](backend/routes/eventRoutes.js))**: Full CRUD operations
- **Frontend Components**: Reusable components ([EventCard.jsx](frontend/src/components/EventCard.jsx), [EventForm.jsx](frontend/src/components/EventForm.jsx)), multi-page routing ([Events.jsx](frontend/src/pages/Events.jsx), [EventDetails.jsx](frontend/src/pages/EventDetails.jsx), [ManageEvents.jsx](frontend/src/pages/admin/ManageEvents.jsx), [AdminDashboard.jsx](frontend/src/pages/admin/AdminDashboard.jsx))

---

## 🛠 Tech Stack

### Frontend
- **React (Vite)** — Fast functional UI components and state management
- **React Router DOM (v6)** — Client-side multi-page routing (`/`, `/events`, `/events/:id`, `/about`, `/contact`, `/admin`, `/admin/events`)
- **Fetch API** — Native asynchronous HTTP client
- **Pure CSS** — Responsive, modern styling with variables and flexbox/grid

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — Lightweight REST API framework
- **MongoDB & Mongoose** — Document database with ODM validation
- **bcryptjs** — Password hashing
- **jsonwebtoken (JWT)** — Token-based stateless authentication
- **dotenv** — Environment configuration
- **cors** — Cross-Origin Resource Sharing middleware

---

## 🏛 Project Architecture & Auth Pipeline

```
┌────────────────────────────────────────────────────────┐
│               1. Presentation Layer                    │
│             React Frontend (Vite)                      │
│             http://localhost:5173                      │
│    - User Interface, Pages & Admin Dashboard           │
│    - State Management (useState, useEffect)            │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ HTTP Requests with Optional Header:
                           │ Authorization: Bearer <JWT_TOKEN>
                           ▼
┌────────────────────────────────────────────────────────┐
│                2. Application Layer                    │
│               Express.js REST API                      │
│             http://localhost:5000                      │
│    ├── logger.js / cors()                              │
│    ├── /api/auth (register, login, me)                 │
│    ├── authMiddleware (JWT verification)               │
│    ├── validateTask (body validation)                  │
│    └── /api/events & /api/tasks (Protected CRUD)       │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ Queries & Mutations (Mongoose ODM)
                           ▼
┌────────────────────────────────────────────────────────┐
│                  3. Data Layer                         │
│                MongoDB Database                        │
│             mongodb://127.0.0.1:27017                  │
│    - Collections: users, events                        │
└────────────────────────────────────────────────────────┘
```

---

## 📂 Folder Structure

```
PRA_6/
├── backend/
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT Bearer Token validation
│   │   ├── errorHandler.js       # Global JSON error handler
│   │   ├── logger.js             # HTTP request logger
│   │   └── validateTask.js       # Payload validation middleware
│   ├── models/
│   │   ├── Event.js              # Event schema
│   │   └── User.js               # User schema (email, password)
│   ├── routes/
│   │   ├── authRoutes.js         # Auth routes (/register, /login, /me)
│   │   ├── eventRoutes.js        # Event CRUD routes
│   │   └── taskRoutes.js         # Task CRUD routes with auth
│   ├── .env                      # PORT, MONGO_URI, JWT_SECRET
│   ├── .env.example              # Example environment template
│   ├── .gitignore                # Git ignore rules
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Express server & DB connection
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── EventCard.jsx
│   │   │   ├── EventForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   └── ManageEvents.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── EventDetails.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Home.jsx
│   │   │   └── NotFound.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🎓 Practical Syllabus Mapping

| Practical | Covered Concepts in this Project |
| :--- | :--- |
| **Practical 1** | React with Vite, Functional Components, Component Composition, Props, Reusable UI |
| **Practical 2** | React Router DOM (`BrowserRouter`, `Routes`, `Route`, `NavLink`), `useState` hook, controlled forms |
| **Practical 3** | `useEffect` hook, Fetch API data loading, managing `loading`/`error` states |
| **Practical 4** | Express server setup, RESTful CRUD endpoints, custom logger & error handler middlewares |
| **Practical 5** | MongoDB connection with Mongoose, Schema definition, validation, database CRUD queries |
| **Practical 6** | Full-stack MERN integration with CORS and database persistence |
| **Practical 7** | **Authentication & Security**: Password hashing (`bcryptjs`), JWT generation & verification (`jsonwebtoken`), protected routes with `authMiddleware`, input validation with `validateTask`, and `/api/auth/me` |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v18+)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on `mongodb://127.0.0.1:27017`

---

### 1. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Ensure `backend/.env` contains:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/management_system_db
JWT_SECRET=my_super_secret_key_12345
```

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173).

---

## 📡 API Endpoints Reference

### 🔐 Authentication Endpoints (`/api/auth`)

| HTTP Method | Route | Description | Headers / Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register new user with email and password | None |
| **POST** | `/api/auth/login` | Login and receive JWT access token | None |
| **GET** | `/api/auth/me` | Retrieve authenticated user profile | `Authorization: Bearer <token>` |

### 📅 Events Endpoints (`/api/events`)

| HTTP Method | Route | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/events` | Retrieve all events | No |
| **GET** | `/api/events/:id` | Retrieve single event by ID | No |
| **POST** | `/api/events` | Create a new event | **Yes** (`Bearer <token>`) |
| **PUT** | `/api/events/:id` | Update event by ID | **Yes** (`Bearer <token>`) |
| **DELETE** | `/api/events/:id` | Delete event by ID | **Yes** (`Bearer <token>`) |

---

## 🧪 Testing Authentication Endpoints

### 1. Register a User
- **POST** `http://localhost:5000/api/auth/register`
- **Body (JSON)**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### 2. Login & Obtain JWT Token
- **POST** `http://localhost:5000/api/auth/login`
- **Body (JSON)**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### 3. Access Protected Profile (`/me`)
- **GET** `http://localhost:5000/api/auth/me`
- **Header**: `Authorization: Bearer <YOUR_JWT_TOKEN>`

---

## 📄 License
This project is open-source and intended for educational purposes.
