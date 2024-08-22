import { writeFile } from "fs/promises";
import { createWriteStream, createReadStream, readFileSync } from "fs";

import { apollo } from "../common";

import { serverErr, serverMsg } from "../../globalTypes";
// import ytdl from "ytdl-core";
import ytdl from "@distube/ytdl-core";

import { Readable, Writable } from "stream";
import { agent } from "@/apollo/deps";

process.env.YTDL_NO_UPDATE = "true";
// env dependence : DOWNLOAD_DEBUG = NIGHT ; OFFLINE = NIGHT

async function createFileForWritting(path: string): Promise<serverMsg> {
  apollo(`action  => creating resource @path : ${path}`);
  return await writeFile(path, "").then(
    () => {
      apollo(`success => creating resource @path : ${path}`);
      var msg: serverMsg = {
        boundary: `creating resource`,
        msg: `created resource @path : ${path}`,
      };
      return msg;
    },
    (err) => {
      apollo(`failure => creating resource @path : ${path}`);
      var error: serverErr = {
        boundary: `creating resource`,
        error: err,
      };
      return Promise.reject(error);
    }
  );
}

function resolveStreamDest(dest: string): Promise<Writable> {
  return new Promise((solved, mystery) => {
    apollo(`action  => resolving stream @dest : ${dest}`);

    var streamDest = createWriteStream(dest);

    streamDest.on("error", (err) => {
      apollo(`failure => resolving stream @dest : ${dest}`);
      var error: serverErr = {
        boundary: "resolving stream",
        error: err,
      };
      mystery(error);
    });

    streamDest.on("ready", () => {
      apollo(`success => resolving stream @dest : ${dest}`);
      solved(streamDest);
    });
  });
}

function downloadStream(url: string, itag: number): Promise<Buffer> {
  apollo(`action  => downloading stream @itag : ${itag} @url : ${url}`);
  return new Promise((solved, mystery) => {
    var stream = ytdl(url, {
      quality: itag,
      requestOptions:{
        headers: {
          // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          // 'Accept-Language': 'en-US,en;q=0.9',
          // 'Accept': 'application/json, text/plain, */*',
          // 'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive',
          // 'Referer': 'https://www.youtube.com',
        },
        highWaterMark: 1 << 25
      }      
    });
    var chunks: Array<Buffer> | any = [];

    stream.on("error", (err) => {
      apollo(`failure => downloading stream @itag : ${itag} @url : ${url}`);
      var error: serverErr = {
        boundary: "downloading stream",
        error: err,
      };

      mystery(error); // real one
      // var off = ['offlineStreams/aud.mp4','offlineStreams/vid.mp4'][Math.floor(Math.random())]
      // process.env.OFFLINE == 'APOLLO' ? solved(readFileSync(off)) : mystery(error);
    });

    stream.on("data", (chunk: Buffer) => {
      process.env.SHOW_BUFFER == "APOLLO" || true
        ? process.stdout.write(".")
        : "";
      chunks.push(chunk);
    });

    stream.on("end", () => {
      apollo(`\nsuccess => downloading stream @itag : ${itag} @url : ${url}`);
      var dataBuffers = Buffer.concat(chunks);
      solved(dataBuffers);
    });
  });
}

function writeBuffer(buffer: Buffer, dest: Writable): Promise<serverMsg> {
  return new Promise((solved, mystery) => {
    apollo(`action  => writing buffer @dest : ${dest}`);

    dest.write(buffer);
    dest
      .end()
      .on("error", (err) => {
        apollo(`failure => writing buffer @dest : ${dest}`);
        var error: serverErr = {
          boundary: "writing buffer",
          error: err,
        };
        mystery(error);
      })
      .on("finish", () => {
        apollo(`success => writing buffer @dest : ${dest}`);
        var serverMsg: serverMsg = {
          boundary: "writing buffer",
          msg: `written buffer @dest : ${dest}`,
        };
        solved(serverMsg);
      });
  });
}

// (async () => {
//   console.log(await downloadStream("https://www.youtube.com/watch?v=RWnFowWtT78",137));
// })();

export {
  createFileForWritting,
  downloadStream,
  writeBuffer,
  resolveStreamDest,
};
