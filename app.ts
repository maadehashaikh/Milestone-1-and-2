const greeting = document.getElementById("greeting") as HTMLHeadingElement;
const button = document.getElementById("changeText") as HTMLButtonElement;

button.addEventListener("click", () => {
  greeting.textContent = "You've clicked the button!";
});
