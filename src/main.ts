//boilerplating
import "./styling/style.scss";

import { request, gql } from "graphql-request";
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
	document.querySelector(".dc__card")?.classList.add("visible");
};

document
	.querySelector(".discord")
	?.addEventListener("click", () =>
		document.querySelector(".dc__card")?.classList.toggle("visible")
	);

const query = gql`
	query {
		credits(id: "302080358130909185") {
			user {
				name
				status
				avatar
				name
				tag
			}
		}
	}
`;

const getDcInfo = async () => {
	const result = await request("https://api.premid.app/v3", query);
	return result;
};

getDcInfo().then((data) => dcCard(data));

function dcCard(result: { credits: { user: any }[] }) {
	const fresult = result.credits[0].user;

	//wrapper div
	const div = document.createElement("div");
	div.classList.add("dc__card");

	//content div (images)
	const Cdiv = document.createElement("div");
	Cdiv.classList.add("Cdiv");
	div.appendChild(Cdiv);

	//text div
	const Ediv = document.createElement("div");
	Ediv.classList.add("Ediv");
	div.appendChild(Ediv);

	//pull image from discord
	const avaterE = document.createElement("img");
	avaterE.classList.add("avatar");
	avaterE.src = fresult.avatar;
	Cdiv.appendChild(avaterE);

	//online status
	const statusE = document.createElement("div");
	statusE.classList.add("status");
	statusE.classList.add(fresult.status);
	Cdiv.appendChild(statusE);

	//name
	const nameE = document.createElement("span");
	nameE.classList.add("name");
	nameE.textContent = fresult.name;
	Ediv.appendChild(nameE);

	//tag
	const tagE = document.createElement("span");
	tagE.classList.add("tag");
	tagE.textContent = "#" + fresult.tag;
	Ediv.appendChild(tagE);

	document.querySelector(".cards")?.appendChild(div);
}
