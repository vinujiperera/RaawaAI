from pydantic import BaseModel
from typing import Dict

class SimulationRequest(BaseModel):
    concept: str
    audience: Dict
