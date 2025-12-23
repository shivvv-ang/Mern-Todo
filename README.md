# 📝 Taskly – Full Stack Task Manager

A **secure, minimal, and performance-optimized full-stack task management application** built with modern best practices.

This project intentionally avoids insecure patterns (like storing access tokens in `localStorage`) and follows **production-grade authentication, routing, and optimization strategies**.

---

## 🚀 Features

- User authentication (Register / Login / Logout)
- JWT-based authentication using **httpOnly cookies**
- Protected routes using `PrivateRoute`
- Task CRUD (Create, Edit, Update Status, Delete)
- Inline task editing
- Toast notifications for user feedback
- Lazy-loaded routes with `Suspense`
- Optimized React rendering
- Clean, responsive UI

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cookie-based auth (httpOnly)
- CORS configured

---

## 🔐 Authentication & Security

### ❌ Why Access Tokens Are NOT Stored in LocalStorage

This application **does NOT store access tokens in `localStorage`**.

Storing tokens in `localStorage` can lead to:
- **XSS attacks**
- Token theft via malicious scripts
- Full account compromise

### ✅ Secure Approach Used

- Access token is stored in **httpOnly cookies**
- Cookies are **not accessible via JavaScript**
- Axios uses `withCredentials: true`
- Backend validates tokens from cookies
- Frontend stores **only non-sensitive user data** (name, email)

> ⚠️ **Note**  
> Cookie-based authentication requires proper CSRF protection in production environments.  
> This app is structured to support CSRF tokens and `SameSite` configurations.

---

## 📂 Project Structure

```
taskly/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── api/
│   │   ├── context/
│   │   └── utils/
│   ├── package.json
│   └── .env
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── middlewares/
    │   ├── models/
    │   └── utils/
    ├── package.json
    └── .env
```

---

## ⚙️ Environment Variables

### Backend `.env`

```
PORT=5000
NODE_ENV=development

MONGO_DB_CONNECTION_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskly

FRONTEND_URL=http://localhost:5173

ACCESS_TOKEN_SECRET=your_super_secret_key
ACCESS_TOKEN_EXPIRY=15m
```

### Frontend `.env`

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/taskly.git
cd taskly
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
---

## ⚡ Performance Optimizations

- `React.memo` for pure components
- `useCallback` for stable handlers
- `useMemo` for context values
- Lazy loading with `React.lazy`
- `Suspense` with global loader
- Optimized task list rendering
- Reduced unnecessary re-renders

---

## 🧪 UX Improvements

- Inline task editing
- Instant UI updates
- Loading states
- Toast feedback for actions
- Smooth auth navigation
- Proper logout & redirects

---

## 📦 API Error Handling

- Centralized Axios instance
- Automatic handling of 401 Unauthorized
- Forced logout on auth failure
- Toast-based error feedback

---