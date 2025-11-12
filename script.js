const dropdown = document.querySelector("#units-dropdown");
const unitsButton = document.querySelector("#units");

//dropdown
document.addEventListener("click", (event) => {
	if (
		!dropdown.contains(event.target) &&
		!unitsButton.contains(event.target)
	) {
		if (dropdown.classList.contains("dropdown-visible")) {
			dropdown.classList.remove("dropdown-visible");
			dropdown.classList.add("dropdown-invisible");
		}
	}
});

// Seach bar

document.querySelector(".search").addEventListener("focus", (event) => {
	event.currentTarget.querySelector("input").focus();
});

document.querySelector("#units").addEventListener("click", (event) => {
	if (dropdown.classList.contains("dropdown-visible")) {
		dropdown.classList.remove("dropdown-visible");
		dropdown.classList.add("dropdown-invisible");
	} else {
		dropdown.classList.remove("dropdown-invisible");
		dropdown.classList.add("dropdown-visible");
	}
});
