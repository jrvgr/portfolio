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
	console.log();
	{
		document
			.querySelector(".darkToggle")
			?.addEventListener("click", () => darkToggle(localStorage));
	}

	if (localStorage.getItem("dark") === "true") {
		darkToggle(localStorage);
	}



	console.log(bgColor);

	if ( "hello" === "hello" && !localStorage.getItem("dark")) {
		darkToggle(localStorage);
	}
};
