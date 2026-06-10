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
    counter++;
    update();
};

function decrease() {
    counter--;
    update();
}
//BUTTON COUNTER CLOSE



//stupid ass cheer stuff

let cheerImg = document.getElementById("cheerIMGo").style;
cheerImg.zIndex = 1;


//this is what needs to be worked on, please vvvv
//first button
let cheerBtn = document.getElementById("cheerbtn");
let divChange = document.getElementById("cheerIMGo");

function remove() {
    divChange.classList.remove('cheerIMG');
    divChange.classList.add('cheerIMGo');
}

cheerBtn.addEventListener('click', function () {
    divChange.classList.remove('cheerIMGo');
    divChange.classList.add('cheerIMG');

    setTimeout(remove, 900);
});
//first button close


//second button open
let cheerBtn2 = document.getElementById("cheerbtn2");
let divChange2 = document.getElementById("cheerIMGo");

function remove2() {
    divChange.classList.remove('cheerIMG');
    divChange2.classList.add('cheerIMGo');
}

cheerBtn2.addEventListener('click', function () {
    divChange2.classList.remove('cheerIMGo');
    divChange2.classList.add('cheerIMG');

    setTimeout(remove2, 900);
});


