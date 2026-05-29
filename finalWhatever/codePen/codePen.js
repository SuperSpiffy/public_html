var spotlight = document.querySelector('.spotlight');
var scene = document.querySelector('.scene');
var isUserMotion = false;

function move(e) {
    if (e.clientX) {
        isUserMotion = true;
        spotlight.style.setProperty('--x', (e.clientX) + 'px');
        spotlight.style.setProperty('--y', (e.clientY) + 'px');

    }
}

spotlight.addEventListener('pointermove', move);



//Play when first loaded, then let user control
(() => {
    var startTime = Date.now();
    autorun();
    function autorun() {
        var now = Date.now();
        if (!isUserMotion && now <= startTime + 3000) {
            spotlight.style.setProperty('--x', ((now - startTime) / 6000 * 100) + '%');
            requestAnimationFrame(autorun);
        }
    }
})();



document.getElementById('blend').addEventListener('input', e => {
    spotlight.style.setProperty('--blend', e.currentTarget.value);
});

const emoticons = [":-)", ":-D", ">:|", ";-)", ":-(", ":-/", ":^|"];
let sceneGrid = document.createElement('div');

for (let i = 0; i < 100; i++) {
    const kid = document.createElement("div");
    kid.textContent = emoticons[Math.floor(Math.random() * emoticons.length)];
    sceneGrid.appendChild(kid)
}
scene.appendChild(sceneGrid)



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