// Seach bar

document.querySelector(".search").addEventListener("focus", (event) => {
	event.currentTarget.querySelector("input").focus();
});

const dropdown = document.querySelector("#units-dropdown");

document.querySelector("#units").addEventListener("click", (event) => {
	if (dropdown.classList.contains("dropdown-visible")) {
		dropdown.classList.remove("dropdown-visible");
		dropdown.classList.add("dropdown-invisible");
	} else {
		dropdown.classList.remove("dropdown-invisible");
		dropdown.classList.add("dropdown-visible");
	}
});
