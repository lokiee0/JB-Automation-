const redact=(s:string)=>s.replace(/(bearer\s+|sk-[\w-]{6,}|[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_.-]{10,}\.[A-Za-z0-9_.-]{10,})\S*/gi,'$1[REDACTED]');
export const log=(event:string, details:Record<string,unknown>={})=>console.log(JSON.stringify({event,...Object.fromEntries(Object.entries(details).map(([k,v])=>[k,typeof v==='string'?redact(v):v]))}));
export const redactSecret=redact;
