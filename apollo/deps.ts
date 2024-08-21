function APOLLO_OUT(arg: any): void {
  if (process.env.APOLLO_MODE != "NIGHT") {
    console.log(`APOLLO =:> ${arg}`);
  }
}

var ytdlOptions = {
  // requestOptions: {
    // headers: {
      // "User-Agent":
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
      // 'Cookie':
      //   "SID=g.a000nAjfIxrgEJUr01ndptRb26vEkcuEniYgzK1Gq7Egp6oadmP_hLO28i-M8IY2OK7jqZyfjgACgYKAVoSARESFQHGX2MivvrJaGPmoetcShK1efInVhoVAUF8yKr2vh8RNJONjkfRm7VyojtB0076; APISID=_93TuflXZ9V-kMc-/Afq1eEJp_jZO5cnA2; SAPISID=9udwVk-n2xl96bYl/AlkZqNh_3dD4U4tlr; __Secure-1PAPISID=9udwVk-n2xl96bYl/AlkZqNh_3dD4U4tlr; __Secure-3PAPISID=9udwVk-n2xl96bYl/AlkZqNh_3dD4U4tlr; PREF=tz=Asia.Dhaka&f7=100; SIDCC=AKEyXzUjqNDtfouND9jJnZayw_tiARsC8CehMe2odPyRvBHRYx6au_isYt7Z7aWwWxMgI61QOw",
    // },
  // },
};

export { APOLLO_OUT, ytdlOptions };
