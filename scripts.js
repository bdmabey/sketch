const container = document.querySelector("div");

function setSize() {
	let size = prompt("Enter a number less than 100.")
	while (size > 100) {
		size = prompt("Enter a number less than 100")
	}

	if (container.hasChildNodes()) {
		while(container.firstChild) {
			container.removeChild(container.firstChild);
		}
	}

	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < (size ** 2); i++) {
		let div = document.createElement("div");
		div.classList.add("box");
		container.appendChild(div);
	}
	
	let boxes = Array.from(document.querySelectorAll(".box"));
	boxes.forEach(box => box.addEventListener('mouseenter', changeColor));
}

function changeColor(e) {
	e.target.style.backgroundColor = "black";
}

const button = document.querySelector("#clearStart");
button.addEventListener("click", () => setSize());