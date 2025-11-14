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

// Temperature buttons
const celcuisBtn = document.querySelector(".celcius");
const celciusCheckmark = document.querySelector("#celcius-checkmark");
const fahrenheitBtn = document.querySelector(".fahrenheit");
const fahrenheitCheckmark = document.querySelector("#fahrenheit-checkmark");

// Wind Speed buttons
const kmhBtn = document.querySelector(".kmh");
const kmhCheckmark = document.querySelector("#kmh-checkmark");
const mphBtn = document.querySelector(".mph");
const mphCheckmark = document.querySelector("#mph-checkmark");

initButtons();

celcuisBtn.addEventListener("click", () => {
	celcuisBtn.classList.add("selected");
	celciusCheckmark.classList.add("checkmark-selected");
	fahrenheitBtn.classList.remove("selected");
	fahrenheitCheckmark.classList.remove("checkmark-selected");
});

fahrenheitBtn.addEventListener("click", () => {
	fahrenheitBtn.classList.add("selected");
	fahrenheitCheckmark.classList.add("checkmark-selected");

	celcuisBtn.classList.remove("selected");
	celciusCheckmark.classList.remove("checkmark-selected");
});

kmhBtn.addEventListener("click", () => {
	kmhBtn.classList.add("selected");
	kmhCheckmark.classList.add("checkmark-selected");
	mphBtn.classList.remove("selected");
	mphCheckmark.classList.remove("checkmark-selected");
});

mphBtn.addEventListener("click", () => {
	mphBtn.classList.add("selected");
	mphCheckmark.classList.add("checkmark-selected");
	kmhBtn.classList.remove("selected");
	kmhCheckmark.classList.remove("checkmark-selected");
});

function initButtons() {
	celcuisBtn.classList.add("selected");
	celciusCheckmark.classList.add("checkmark-selected");

	kmhBtn.classList.add("selected");
	kmhCheckmark.classList.add("checkmark-selected");
}
