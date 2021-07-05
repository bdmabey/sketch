const container = document.querySelector("div");

let size = prompt("Enter a number less than 100.")

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for (let i = 0; i < (size ** 2); i++) {
	let div = document.createElement("div");
	div.classList.add("box");
	container.appendChild(div);
}

function changeColor(e) {
	console.log('herr');
	e.target.style.backgroundColor = "black";
}

let boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach(box => box.addEventListener('mouseenter', changeColor));