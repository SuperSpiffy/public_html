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

//BUTTON BUTTON BUTTON COUNTER COUNTER COUNTER AHHHHH
let counter = 0;

function update() {
    let num = document.getElementById("num").innerHTML = counter;
};

function increase() {
    cheeringImg_onclick();
    counter++;
    update();
};

function decrease() {
    counter--;
    update();
}
//BUTTON COUNTER CLOSE



//cheer for me pls

let cheerImg = document.getElementById("cheerIMG").style;
cheerImg.opacity = 0;
cheerImg.zIndex = 0;

function cheerShow(){
    cheerImg.opacity = 1;
}
//imsotired help lmao
function cheeringImg_onclick(){
    setTimeout(cheerShow, )
}
