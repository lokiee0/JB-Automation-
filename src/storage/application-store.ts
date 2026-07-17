import {mkdir,readFile,writeFile} from 'node:fs/promises'; import type {Application} from '../types.js'; import {withFileLock} from './file-lock.js';
const files={pending:'data/pending-applications.json',approved:'data/approved-applications.json',history:'data/application-history.json'} as const; type Bucket=keyof typeof files;
export const readApps=async(bucket:Bucket):Promise<Application[]>=>{try{return JSON.parse(await readFile(files[bucket],'utf8'))}catch{return []}};
export const writeApps=async(bucket:Bucket,apps:Application[])=>withFileLock(async()=>{await mkdir('data',{recursive:true});await writeFile(files[bucket],JSON.stringify(apps,null,2)+'\n')});
export const allApps=async()=>[...(await readApps('pending')),...(await readApps('approved')),...(await readApps('history'))];
