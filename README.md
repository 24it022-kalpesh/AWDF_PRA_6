# 📅 Event Management System (MERN Stack) — Practical 6 Performed

A complete, modular full-stack **Event Management System** built with **React (Vite), Node.js, Express, and MongoDB (Mongoose)** for the **Advanced Web Development Frameworks (AWDF)** practical syllabus.

> **✅ Status: Practical 6 Performed & Verified**  
> Generic *Item* entity successfully converted to the full-featured **Event Management System** with end-to-end full-stack CRUD operations.

---

## 📑 Table of Contents
- [Practical 6 Performed Overview](#-practical-6-performed-overview)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Folder Structure](#-folder-structure)
- [Practical Syllabus Mapping](#-practical-syllabus-mapping)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Backend Setup](#1-backend-setup)
  - [2. Frontend Setup](#2-frontend-setup)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Testing Endpoints with Postman / Thunder Client / PowerShell](#-testing-endpoints)
- [License](#-license)

---

## ✅ Practical 6 Performed Overview

In **Practical 6**, the generic full-stack template was successfully adapted into an **Event Management System**:

1. **Backend Model & Validation ([Event.js](backend/models/Event.js))**:
   - `title` (String, required, trimmed)
   - `description` (String)
   - `eventDate` (Date, required)
   - `location` (String, required, trimmed)
   - `category` (String, required: Technology, Cultural, Sports, Education, Workshop)
   - `status` (Enum: `Upcoming`, `Ongoing`, `Completed`, `Cancelled`)
   - `createdAt` (Date, default: Date.now)

2. **Backend REST API ([eventRoutes.js](backend/routes/eventRoutes.js))**:
   - `GET /api/events` — Retrieve all events (sorted latest first)
   - `GET /api/events/:id` — Retrieve a single event by ID
   - `POST /api/events` — Create a new event with validation
   - `PUT /api/events/:id` — Update existing event by ID
   - `DELETE /api/events/:id` — Delete event by ID

3. **Frontend Implementation & Integration**:
   - **[api.js](frontend/src/api.js)** — Centralized Fetch API client (`getEvents`, `getEventById`, `createEvent`, `updateEvent`, `deleteEvent`)
   - **[EventCard.jsx](frontend/src/components/EventCard.jsx)** — Reusable card with formatted dates, badges, and detail view link
   - **[EventForm.jsx](frontend/src/components/EventForm.jsx)** — Controlled form for creating and updating events
   - **[Events.jsx](frontend/src/pages/Events.jsx)** — Public exploration catalog with dynamic loading/error states
   - **[EventDetails.jsx](frontend/src/pages/EventDetails.jsx)** — Dynamic route (`/events/:id`) using `useParams()`
   - **[AdminDashboard.jsx](frontend/src/pages/admin/AdminDashboard.jsx)** — Aggregated metrics (Total, Upcoming, Completed) and recent event tables
   - **[ManageEvents.jsx](frontend/src/pages/admin/ManageEvents.jsx)** — Complete admin CRUD management interface

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
- **MongoDB** — Document database for data persistence
- **Mongoose** — Schema definition, validation, and database queries
- **dotenv** — Environment variable management
- **cors** — Cross-Origin Resource Sharing middleware

---

## 🏛 Project Architecture

```
┌────────────────────────────────────────────────────────┐
│               1. Presentation Layer                    │
│             React Frontend (Vite)                      │
│             http://localhost:5173                      │
│    - User Interface, Pages & Admin Dashboard           │
│    - State Management (useState, useEffect)            │
│    - Dynamic Routes (/events/:id)                      │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ HTTP JSON Requests (Fetch API)
                           │ (GET, POST, PUT, DELETE)
                           ▼
┌────────────────────────────────────────────────────────┐
│                2. Application Layer                    │
│               Express.js REST API                      │
│             http://localhost:5000                      │
│    - CORS & Logger Middleware                          │
│    - API Routes (/api/events)                          │
│    - Global Error Handling                             │
└──────────────────────────┬─────────────────────────────┘
                           │
                           │ Queries & Mutations (Mongoose ODM)
                           ▼
┌────────────────────────────────────────────────────────┐
│                  3. Data Layer                         │
│                MongoDB Database                        │
│             mongodb://127.0.0.1:27017                  │
│    - Database: management_system_db                    │
│    - Collection: events                                │
└────────────────────────────────────────────────────────┘
```

---

## 📂 Folder Structure

```
PRA_6/
├── backend/
│   ├── middleware/
│   │   ├── errorHandler.js       # Global JSON error handling middleware
│   │   └── logger.js             # HTTP request logger middleware
│   ├── models/
│   │   └── Event.js              # Mongoose schema with validations for Events
│   ├── routes/
│   │   └── eventRoutes.js        # RESTful CRUD routes (GET, POST, PUT, DELETE)
│   ├── .env                      # Local environment configuration
│   ├── .env.example              # Example environment configuration
│   ├── .gitignore                # Git ignore rules
│   ├── package.json              # Backend dependencies and scripts
│   └── server.js                 # Express server entry point & MongoDB connection
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ErrorMessage.jsx   # Error alert banner
│   │   │   ├── EventCard.jsx      # Event display card component
│   │   │   ├── EventForm.jsx      # Controlled Add/Edit form component
│   │   │   ├── Footer.jsx         # Persistent footer
│   │   │   ├── Header.jsx         # Reusable page banner
│   │   │   ├── Loading.jsx        # Loading spinner component
│   │   │   └── Navbar.jsx         # Top navigation bar
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx  # Admin stats & recent events
│   │   │   │   └── ManageEvents.jsx    # Full CRUD management panel
│   │   │   ├── About.jsx          # About page
│   │   │   ├── Contact.jsx        # Controlled input demo page
│   │   │   ├── EventDetails.jsx   # Individual event details page
│   │   │   ├── Events.jsx         # Public events catalog
│   │   │   ├── Home.jsx           # Landing / Hero page
│   │   │   └── NotFound.jsx       # 404 fallback page
│   │   ├── api.js                 # Centralized Fetch API functions for Events
│   │   ├── App.jsx                # React Router setup
│   │   ├── index.css              # Global styles
│   │   └── main.jsx               # React DOM root mounting
│   ├── index.html                 # Main HTML file
│   ├── package.json               # Frontend dependencies and scripts
│   └── vite.config.js             # Vite configuration
│
└── README.md                      # Documentation
```

---

## 🎓 Practical Syllabus Mapping

| Practical | Covered Concepts in this Project |
| :--- | :--- |
| **Practical 1** | React with Vite, Functional Components, Component Composition, Props, Reusable UI (`Header`, `EventCard`, `Loading`, `ErrorMessage`, `Footer`) |
| **Practical 2** | React Router DOM (`BrowserRouter`, `Routes`, `Route`, `NavLink`), multi-page navigation, `useState` hook, controlled inputs (`Contact.jsx`, `EventForm.jsx`) |
| **Practical 3** | `useEffect` hook, Fetch API data loading, managing `loading`, `error`, and `success` states, dynamic array rendering |
| **Practical 4** | Express server setup, RESTful CRUD endpoints (`GET`, `POST`, `PUT`, `DELETE`), Request Logging middleware, Global Error Handling middleware, proper HTTP status codes (200, 201, 400, 404, 500) |
| **Practical 5** | MongoDB connection with Mongoose, Schema definition, validation (`required: true`, enums), default values, database queries (`find`, `findById`, `create`, `findByIdAndUpdate`, `findByIdAndDelete`) |
| **Practical 6** | **Full-stack integration with CORS**, connecting React to Express and Express to MongoDB, state updates after API calls, data persistence across browser refreshes |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v18 or higher recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) installed and running locally on `mongodb://127.0.0.1:27017`

---

### 1. Backend Setup

1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure your `.env` file exists:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/management_system_db
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   *The server will start at `http://localhost:5000` with auto-reload enabled.*

---

### 2. Frontend Setup

1. Open a second terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📡 API Endpoints Reference

Base URL: `http://localhost:5000/api/events`

| HTTP Method | Route | Description | Expected Status Code |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/events` | Retrieve all events (sorted newest first) | `200 OK` |
| **GET** | `/api/events/:id` | Retrieve a single event by MongoDB ID | `200 OK` / `404 Not Found` |
| **POST** | `/api/events` | Create a new event | `201 Created` / `400 Bad Request` |
| **PUT** | `/api/events/:id` | Update an existing event by ID | `200 OK` / `404 Not Found` |
| **DELETE** | `/api/events/:id` | Delete an event by ID | `200 OK` / `404 Not Found` |

### Sample JSON Request Body (POST / PUT):
```json
{
  "title": "Tech Symposium 2026",
  "description": "Annual student technical symposium and coding contest",
  "eventDate": "2026-09-15",
  "location": "Auditorium A",
  "category": "Technology",
  "status": "Upcoming"
}
```

---

## 🧪 Testing Endpoints

You can test all endpoints using **Postman**, **Thunder Client**, or PowerShell:

1. **Create Event (`POST`):**
   - URL: `http://localhost:5000/api/events`
   - Method: `POST`
   - Headers: `Content-Type: application/json`
   - Body:
     ```json
     {
       "title": "Cultural Night",
       "description": "Annual university musical and dance celebration",
       "eventDate": "2026-10-10",
       "location": "Main Ground",
       "category": "Cultural",
       "status": "Upcoming"
     }
     ```
   - Status: `201 Created`

2. **Get All Events (`GET`):**
   - URL: `http://localhost:5000/api/events`
   - Method: `GET`
   - Status: `200 OK`

3. **Update Event (`PUT`):**
   - URL: `http://localhost:5000/api/events/<EVENT_ID>`
   - Method: `PUT`
   - Body: `{"status": "Completed"}`
   - Status: `200 OK`

4. **Delete Event (`DELETE`):**
   - URL: `http://localhost:5000/api/events/<EVENT_ID>`
   - Method: `DELETE`
   - Status: `200 OK`

---

## 📄 License
This project is open-source and intended for educational purposes.
