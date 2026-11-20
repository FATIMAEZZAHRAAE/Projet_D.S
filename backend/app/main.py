
from fastapi import FastAPI

app = FastAPI(
    title="IoT Smart Supervision System",
    description="Backend API for IoT monitoring and AI anomaly detection",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to IoT Smart Supervision System",
        "status": "running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
