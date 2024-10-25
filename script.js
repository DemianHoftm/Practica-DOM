let pressed = false
window.onload = function() {
    const button = document.getElementById("ShowWife");
    button.addEventListener("click", ShowButtonPressed);

    function ShowButtonPressed() {
        console.log(pressed)
        if(pressed){
            location.reload();
        }else{
            const title = document.getElementById("PageTitle")
            title.textContent= "Look? She's so beautiful bro"
            const Subtitle = document.getElementById("TextFromBody")
            Subtitle.textContent= "She's the fear of sangvis ferri and a really cute girl. Also quite violent"
            const image = document.createElement("img")
            image.src = "./assests/sop2.jpg"
            image.alt = "She's my woman (She's a robot)";
            image.className = "img";
            document.body.appendChild(image)
            button.textContent= "go back"
            pressed = true;
        }
        
    }
};