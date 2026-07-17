import {readFile} from 'node:fs/promises'; import type {Preferences} from './types.js';
export const preferences=async():Promise<Preferences>=>JSON.parse(await readFile('config/preferences.json','utf8'));
export const sources=async():Promise<{greenhouse:string[];lever:string[];manualFeeds:string[]}>=>(JSON.parse(await readFile('config/job-sources.json','utf8')));
