import {readFile} from 'node:fs/promises'; import pdf from 'pdf-parse';
export const extractResume=async(path='resume/resume.pdf')=>{const buffer=await readFile(path);return (await pdf(buffer)).text.replace(/\s+/g,' ').trim()};
