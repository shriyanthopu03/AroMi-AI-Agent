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
| Frontend | React.js, Vite |
| Styling | Tailwind CSS |
| Main Backend | Node.js, Express.js |
| AI Backend | Python, FastAPI, Uvicorn |
| Database | MongoDB |
| AI Integration | Groq API |
| API Communication | REST APIs |

## 🏗️ System Architecture

```text
                 Users
                   |
                   v
          React + Tailwind CSS
                   |
                   v
            Express.js API
                   |
             +-----+-----+
             |           |
             v           v
          MongoDB     FastAPI
                       Python
                         |
                         v
                     Groq API
                         |
                         v
                  AI-generated Results
```

## 📂 Project Structure

```text
wellness/
│
├── frontend/             # React + Tailwind CSS
│
├── backend-node/         # Node.js + Express backend
│
├── backend/              # Python + FastAPI backend
│
├── .gitignore
├── README.md
```

## ⚙️ Environment Configuration

The application uses separate environment configurations for its frontend and backend services.

**Frontend**
- API base URLs for deployed backend services.

**Node.js Backend**
- MongoDB connection string.
- Authentication secrets.
- FastAPI service URL.
- Production frontend origin for CORS.

**Python Backend**
- Groq API key.
- MongoDB connection string, if required by the implementation.
- AI service configuration.

All sensitive environment variables are configured through the respective deployment platforms and excluded from the GitHub repository.


## 🔐 Security

- Environment variables are used for sensitive configuration.
- API keys and database credentials are not exposed in the frontend.
- Backend APIs handle application requests.
- Production CORS configuration restricts permitted frontend origins.


## 👨‍💻 Author

**Shriyan Thopu**

GitHub: https://github.com/shriyanthopu03

---
