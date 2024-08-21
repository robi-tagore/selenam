
'use client'

import { GradientText, Text } from "@/app/components.g";
import { HomePageLoader, WelcomeLoader } from "@/app/loader";
import { MaterialSymbol } from "material-symbols";
import { useRouter } from "next/navigation";
import { createRef } from "react";

export default function SearchPage({}) {
  var h1 = "1.5rem";
  var h2 = "1.20rem";
  var p = ".95rem";
  var s = ".75rem";
  var ps = ".85rem";
  var userInput = createRef<HTMLInputElement>();
  var submitBut = createRef<HTMLButtonElement>();
  var route = useRouter();
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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ height: "100%", maxWidth: "45%", lineHeight: "1.25" }}>
        <GradientText
          animated={true}
          size={h1}
          style={{ margin: "0 0 40px 0" }}
        >
          <h2>
          Searching for Answers ?
          </h2>
        </GradientText>
        <div style={{ margin: "0 0 40px 0" }}>
          <Text size={h2}>Finding Answers</Text>
          <div>
            <Text size={p}>
              Searching is the primary step of finding answers of the unsolved
              mysteries of the world. Start finding your answers by hitting the
              search bar below. Apollo & Selena will assist you in your
              adventure.
            </Text>
          </div>
        </div>

        <div className="webinputWrapper">
              <div className="webinput">
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
      <HomePageLoader></HomePageLoader>
    </div>
  );
}
