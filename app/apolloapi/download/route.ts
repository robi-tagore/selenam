import { getDistributeAble } from "@/apollo/core";
import { clearCache } from "@/apollo/core/merge/dep";
import { APOLLO_OUT } from "@/apollo/deps";
import { downloadServerRequest } from "@/global";
import { createReadStream } from "fs";
import path from "path";

export async function POST(
  request: Request,
  response: Response
) {
  APOLLO_OUT(`request found @/download`);

  // var reqBody: downloadServerRequest = await request.json();
  var reqBody = await request.json();

  return getDistributeAble(reqBody.url, reqBody.format).then(
    (pathGot: any) => {
      var stream = createReadStream(pathGot)
      const webStream = new ReadableStream({
        start(controller) {
          stream.on('data', chunk => controller.enqueue(chunk));
          stream.on('end', () => {controller.close();clearCache(pathGot)});
          stream.on('error', err => {controller.error(err);clearCache(pathGot)});
        }
      });

      
      APOLLO_OUT(`resolved request as success @/download`);

      return new Response(webStream, {
        status: 200,
        headers: {
          'Content-Disposition': 'attachment; filename="yourfile.mp4"',
          'Content-Type': 'video/mp4',
        },
      });

    },
    (err) => {
      APOLLO_OUT(`resolved request as failure @/download`);
      console.log(err);

      return Response.json(err)
      // response.status(513).json(err);
    }
  );
}

// server.get("/download", (request, response) => {
//   response.setHeader('Content-Disposition', 'attachment; filename=example.mp4');
//   createReadStream('./offlineStreams/vid.mp4').pipe(response)
// });

// server.get("/", (request, response) => {
//   response.sendFile(process.cwd() + '/offlineStreams/index.html')
// })

