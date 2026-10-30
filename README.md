# Event Management System

![CI Pipeline](https://github.com/24it022-kalpesh/AWDF_PRA_6/actions/workflows/ci.yml/badge.svg)

A full-stack web application developed as part of **Advanced Web Development Frameworks (ITUE301)**. The project covers React component architecture, RESTful API development, MongoDB integration, authentication, performance optimization, asynchronous processing, containerization using Docker, CI/CD pipeline automation with GitHub Actions, and external AI service integration.

## Project Overview

The Event Management System provides a platform to manage events and tasks, organize information, and allow users to interact with listings. The application follows a full-stack architecture with React on the frontend, Node.js and Express on the backend, and MongoDB as the database.

The project is developed incrementally across 13 weeks of practical work, with each week introducing and integrating new web development concepts.

## Objectives

- Build a responsive and component-based React frontend.
- Implement RESTful APIs using Node.js and Express.
- Store and manage event information using MongoDB and Mongoose.
- Integrate the frontend and backend through HTTP APIs.
- Implement authentication and middleware pipeline with JWT.
- Optimize frontend rendering and database queries with lazy loading and indexing.
- Explore in-memory caching and event-driven asynchronous processing.
- Containerize the application using Docker and Docker Compose.
- Automate testing with Continuous Integration (CI) using GitHub Actions.
- Securely integrate external AI services (OpenAI API) with responsible AI practices.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| React Router | Client-side routing |
| Node.js | Backend JavaScript runtime |
| Express.js | REST API and middleware |
| MongoDB | Database for event and task information |
| Mongoose | MongoDB schema design and data modeling |
| JWT / Authentication | User authentication and route protection |
| Node.js Events / Async | Event-driven processing and event listeners |
| Docker | Application containerization |
| Docker Compose | Multi-container orchestration |
| Jest & Supertest | Automated API testing |
| GitHub Actions | Automated CI/CD continuous integration pipeline |
| OpenAI API (SDK) | AI-assisted task/event description generation |
| Git and GitHub | Version control and repository hosting |

## Main Features

- Event and task listing, creation, and detail views.
- Create, view, update, and delete events/tasks with validation.
- User authentication with JWT and protected endpoints.
- In-memory caching and optimized MongoDB query execution.
- Performance optimization with React code-splitting (`React.lazy` and `Suspense`).
- Containerized frontend, backend, and database orchestration via Docker Compose.
- **CI/CD Pipeline:** Automated build and Jest test execution on every push to `main` using GitHub Actions.
- **AI-Powered Description Generator:** Generates concise task descriptions using OpenAI `gpt-4o-mini`, with data minimization, 10-second timeout, graceful degradation fallback, 1-minute rate limiting, and an AI disclaimer.

## Project Structure

```text
PRA_6/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI pipeline
├── backend/
│   ├── middleware/
│   │   ├── authMiddleware.js    # JWT authentication middleware
│   │   ├── errorHandler.js      # Global error handler
│   │   ├── logger.js            # Request logging middleware
│   │   └── validateTask.js      # Input validation
│   ├── models/
│   │   ├── Event.js             # Mongoose event model
│   │   └── User.js              # Mongoose user model
│   ├── routes/
│   │   ├── ai.js                # OpenAI integration route with rate limit
│   │   ├── authRoutes.js        # Authentication endpoints
│   │   ├── eventRoutes.js       # Event CRUD endpoints
│   │   └── taskRoutes.js        # Task CRUD endpoints
│   ├── tests/
│   │   └── api.test.js          # Jest and Supertest integration tests
│   ├── .env.example             # Example environment variables
│   ├── cache.js                 # In-memory caching setup
│   ├── Dockerfile               # Backend Dockerfile
│   ├── package.json             # Backend dependencies & test scripts
│   └── server.js                # Express app entry & export for tests
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AIDescriptionField.jsx # AI generator with loading & disclaimer
│   │   │   ├── EventCard.jsx
│   │   │   ├── EventForm.jsx    # Form integrated with AIDescriptionField
│   │   │   ├── TaskForm.jsx     # Task form with AIDescriptionField
│   │   │   └── ...
│   │   ├── pages/
│   │   ├── App.jsx              # Main React component
│   │   └── index.css            # Styling including AI UI components
│   ├── Dockerfile               # Multi-stage frontend Dockerfile
│   └── package.json             # Frontend dependencies
├── docker-compose.yml           # Orchestration for frontend, backend, mongodb
├── .gitignore                   # Excludes .env, node_modules, etc.
└── README.md
```

## Weekly Practical Implementation

### Week 1: Introduction to React and Component Architecture — CO1
- Set up the React development environment.
- Understand JSX and functional components.
- Build reusable components for cards, headers, navigation, and details.
- Organize the frontend using a component-based architecture.

### Week 2: State Management and Routing in React — CO1
- Manage event data and UI state using React hooks (`useState`, `useEffect`).
- Implement client-side routing using React Router.
- Create routes for listing, details, and creation pages.

### Week 3: API Integration and Data Rendering in React — CO1
- Fetch event data from backend APIs using `fetch`/`axios`.
- Render event lists dynamically with loading states and error handling.
- Connect forms to API endpoints.

### Week 4: Building a RESTful API with Node.js and Express — CO2
- Set up Node.js and Express server.
- Implement REST endpoints for CRUD operations.
- Handle HTTP status codes, request bodies, and route errors.

### Week 5: MongoDB Integration and Schema Design with Mongoose — CO2, CO3
- Connect Express to MongoDB via Mongoose.
- Design schemas with validation for event documents.
- Implement database persistence across CRUD operations.

### Week 6: Full Stack Integration — React + Node + MongoDB — CO1, CO2
- Connect the React frontend directly with the Express API.
- Ensure end-to-end data flow and persistent storage.

### Week 7: Authentication and Middleware Pipeline — CO2, CO6
- Create modular middleware for logging, request validation, and error handling.
- Implement user registration, login, and JWT-based authentication.
- Protect sensitive endpoints using JWT verification.

### Week 8: Performance Optimization and Lazy Loading in React — CO1
- Implement code-splitting with `React.lazy` and `Suspense`.
- Prevent unnecessary re-renders and reduce initial bundle size.

### Week 9: In-Memory Caching and Query Optimization — CO2, CO4
- Integrate in-memory caching (`node-cache`) for frequently requested data.
- Optimize MongoDB queries with indexing and lean projections.

### Week 10: Asynchronous Processing with Event-Driven Architecture — CO4
- Use Node.js `EventEmitter` to decouple non-blocking tasks.
- Register event listeners for notifications and background logging.

### Week 11: Containerization with Docker and Docker Compose — CO5
- Write Dockerfiles for the React frontend and Node.js backend.
- Define multi-container services in `docker-compose.yml` (frontend, backend, mongodb).
- Configure internal Docker networking and persistent database volumes.

### Week 12: CI/CD Pipeline with GitHub Actions — CO5
- Configure a GitHub Actions workflow in `.github/workflows/ci.yml`.
- Make Express testable by guarding `app.listen()` and `mongoose.connect()` with `if (require.main === module)` and exporting `module.exports = app`.
- Configure automated tests with Jest and Supertest (`tests/api.test.js`).
- Verify automated pipeline trigger on pushes to `main`.
- Diagnose pipeline failures with deliberately broken assertions and restore green status.
- Add workflow status badge to `README.md`.

### Week 13: AI API Integration into a Web Application — CO6
- Integrate the OpenAI API using the official `openai` SDK (`gpt-4o-mini`).
- Store `OPENAI_API_KEY` securely in backend `.env` (gitignored) and inject into Docker containers via `env_file`.
- Apply data minimization: send only task titles (trimmed to 150 characters).
- Implement in-memory rate limiting (1 request per task title/minute) returning HTTP 429.
- Implement graceful degradation with 10-second timeouts: fallback safely to manual entry when AI calls fail.
- Build `AIDescriptionField.jsx` with loading feedback, interactive generation, editable suggestions, and AI-generated content disclaimers.

## Installation and Setup

### Prerequisites

- Node.js (v18+) and npm
- Docker Desktop with Docker Compose
- Git
- OpenAI API Key (for Practical 13 AI feature)

### Option 1: Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/24it022-kalpesh/AWDF_PRA_6.git
   cd AWDF_PRA_6
   ```

2. **Configure environment:**
   Create `backend/.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/management_system_db
   JWT_SECRET=your_jwt_secret
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Install and run backend:**
   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Install and run frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

5. **Run tests:**
   ```bash
   # From root:
   npm test

   # Or inside backend/:
   cd backend
   npm test
   ```

### Option 2: Run with Docker Compose

1. **Start all services:**
   ```bash
   docker compose up --build -d
   ```

2. **Access services:**
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend API:** [http://localhost:5000](http://localhost:5000)
   - **MongoDB:** `localhost:27018`

3. **Stop services:**
   ```bash
   docker compose down
   ```

## Learning Outcomes

Upon completion, the project demonstrates proficiency in:

- Developing responsive, component-based React user interfaces.
- Designing and implementing secure RESTful APIs with Node.js and Express.
- Data modeling and persistence with MongoDB and Mongoose.
- Middleware architectures, JWT security, and asynchronous event processing.
- Containerization and microservice orchestration with Docker Compose.
- Automated testing and CI/CD pipelines with GitHub Actions.
- Responsible, secure integration of external AI APIs with graceful degradation.

## Course Information

- **Course:** Advanced Web Development Frameworks
- **Course Code:** ITUE301
- **Project:** Event & Task Management System
- **Practical Coverage:** Weeks 1–13
- **Repository:** https://github.com/24it022-kalpesh/AWDF_PRA_6.git

## Author

- **Student Name:** Kalpesh Gausvami
- **Enrollment Number:** 24IT022
- **Department / Institution:** IT / CSPIT

## License

This project was developed for academic and educational purposes.
