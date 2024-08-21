"use client";

import { GradientText, Text } from "@/app/components.g";
import { HomePageLoader, WelcomeLoader } from "@/app/loader";
import { useRouter } from "next/navigation";
import { createRef } from "react";
import { MaterialSymbol } from "material-symbols";

export default function SearchPage({}) {
  var h1 = "1.5rem";
  var h2 = "1.20rem";
  var p = ".95rem";
  var s = ".75rem";
  var ps = ".85rem";

  var route = useRouter();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "10px 0 0 0",
        lineHeight: "1.25",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          // margin: "0 0 100px 0",
        }}
      >
        <div style={{ height: "300px", maxWidth: "45%" }} className="cxy">
          <div style={{ margin: "120px 0 0 0", display: "none" }}>
            <GradientText animated={true}>
              <h2>Selena is Secured and Secret !</h2>
            </GradientText>

            <div style={{ margin: "15px 0 0 0 " }}>
              <Text size={p}>
                This page is retricted and not for public visit. It is
                intentionally left blank by the author. Please go back from
                where you came. Sorry for the disturbance.
              </Text>
            </div>

            <div>
              <div
                style={{
                  margin: "30px 0",
                }}
              >
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
                    onClick={() => route.back()}
                  >
                    <button className="cxy">
                      <GradientText
                        style={{ cursor: "pointer" }}
                        size="2.25rem"
                        animated={true}
                      >
                        <span className="material-symbols-outlined">
                          {"arrow_back" as MaterialSymbol}
                        </span>
                      </GradientText>{" "}
                    </button>
                  </div>

                  <div>
                    <div>
                      <GradientText size={h2} animated={true}>
                        {" "}
                        Return
                      </GradientText>
                    </div>
                    <div>
                      <Text size={p}> Back to the root </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span
              style={{
                fontSize: "1.5rem",
                // fontFamily: "Playfair",
                fontWeight:'600',
                color: "rgba(0,0,0,.4)",
              }}
            >
              coded by &nbsp;
            </span>
            <GradientText animated={true}>
              <span style={{ fontSize: "3rem",fontFamily:"Product Sans Bold" }}>Rahman Rajon</span>
            </GradientText>
          </div>
        </div>

        <div style={{ height: "100%" }} className="cy">
          <HomePageLoader></HomePageLoader>
        </div>
      </div>
    </div>
  );
}
