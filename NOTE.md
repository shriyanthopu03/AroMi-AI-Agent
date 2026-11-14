# Setup Instructions

The project has two application folders:

- `frontend/` - React and Vite client application
- `backend/` - Python FastAPI server and MongoDB integration

To enable AI features:

1. Copy `backend/.env.example` to `backend/.env`.
2. Replace `your_groq_api_key_here` with your Groq API key.
3. Set `MONGO_URI` to your local MongoDB or MongoDB Atlas connection string.
4. Copy `frontend/.env.example` to `frontend/.env` and set `VITE_API_URL` to the backend URL.
5. Start MongoDB and the backend server.
6. Start the frontend development server.

The backend uses Groq for AI responses and MongoDB for persistent user and chat data.
