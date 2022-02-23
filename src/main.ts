//boilerplating
import "./styling/style.scss";

import { ApolloClient, gql, useQuery } from "@apollo/client/core";
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

	this.window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", function () {
			if (
				window.matchMedia("(prefers-color-scheme: dark)").matches.toString() !==
				localStorage.getItem("dark")
			) {
				darkToggle(localStorage);
			}
		});

	if (
		this.window.matchMedia("(prefers-color-scheme: dark)").matches &&
		!localStorage.getItem("dark")
	) {
		darkToggle(localStorage);
	}
};

async function (params:type) {
	
