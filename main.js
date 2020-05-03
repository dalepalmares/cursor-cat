let mouseCursor = document.querySelector(".cursor");
let cat = document.querySelector(".cat");

window.addEventListener("mousemove", cursor);

function cursor(e) {
    cat.style.top = e.pageY + "px";
    cat.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}
