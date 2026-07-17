export type Preferences={roles:string[];locations:string[];minimumMatchScore:number;maximumApplicationsPerRun:number;maximumJobsToAnalyze:number;rejectSeniorRoles:boolean;requirePublicRecruitmentEmail:boolean;requireApproval:boolean};
export type Job={id:string;company:string;title:string;location:string;jobUrl:string;publishedDate?:string;description:string;applicationEmail?:string};
export type Match={matchScore:number;matchingSkills:string[];missingSkills:string[];decision:'prepare'|'reject';reason:string};
export type Profile={name:string;email:string;phone:string;location:string;skills:string[];tools:string[];education:string[];projects:string[];experience:string[];certifications:string[];text:string};
export type Application={id:string;company:string;role:string;recipient?:string;subject?:string;body?:string;resumePath:string;jobUrl:string;matchScore:number;approved:boolean;sent:boolean;applicationMethod:'email'|'application_form';sentAt?:string;mcpMessageId?:string};
