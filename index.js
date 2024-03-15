const $body = document.querySelector("body");
const $title = document.querySelector(".title");
const $monitoringMenu = document.querySelector("#monitoring_menu");
const $controlMenu = document.querySelector("#control_menu");
const $main = document.querySelector("main");

function changePage(pageName) {
  fetch(pageName)
    .then((response) => {
      response.text().then((text) => {
        $main.innerHTML = text;
      })
    });
}

if (location.hash) {
  changePage(location.hash.substr(2));
} else {
  changePage("welcome");
}

window.addEventListener("load", () => {
  $body.style.backgroundColor = "white";
});

$title.addEventListener("click", () => {
  changePage("welcome");
})

$monitoringMenu.addEventListener("click", () => {
  changePage("monitoring");
});

$controlMenu.addEventListener("click", () => {
  changePage("control");
})