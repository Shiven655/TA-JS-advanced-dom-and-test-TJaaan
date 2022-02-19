let form = document.querySelector("form");
let ul = document.querySelector("ul");
cardsData = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let catagoery = event.target.elements.catagoery.value;
  cardsData.push({ title, catagoery });
  createUI(cardsData, ul);
});
function handleEdit(event, info, id) {
  let elm = event.target;
  let input = document.createElement("input");
  input.value = info;
  input.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      let updated = event.target.value;
      cardsData[id].title = updated;
      createUI();
    }
  });
  let parent = event.target.parentElement;
  console.log(parent);
  parent.replaceChild(input, elm);
}
function createUI(data = cardsData, root = ul) {
  root.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((cardInfo, index) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = cardInfo.title;
    p.addEventListener("dblclick", (event) =>
      handleEdit(event, cardInfo.title, index)
    );
    let h2 = document.createElement("h2");
    h2.innerText = cardInfo.catagoery;
    li.append(p, h2);
    fragment.appendChild(li);
  });
  root.append(fragment);
}