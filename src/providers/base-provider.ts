import type {Job} from '../types.js'; export interface JobProvider { fetch():Promise<Job[]> }
