import { createWriteStream } from "fs";

import { apollo } from "../common";

import { serverErr } from "../../globalTypes";
// import ytdl from "ytdl-core";
import ytdl from "@distube/ytdl-core";
import readline from "readline";
import { agent } from "@/apollo/deps";

process.env.YTDL_NO_UPDATE = "true";
// env dependence : DOWNLOAD_DEBUG = NIGHT ; OFFLINE = NIGHT

async function pipeStandalone(
  url: string,
  itag: number,
  path: string
): Promise<string> {
  apollo(
    `action  => piping stream @itag : ${itag} @url : ${url} @path : ${path}`
  );
  return new Promise(async (solved, mystery) => {
    var videoStream = ytdl(url, {
      quality: itag,
      agent:<any>agent
    });

    videoStream
      .on("progress", (chunkLength, downloaded, total) => {
        // apollo(
        //   "downloaded",
        //   Math.round((downloaded / total) * 100) + "%",
        //   "of",
        //   total
        // );
      })
      .on("error", (err) => {
        apollo("error", err);
        mystery(err);
      });

    var writeStream = createWriteStream(path);

    videoStream
      .pipe(writeStream)
      .on("finish", () => {
        apollo(`\nsuccess => piped stream @itag : ${itag} @url : ${url}`);
        solved(path);
      })
      .on("error", (err) => {
        apollo(`failure => piping stream @itag : ${itag} @url : ${url}`);
        var error: serverErr = {
          boundary: "piping stream",
          error: err,
        };

        mystery(error);
      });
  });
}

async function pipeUntillSuccess(
  url: string,
  itag: number,
  path: string,
  maxAttempt:number
): Promise<string> {
  var succeed: boolean = false;
  var attempt = 0;
  var pathGot;

  var err :any;
  while (true) {

    if (succeed) break
    if (attempt >= maxAttempt) break

    apollo('DOWNLOAD PROGRESS','attempt',attempt)
    try {
      pathGot = await pipeStandalone(url, itag, path);
    } catch (error) {
      apollo('DOWNLOAD PROGRESS','attempt',attempt,'failure',error)
      err = err
    }

    if (typeof pathGot == "string") {
      apollo('DOWNLOAD PROGRESS','attempt',attempt,'success')
      succeed = true;
      return Promise.resolve(path);
    }
    attempt += 1;
  }
  return Promise.reject(err)
}

// (async () => {
//   console.log(await pipeStandalone("https://www.youtube.com/watch?v=RWnFowWtT78",137));
// })();

export { pipeStandalone,pipeUntillSuccess };
