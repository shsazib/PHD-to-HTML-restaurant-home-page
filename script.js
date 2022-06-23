const btn = document.querySelector(".btn");
const icon = document.querySelector(".fa-bars");

btn.onclick = function () {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-x");
    }
    else {
        icon.classList.replace("fa-x", "fa-bars");
    }
}