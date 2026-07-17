const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; const personal=/@(gmail|yahoo|outlook|hotmail)\./i;
export const validPublicRecruitmentEmail=(value:string|undefined)=>Boolean(value&&email.test(value)&&!personal.test(value));
