document.getElementById("red").addEventListener("click", function() {
    document.body.classList.add("red");
    document.body.classList.remove("blue");
});

document.getElementById("blue").addEventListener("click", function() {
    document.body.classList.add("blue");
    document.body.classList.remove("red");
});
