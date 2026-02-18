import { PersonalityScores } from '../types/index';

export const getKeywords = (scores: PersonalityScores): string[] => {
  const keywords: string[] = [];
  
  if (scores.P >= 20) keywords.push('野心家');
  if (scores.S >= 20) keywords.push('局中人');
  if (scores.E >= 20) keywords.push('性情中人');
  if (scores.I >= 20) keywords.push('理想主义');
  if (scores.R >= 20) keywords.push('现实主义');
  if (scores.T >= 20) keywords.push('世外高人');
  
  if (keywords.length === 0) {
    const entries = Object.entries(scores) as [keyof PersonalityScores, number][];
    entries.sort((a, b) => b[1] - a[1]);
    
    const top = entries[0][0];
    if (top === 'P') keywords.push('掌控力');
    else if (top === 'S') keywords.push('洞察力');
    else if (top === 'E') keywords.push('感染力');
    else if (top === 'I') keywords.push('信念感');
    else if (top === 'R') keywords.push('执行力');
    else if (top === 'T') keywords.push('超脱感');
  }

  return keywords.slice(0, 3);
};
