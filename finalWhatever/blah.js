function loading(){
    const load = document.getElementById("loadingDiv").style; //defining load as a style element
    const disappear = document.getElementById("bodyDiv").style;

    disappear.opacity = "0"

    load.backgroundColor = "black";
    load.width = "10000px"
    load.height = "10000px"

}