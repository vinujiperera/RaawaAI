
import uuid
from app.services.llm_service import generate_persona_reaction
from app.services.sentiment import extract_sentiment

def simulate_day(personas, concept, day):
    events = []

    for persona in personas:
        response = generate_persona_reaction(persona, concept, day)
        sentiment = extract_sentiment(response)

        events.append({
            "event_id": str(uuid.uuid4()),
            "persona_id": persona.persona_id,
            "day": day,
            "sentiment": sentiment,
            "post": response
        })

    return events

















