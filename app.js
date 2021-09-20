let helloBtn = document.querySelector("#helloBtn");

helloBtn.addEventListener(
  "click",
  function (event) {
    let helloWorld = document.querySelector(".helloWorld");
    helloWorld.innerHTML = "Goodbye World";
  },
  false
);
