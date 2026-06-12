
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


// //literally from W3 schools idk bro
// function tabRev() {
//     const tab = document.getElementById("tab");//button itself
//     let container = document.getElementById("containerDiv").style; //what we want to close?

//     //this does NOT work learn why please
//     let count = 0;
//     let inc_Count = ++count;

//     function listen() {
//         tab.addEventListener("click", function(){
//             count = inc_Count;
//         });
//     };

//     console.log(count);

// };

let danceBtn = document.getElementById('changeBtn');

let dance_change = document.getElementById('img');

danceBtn.addEventListener('click', function () {
    dance_change.classList.add('mainImg1_anim_change');
    dance_change.classList.remove('mainImg1_anim');
});

