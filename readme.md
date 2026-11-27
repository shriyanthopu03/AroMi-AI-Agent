# 🌿 AroMi-AI Agent – Adaptive Health & Wellness Coach

An intelligent, AI-powered health and wellness coaching platform that provides personalized health guidance, nutrition analysis, prescription understanding, and context-aware wellness recommendations.

## ✨ Features

### 🤖 AI Health Coach
- Personalized conversational health and wellness guidance.
- Context-aware recommendations based on user goals and habits.
- AI-powered assistance for health and lifestyle questions.

### 📸 Image-Based Calorie Analysis
- Upload food images for calorie estimation.
- Analyze nutritional information using AI vision capabilities.

### 📄 Prescription Analysis
- Upload prescriptions for medicine and dosage extraction.
- Understand prescription details in simple language.

### ❓ AI Doubt Assistance
- Get assistance with health, fitness, nutrition, and lifestyle questions.
- AI-generated responses with contextual understanding.

### 🧠 Personalized Recommendations
- Adaptive recommendations based on user preferences.
- Wellness guidance for diet, physical activity, and lifestyle.

### 🛍️ Smart Health Shopping
- Personalized wellness product recommendations.
- Suggestions based on health goals and preferences.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React, Vite |
| Styling | Tailwind CSS |
| Backend | Python, FastAPI, Uvicorn |
| Database | MongoDB |
| AI Integration | Groq API |
| API Communication | REST APIs |
| Deployment | Vercel Services |

## 🤖 AI Models

| Capability | Model |
|---|---|
| Text generation (chat, recommendations, and doubt assistance) | `openai/gpt-oss-20b` |
| Image recognition and prescription image reading | `meta-llama/llama-4-scout-17b-16e-instruct` |

Prescription text reading is handled by the vision model; the application does not use a separate OCR model or OCR library.

## 🏗️ System Architecture

```text
             React + Tailwind CSS
                 (frontend)
                   |
                 /api/*
                   v
             FastAPI (backend)
              /           \
         MongoDB         Groq API
```

## 📂 Project Structure

```text
aromi-ai-agent/
│
├── frontend/             # React + Tailwind CSS
│
├── backend/              # Python + FastAPI backend
│
├── vercel.json           # Services and request routing
├── .gitignore
├── readme.md
```

## ⚙️ Environment Configuration

Copy `.env.example` to `.env` for local configuration. The app uses `BASE_URL` for the deployed app/backend origin, `MONGO_URI` for the MongoDB connection, and `GROQ_API_KEY` for Groq AI access. The frontend adds `/api` to `BASE_URL`; the backend uses `BASE_URL` as its allowed CORS origin. Keep secrets in environment configuration and never commit `.env`.

Vercel does not deploy the local `.env` file. Configure `MONGO_URI` and `GROQ_API_KEY` for the backend service, and `BASE_URL` for the frontend and backend services in Vercel's environment settings.

## Deploy as Vercel services

Import the repository as a Vercel project from its root. The root `vercel.json` builds the `backend` and `frontend` services, routes `/api/*` to FastAPI, and sends all other paths to the Vite frontend. FastAPI routes use the `/api` prefix to match that routing.

Use `vercel dev` to run the services together locally. The static frontend calls the backend through the public same-origin `/api` rewrite, so no runtime binding is required. The backend connects to MongoDB and Groq as external dependencies, not Vercel services.


## 🔐 Security

- Environment variables are used for sensitive configuration.
- API keys and database credentials are not exposed in the frontend.
- Backend APIs handle application requests.
- Production CORS configuration restricts permitted frontend origins.


## 👨‍💻 Author

**Shriyan Thopu**

GitHub: https://github.com/shriyanthopu03

---
