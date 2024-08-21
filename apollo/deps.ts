function APOLLO_OUT(arg: any): void {
  if (process.env.APOLLO_MODE != "NIGHT") {
    console.log(`APOLLO =:> ${arg}`);
  }
}

var ytdlOptions = {
  requestOptions: {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
      Referer: "https://www.youtube.com",
      Cookie:
        "VISITOR_INFO1_LIVE=Qp-Jvyrzpos; YSC=Y8N--RW12YE; LOGIN_INFO=AFmmF2swRgIhAI_HtcyqVnW8gOY8SwtIQ7UtIw4JcnkHO4hE2MOXwWSQAiEA8QpyPz3dnDQ8xNHdDAnBqBvm_tR_NqL2ZTz_j1p64m8:QUQ3MjNmeFdBNUhGbC10Tkg2LWtOanFRT0lBUVE3LXRuQWJPU255Z1ZaQVBjWkZmVGVfV19PZ21sa3NiTi1saGx4TjVxbnJ0Sm45dmFiT1IwRlp2OFVhcFNMelBWWWx4Z1JlQkNleF9hV2Y4MXFINkFwUnAtNFNMWEtZTE1FS29McUowV0pHem1GWFNhN1dtTXJUanJGcVpsVEFqVmlhc3ZB",
    },
  },
};

export { APOLLO_OUT, ytdlOptions };
