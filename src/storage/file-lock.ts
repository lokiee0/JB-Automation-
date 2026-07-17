import {mkdir,open,rm} from 'node:fs/promises';
export async function withFileLock<T>(fn:()=>Promise<T>){await mkdir('data',{recursive:true});const path='data/.lock';let h;for(let i=0;i<20;i++){try{h=await open(path,'wx');break}catch{await new Promise(r=>setTimeout(r,100))}}if(!h)throw new Error('Storage is busy');try{return await fn()}finally{await h.close();await rm(path,{force:true})}}
