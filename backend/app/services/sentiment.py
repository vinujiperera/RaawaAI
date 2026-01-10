import re

def extract_sentiment(text: str) -> float:
    match = re.search(r"(-?\d+\.?\d*)", text)
    return float(match.group(1)) if match else 0.0
