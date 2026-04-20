import { GoogleGenAI } from "@google/genai";
import { PERSONAS } from "../constants";

export async function runSimulation(concept, audience) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const audiencePersonas = PERSONAS[audience];
  
  const personaList = audiencePersonas.map(p => `- ${p.name} (Values: ${p.values})`).join('\n');

  const prompt = `
    You are a public reaction simulation engine for RaawaAI.
    Analyze the following concept for a specific audience:
    
    AUDIENCE: ${audience}
    PERSONAS IN AUDIENCE:
    ${personaList}
    
    CONCEPT:
    ${concept}
    
    Task:
    1. Generate exactly 4 detailed social media posts from different perspectives within this audience (using the defined personas).
    2. Provide a sentiment score (-100 to 100).
    3. Provide a backlash probability percentage (0 to 100).
    4. Provide a brief summary of the public mood.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          sentimentScore: { type: "NUMBER" },
          backlashProbability: { type: "NUMBER" },
          summary: { type: "STRING" },
          reactions: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                personaName: { type: "STRING" },
                postContent: { type: "STRING" },
                sentiment: { type: "STRING" },
                tone: { type: "STRING" },
                influenceWeight: { type: "NUMBER" }
              },
              required: ["personaName", "postContent", "sentiment", "tone", "influenceWeight"]
            }
          }
        },
        required: ["sentimentScore", "backlashProbability", "summary", "reactions"]
      }
    }
  });

  const rawResult = JSON.parse(response.text || '{}');
  
  return {
    ...rawResult,
    reactions: (rawResult.reactions || []).map((r, idx) => ({
      ...r,
      id: `reaction-${idx}-${Date.now()}`
    })),
    audienceType: audience,
    concept
  };
}

export async function refinePolicy(concept, simulationSummary) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    The following concept received negative feedback or high backlash risk during a simulation.
    
    ORIGINAL CONCEPT:
    ${concept}
    
    SIMULATION FEEDBACK SUMMARY:
    ${simulationSummary}
    
    Task:
    Rewrite the concept to improve public acceptance while maintaining the core intent. 
    Explain why these changes were made.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          improvedConcept: { type: "STRING" },
          reasoning: { type: "STRING" }
        },
        required: ["improvedConcept", "reasoning"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
}

export async function generateReport(result) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const reactionsSummary = result.reactions.map(r => `[${r.personaName}]: "${r.postContent}"`).join('\n');

  const prompt = `
    Generate a formal Strategic Intelligence Report based on the following simulation data.
    
    CONCEPT: ${result.concept}
    AUDIENCE: ${result.audienceType}
    BACKLASH RISK: ${result.backlashProbability}%
    SENTIMENT SCORE: ${result.sentimentScore}
    REACTIONS:
    ${reactionsSummary}
    
    The report should be structured for C-level executives and provide deep analytical insights.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          date: { type: "STRING" },
          executiveSummary: { type: "STRING" },
          riskAnalysis: { type: "STRING" },
          demographicImpact: { type: "STRING" },
          strategicRecommendations: {
            type: "ARRAY",
            items: { type: "STRING" }
          },
          conclusion: { type: "STRING" }
        },
        required: ["title", "date", "executiveSummary", "riskAnalysis", "demographicImpact", "strategicRecommendations", "conclusion"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
}
