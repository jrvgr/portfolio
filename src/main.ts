//boilerplating
import "./styling/style.scss";

import { createIcons, icons } from "lucide";

import {DarkMode} from "./lib/darkmode";

createIcons({ icons });

const useNewCode = true; // Set to true to enable the new darkmode implementation.

if (useNewCode) {
  onload = () => DarkMode.onload; // See lib/darkmode.ts
} else {

  // This is your code, this hasn't been modified.
  function darkToggle(storage: Storage): void {
    const { classList } = document.body;
    classList.toggle("dark");
    storage.setItem("dark", classList.contains("dark").toString());
  }

  onload = function () {
    console.log();
    {
      document
        .querySelector(".darkToggle")
        ?.addEventListener("click", () => darkToggle(localStorage));
    }

    if (localStorage.getItem("dark") === "true") {
      darkToggle(localStorage);
    }

    const styles = getComputedStyle(document.documentElement);
    const bgColor = styles.getPropertyValue("--prefers-dark");

    console.log(bgColor);

    if (bgColor === "true" && !localStorage.getItem("dark")) {
      darkToggle(localStorage);
    }
  };
}
