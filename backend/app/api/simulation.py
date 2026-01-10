from fastapi import APIRouter
import uuid

from app.models.simulation import SimulationRequest
from app.models.persona import Persona
from app.services.persona_engine import simulate_day

router = APIRouter()

@router.post("/simulation/start")
def start_simulation(req: SimulationRequest):
    personas = [
        Persona(
            persona_id=str(uuid.uuid4()),
            demographic="Sri Lankan Gen-Z Urban",
            traits={"skeptical": 0.8, "tech_friendly": 0.6},
            influence=0.9
        ),
        Persona(
            persona_id=str(uuid.uuid4()),
            demographic="Rural Farmers",
            traits={"tradition": 0.9, "risk_averse": 0.8},
            influence=0.6
        )
    ]

    all_events = []

    for day in range(1, 31):
        all_events.extend(simulate_day(personas, req.concept, day))

    avg_sentiment = sum(e["sentiment"] for e in all_events) / len(all_events)
    backlash_score = int((1 - avg_sentiment) * 50)

    return {
        "simulation_id": str(uuid.uuid4()),
        "backlash_score": backlash_score,
        "sample_posts": all_events[:5]
    }
