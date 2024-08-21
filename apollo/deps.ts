


function APOLLO_OUT(arg : any) : void {
    if (process.env.APOLLO_MODE != 'NIGHT') {
        console.log(`APOLLO =:> ${arg}`)
    }
}


var ytdlOptions = {
    requestOptions: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    }
  }

export {
    APOLLO_OUT,
    ytdlOptions
}

