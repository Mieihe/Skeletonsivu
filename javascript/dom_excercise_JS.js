// your javascript file
const container = document.querySelector("#container");
container.classList.add("container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.setAttribute("style", "color: red");
para.textContent = "Hei olen punainen!";
container.appendChild(para);

const head = document.createElement("h3");
head.setAttribute("style", "color: blue");
head.textContent = "Olen sininen h3!";
container.appendChild(head);

const secondContent = document.createElement("div");
secondContent.classList.add("secondContent");
secondContent.setAttribute("style", "border: solid; background-color: pink");

const scndHead = document.createElement("h1");
scndHead.textContent = "Olen DIVin sisällä";
secondContent.appendChild(scndHead);

const scndPara = document.createElement("p");
scndPara.textContent = "MINÄ MYÖS!";
secondContent.appendChild(scndPara);

container.appendChild(secondContent);
