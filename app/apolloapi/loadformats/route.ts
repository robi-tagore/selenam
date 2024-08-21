import { getFormats } from "@/apollo/core";
import { APOLLO_OUT } from "@/apollo/deps";
import { loadFormatServerRequest, loadFormatServerResponse } from "@/global";

export async function POST(
  request: Request,
  response: Response
) {
  APOLLO_OUT(`request found @/loadformats`);

  var reqBody: loadFormatServerRequest = await request.json();
  var url = reqBody.url;

  return getFormats(url).then(
    (d: any) => {
      var toFly: loadFormatServerResponse = {
        condition: "APOLLO",
        data: d,
      };
      // response.status(200).json(toFly);
      APOLLO_OUT(`request resolved as success @/loadformats`);

      return Response.json(toFly)
    },
    (e: any) => {
      var toFly: loadFormatServerResponse = {
        condition: "NIGHT",
        data: e,
      };
      // response.status(200).json(toFly);
      APOLLO_OUT(`request resolved as failure @/loadformats`);
      console.log(e);
      
      return Response.json(toFly)
    }
  )
}

// server.get("/download", (request, response) => {
//   response.setHeader('Content-Disposition', 'attachment; filename=example.mp4');
//   createReadStream('./offlineStreams/vid.mp4').pipe(response)
// });

// server.get("/", (request, response) => {
//   response.sendFile(process.cwd() + '/offlineStreams/index.html')
// })
