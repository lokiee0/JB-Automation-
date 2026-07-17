import type {Job,Match,Profile,Preferences} from '../types.js'; import {matchJob} from '../jobs/match-job.js';
// Deterministic matching is the safe fallback; OpenAI is optional, never allowed to invent resume facts.
export const analyzeJob=async(job:Job,profile:Profile,prefs:Preferences):Promise<Match>=>matchJob(job,profile,prefs);
