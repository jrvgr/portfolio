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
	
} fetch("https://api.premid.app/v3", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: '{"query":"  subscription {\\n\\t\\tcredits(id:\\"302080358130909185\\"){\\n\\t\\t\\t\\tuser{\\n\\t\\t\\t\\t\\tname\\n\\t\\t\\t\\t\\tstatus\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n    }\\n  "}',
})
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.error(err);
	});}