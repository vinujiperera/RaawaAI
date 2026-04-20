import { AudienceType } from './types.js';

export const PERSONAS = {
  [AudienceType.GEN_Z]: [
    { name: "Student Activist", values: "freedom, fairness, social justice", avatar: "https://picsum.photos/seed/a1/100/100" },
    { name: "Tech Savvy Youth", values: "innovation, convenience, digital rights", avatar: "https://picsum.photos/seed/a2/100/100" }
  ],
  [AudienceType.PROFESSIONALS]: [
    { name: "Legal Expert", values: "compliance, clarity, structural integrity", avatar: "https://picsum.photos/seed/a3/100/100" },
    { name: "Corporate Employee", values: "stability, income, career growth", avatar: "https://picsum.photos/seed/a4/100/100" }
  ],
  [AudienceType.RURAL]: [
    { name: "Traditional Farmer", values: "community, heritage, direct support", avatar: "https://picsum.photos/seed/a5/100/100" },
    { name: "Small Business Owner", values: "low taxes, ease of trade, infrastructure", avatar: "https://picsum.photos/seed/a6/100/100" }
  ]
};
