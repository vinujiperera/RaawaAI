// Mock Gemini Service
// Replace with actual API calls when ready

export const runSimulation = async (concept, audience) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  const backlashProbability = Math.min(95, Math.max(10, Math.round(Math.random() * 80 + 10)));
  const sentimentScore = Math.round((Math.random() * 140 - 70));
  const reactions = [
    {
      id: 'p1',
      personaName: 'Nova Analyst',
      sentiment: sentimentScore > 0 ? 'positive' : sentimentScore < 0 ? 'negative' : 'neutral',
      postContent: `The concept of ${concept} is likely to resonate with ${audience} while still carrying some risk.`,
      tone: 'analytical'
    },
    {
      id: 'p2',
      personaName: 'Pulse Agent',
      sentiment: sentimentScore > 10 ? 'positive' : sentimentScore < -10 ? 'negative' : 'neutral',
      postContent: `I would position this for a ${audience} audience and monitor response carefully.`,
      tone: 'cautious'
    }
  ];

  return {
    concept,
    summary: `Simulation results for "${concept}" targeting ${audience}. This is a demonstration of how the model evaluates human resonance and risk.`,
    audienceType: audience,
    backlashProbability,
    sentimentScore,
    reactions,
    data: []
  };
};

export const refinePolicy = async (concept, summary) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    policy: `Refined policy based on: ${concept}`,
    recommendations: 'Implement changes in phases: Plan, Test, Deploy, Monitor'
  };
};

export const generateReport = async (result) => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    title: `Simulation Report: ${result.concept}`,
    content: `Detailed report for simulation results. ${result.summary}`
  };
};
