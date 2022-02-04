//boilerplating
import "./styling/style.scss";

import { createIcons, icons } from "lucide";
createIcons({ icons });

function darkToggle(storage: Storage): void {
	const { classList } = document.body;
	classList.toggle("dark");
	storage.setItem("dark", classList.contains("dark").toString());
}

onload = function () {
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
