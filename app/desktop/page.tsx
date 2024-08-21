"use client";

import { KeyboardEvent, SyntheticEvent, createRef, useState } from "react";
import { GradientText, Logo, Text } from "../components.g";
import { CompoundOrbit, HomePageLoader, Matter, Orbit } from "../loader";
import { useRouter } from "next/navigation";
import { MaterialSymbol } from "material-symbols";
import "material-symbols/outlined.css";

export default function Home() {
  var h1 = "1.5rem";
  var h2 = "1.20rem";
  var p = ".95rem";
  var [welcomeVis, welcomeVisTo]: any = useState({
    opacity: "1",
    width: "45%",
  });
  var [searchVis, searchVisTo]: any = useState({ opacity: "1", width: "45%" });
  var [resultVis, resultVisTo]: any = useState({
    opacity: "0",
    width: "0%",
    transitionDuration: "250ms",
  });

  var userInput = createRef<HTMLInputElement>();
  var submitBut = createRef<HTMLButtonElement>();
  var route = useRouter();

  function showSystem() {
    welcomeVisTo({ ...welcomeVis, opacity: "0" });
    setTimeout(() => {
      welcomeVisTo({ opacity: "0", width: "0" });
      resultVisTo({ opacity: "1", width: "45%" });
    }, 250);
  }

  function handleKeypress(e: any) {
    if (userInput.current == undefined) {
      return;
    }

    var url = userInput.current.value ?? "apollo";
    var encodedURL = encodeURIComponent(url);
    route.push(`/desktop/formats/${encodedURL}`);
  }

  function keyDownAct(k: any) {
    if (k.key == "Enter") {
      submitBut.current?.click();
    }
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent:'center',
        alignItems:'center'
      }}
      // className="cxy"
    >
      <div
        style={{
          height: "100%",
          overflow: "hidden",
          ...searchVis,
        }}
        className="cxy"
      >
        <div>
          <div>
            <GradientText
              style={{ margin: "0 0 20px 0", padding: "2px 0px" }}
              animated={true}
              deg="-45"
              colors={["#00ffff", "#ff00ff"]}
              size="1.5rem"
            >
              <h1>Start Your Adventure</h1>
              <h3>With Apolla and Selena </h3>
            </GradientText>
          </div>

          {/* <Text size={p} style={{ lineHeight: "1.5" }}>
            HD YouTube Downloader <Text size=".75rem">by Apollo & Selena</Text>{" "}
            offers you download youtube videos at higest quality available. Hit
            the searchbar below to download youtube videos, it is free and
            always will be.
          </Text> */}
          <div
            style={{ margin: "20px 0 0 0", height: "70px", width: "100%" }}
            className="cx"
          >
            <div className="webinputWrapper">
              <div className="webinput" onClick={showSystem}>
                <input
                  type="text"
                  placeholder=""
                  ref={userInput}
                  onKeyDown={keyDownAct}
                />
                <button
                  ref={submitBut}
                  onClick={handleKeypress}
                  type="button"
                  className="cxy"
                >
                  <GradientText
                    style={{ fontSize: "1.5rem" }}
                    animated={true}
                    deg="45"
                    speed="500ms"
                  >
                    <span className="material-symbols-rounded">
                      {"rocket_launch" as MaterialSymbol}
                    </span>
                  </GradientText>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      <div
        style={{
          overflow: "hidden",
          height: "100%",
          ...resultVis,
        }}
        className="cxy"
      >
        <div>
          <HomePageLoader></HomePageLoader>

          <div style={{ width: "100%" }} className="cxy">
            <GradientText
              size={p}
              colors={["#8383ff", "#ff8383"]}
              animated={true}
            >
              Find Apollo & Selene while page loads
            </GradientText>
          </div>
        </div>
      </div>
    </div>
  );
}
