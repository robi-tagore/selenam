
import ytdl from '@distube/ytdl-core';


function APOLLO_OUT(arg: any): void {
  if (process.env.APOLLO_MODE != "NIGHT") {
    console.log(`APOLLO =:> ${arg}`);
  }
}


// Define cookies in the new format
const cookies = [
  { name: 'VISITOR_INFO1_LIVE', value: 'Qp-Jvyrzpos' },
  { name: 'YSC', value: 'Y8N--RW12YE' },
  { name: 'LOGIN_INFO', value: 'AFmmF2swRgIhAI_HtcyqVnW8gOY8SwtIQ7UtIw4JcnkHO4hE2MOXwWSQAiEA8QpyPz3dnDQ8xNHdDAnBqBvm_tR_NqL2ZTz_j1p64m8:QUQ3MjNmeFdBNUhGbC10Tkg2LWtOanFRT0lBUVE3LXRuQWJPU255Z1ZaQVBjWkZmVGVfV19PZ21sa3NiTi1saGx4TjVxbnJ0Sm45dmFiT1IwRlp2OFVhcFNMelBWWWx4Z1JlQkNleF9hV2Y4MXFINkFwUnAtNFNMWEtZTE1FS29McUowV0pHem1GWFNhN1dtTXJUanJGcVpsVEFqVmlhc3ZB' }
];

// Define agent options
const agentOptions = {
  pipelining: 5,         // Number of pipelined requests
  maxRedirections: 0,   // Number of redirects to follow
  // localAddress: '127.0.0.1' // Local address to bind to
};

// Create the custom agent
const agent = ytdl.createAgent(cookies, agentOptions);

export { APOLLO_OUT, agent };
