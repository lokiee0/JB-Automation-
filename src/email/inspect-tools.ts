import '../env.js'; import {toolsFor} from './hostinger-mcp-client.js';
try{const {client,tools}=await toolsFor();console.log(JSON.stringify(tools.map(t=>({name:t.name,description:t.description,inputSchema:t.inputSchema})),null,2));await client.close()}catch(e){console.error(e instanceof Error?e.message:'MCP inspection failed');process.exitCode=1}
