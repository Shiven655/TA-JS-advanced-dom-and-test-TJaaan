let noOfQuotesToAdd = 3;
let root = document.querySelector("ul");
let index = 0;

function generateQuotes() {
  for (let i = 0; i < noOfQuotesToAdd; i++) {
    let li = document.createElement("li");
    let blockQuote = document.createElement("blockqoute");
    blockQuote.innerText = quotes[index].quoteText;
    blockQuote.classList.add("blockquote");
    let cite = document.createElement("cite");
    cite.innerText = quotes[index].quoteAuthor;
    cite.classList.add("cite");
    li.append(blockQuote, cite);
    root.append(li);
    index++;
  }
}

document.addEventListener("scroll", () => {
  let top = document.documentElement.scrollTop;
  let height = document.documentElement.clientHeight;
  let scHeight = document.documentElement.scrollHeight;
  if (top + height >= scHeight && index < quotes.length) {
    generateQuotes();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  alert("DOM content is loaded");
  generateQuotes();
});