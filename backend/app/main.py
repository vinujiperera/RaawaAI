from fastapi import FastAPI
from app.api.simulation import router as simulation_router

app = FastAPI(title="RaawaAI Backend")

app.include_router(simulation_router)

@app.get("/")
def root():
    return {"status": "RaawaAI backend running"}
