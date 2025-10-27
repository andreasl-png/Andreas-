const facts = [
  "I love Johan!",
  "OOHHHHHH i do love JOHAN.",
  "He my honey cutie pie",
  "We all love Johannnnnn"
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});

