"use client";

import { useState } from "react";
import { GradientText, Logo, Text } from "../components.g";
import { useRouter } from "next/navigation";
import { createRef } from "react";
import { MaterialSymbol } from "material-symbols";

export default function Layout({ children }: any) {
  var route = useRouter();
  var h1 = "1.5rem";
  var h2 = "1.20rem";
  var p = ".95rem";
  var s = ".75rem";
  var ps = ".85rem";
  var dialog = createRef<HTMLDivElement>();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <div
        style={{
          height: "calc(100% - 80px)",
          width: "1080px",
        }}
      >
        <div style={{ height: "100%", width: "100%" }}>

          <div
            style={{
              height: "50px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <h3 style={{color:"rgba(0,0,0,.5)"}}>HD Youtube Downloader</h3>

              <h5>&nbsp; by Apollo & Selena</h5>
            </span>

            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{ margin: "0 .5rem" }}
                className="webdownload"
                onClick={() => route.push("/desktop")}
              >
                <button>
                  <GradientText style={{ cursor: "pointer" }} animated={true}>
                    <span className="material-symbols-rounded">
                      {"home" as MaterialSymbol}
                    </span>
                  </GradientText>{" "}
                </button>
              </div>
              <div
                style={{ margin: "0 .5rem" }}
                className="webdownload"
                onClick={() => route.push("/desktop/search")}
              >
                <button className="cxy">
                  <GradientText style={{ cursor: "pointer" }} animated={true}>
                    <span className="material-symbols-rounded">
                      {"search" as MaterialSymbol}
                    </span>
                  </GradientText>{" "}
                </button>
              </div>
              <div
                style={{ margin: "0 .5rem" }}
                className="webdownload"
                onClick={() => route.push("/desktop/explore")}
              >
                <button>
                  <GradientText style={{ cursor: "pointer" }} animated={true}>
                    <span className="material-symbols-rounded">
                      {"terminal" as MaterialSymbol}
                    </span>
                  </GradientText>{" "}
                </button>
              </div>
              <div
                style={{ margin: "0 .5rem" }}
                className="webdownload"
                onClick={() => route.push("/desktop/apolloandselena")}
              >
                <button>
                  <GradientText style={{ cursor: "pointer" }} animated={true}>
                    <span className="material-symbols-rounded">
                      {"rocket_launch" as MaterialSymbol}
                    </span>
                  </GradientText>{" "}
                </button>
              </div>
              <div
                style={{ margin: "0 .5rem" }}
                className="webdownload"
                onClick={() => route.push("/desktop/about")}
              >
                <button>
                  <GradientText style={{ cursor: "pointer" }} animated={true}>
                    <span className="material-symbols-rounded">
                      {"signature" as MaterialSymbol}
                    </span>
                  </GradientText>{" "}
                </button>
              </div>
              <div
                style={{ margin: "0 .5rem" }}
                className="webdownload"
                onClick={() => {
                  route.push("/desktop/downloads");
                }}
              >
                <button>
                  <GradientText style={{ cursor: "pointer" }} animated={true}>
                    <span className="material-symbols-rounded">
                      {"desktop_windows" as MaterialSymbol}
                    </span>
                  </GradientText>{" "}
                </button>
              </div>
            </div>

          </div>

          <div
            style={{
              boxShadow: "var(--digL1)",
              minHeight: "calc(100% - 50px - 80px)",
              padding: "40px 60px",
              borderRadius: "8px",
              transitionDuration: "500ms",
            }}
            className="cxy"
          >
            {children}
          </div>
        </div>
      </div>

      {/* <div
        style={{
          position: "absolute",
          zIndex: "1",
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,.5)",
          transitionDuration: "500ms",
        }}
        className="cxy"
        ref={dialog}
      >
        <div
          style={{
            // height: "300px",
            width: "460px",
            backgroundColor: "var(--lightL2)",
            borderRadius: "30px",
            padding: "70px 50px 50px 50px",
            lineHeight: "1.20",
            wordBreak: "break-all",
          }}
          className="cx"
        >
          <div>
            <GradientText
              size={h1}
              animated={true}
              style={{ margin: "0 0 15px 0" }}
            >
              On Web ?
            </GradientText>

            <div style={{ margin: "0 0 15px 0" }}>
              <div>
                <Text size={h2}>Experimental Project</Text>
              </div>
              <div>
                <Text size={p}>
                  The HD Youtube Downloader{" "}
                  <Text size={s}> by Apollo & Sekena</Text> is hosted freely on
                  Github.com and Render.com. So its resource is limited (512
                  MiB). And this is an experimental version. Please allow
                  downloading streams with approximate size of{" "}
                  <GradientText size={p} animated={true}>
                    {" "}
                    40MiB - 60MiB{" "}
                  </GradientText>
                </Text>
              </div>
            </div>

            <div style={{ margin: "0 0 15px 0" }}>
              <div>
                <Text size={h2}>Production Release</Text>
              </div>
              <div>
                <Text size={p}>
                  This build of web app is being monitored by the developers,
                  Based on the reviews of the users a production build of web
                  will release soon. Untill that you may use our app. Head to{" "}
                  <span
                    onClick={() => {
                      route.push("/desktop/downloads");
                    }}
                  >
                    <GradientText
                      size={p}
                      animated={true}
                      style={{ cursor: "pointer" }}
                    >
                      Downloads Page
                    </GradientText>
                  </span>{" "}
                  .
                </Text>
              </div>
            </div>

            <GradientText
              size={h1}
              animated={true}
              style={{ margin: "20px 0 15px 0" }}
            >
              On App ?
            </GradientText>

            <div style={{ margin: "0 0 35px 0" }}>
              <div>
                <Text size={h2}>About Production</Text>
              </div>
              <div>
                <Text size={p}>
                  The HD Youtube Downloader{" "}
                  <Text size={s}> by Apollo & Sekena</Text> is on Production.
                  Download streams at a infinite length for fee, and it will be
                  free forever.
                </Text>
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "10px 0 0 0",
                }}
              >
                <div
                  style={{ margin: "0 10px 0 0" }}
                  className="webdownload"
                  onClick={() => {
                    dialog.current!.style.opacity = "0";

                    setTimeout(() => {
                      dialog.current!.style.display = "none";
                    }, 250);
                  }}
                >
                  <button className="cxy">
                    <GradientText
                      style={{ cursor: "pointer" }}
                      animated={true}
                    >
                      ✓
                    </GradientText>{" "}
                  </button>
                </div>

                <div>
                  <div>
                    <GradientText size={h2} animated={true}>
                      {" "}
                      Proceed
                    </GradientText>
                  </div>
                  <div>
                    <Text size={p}>I understand the matter</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
