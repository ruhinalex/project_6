var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("darkTheme");
    if(document.body.classList.contains("darkTheme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}