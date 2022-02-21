const params = new URLSearchParams(window.location.search);

if (params.get("login") === "failed") {
  const paragraph = document.createElement("p");
  const msg = document.createTextNode("Login failed!");
  paragraph.classList.add("content__paragraph");
  paragraph.appendChild(msg);
  document.querySelector(".content__form").appendChild(paragraph);
}
