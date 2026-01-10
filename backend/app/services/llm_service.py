import openai
from app.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_persona_reaction(persona, concept, day):
    prompt = f"""
You are a simulated human.

Demographic: {persona.demographic}
Traits: {persona.traits}

Concept:
"{concept}"

Day {day} of public discussion.

Respond with:
Reaction:
Post:
Sentiment score (-1 to 1):
"""

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )

    return response.choices[0].message["content"]
