const container = document.querySelector("div");

for (let i = 0; i < 16; i++) {
	let div = document.createElement("div");
	div.classList.add("box");
	container.appendChild(div);
}