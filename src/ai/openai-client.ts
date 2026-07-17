import OpenAI from 'openai'; export const openai=()=>{if(!process.env.OPENAI_API_KEY) return undefined; return new OpenAI({apiKey:process.env.OPENAI_API_KEY,timeout:20_000,maxRetries:2});};
