window.onload = function() {
    const button = document.getElementById("ShowWife");
    button.addEventListener("click", ShowButtonPressed);

    function ShowButtonPressed() {
        const image = document.createElement("img")
        image.src = "./assests/sop2.jpg"
        image.alt = "She's my woman (She's a robot)";
        image.className = "img";
        document.body.appendChild(image)
        document.body.innerHTML = "";
    }
};