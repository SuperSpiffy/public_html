
function theUltimateLoadFunction(link) {
    function loading() {
        const load = document.getElementById("loadingDiv").style; //defining load as a style element
        const disappear = document.getElementById("bodyDiv").style;
        let text = document.getElementById("text");
        let loadImg = document.getElementById("loadImage").style;

        loadImg.opacity = 0.5;
        text.innerHTML = "wait your ass up";
        text.style.opacity = 0.5;
        disappear.opacity = "0";

        load.backgroundColor = "black";
        load.width = "10000px";
        load.height = "1000px";

    }
    function wait() {
        window.setTimeout(waitLoad, 3000);
    }
    function waitLoad() {
        window.location.href = link;
    }

    //this is what theUltimateLoadFunction is doing vvvvv
    loading();
    wait();
};

/////////////Index2//////////


/*
function tabRev() {
    let tab = document.getElementsByClassName("tab");//button itself
    const container = document.getElementById("containerDiv"); //what we want to close?
    let position = 0;

    id = setInterval(frameElement, 5);

    function frame() {
        if (position)
    }



};
*/

//literally from W3 schools idk bro
function tabRev() {
    const tab = document.getElementById("tab");//button itself
    let container = document.getElementById("containerDiv").style; //what we want to close?

    //this does NOT work learn why please
    let count = increment(0);
    tab.addEventListener("click", increment);
        

    function increment(i) {
        if(tab.addEventListener('click', function(){
        }) //this is SO broken what the hell
    );

    console.log(count);


    // if (count <= 0) {
    //     container.display = "block";
    // } else if (0 < count === 1) {
    //     container.display = "none";
    // } else if (counter > 2) {
    //     count = 0;
    // }



};
