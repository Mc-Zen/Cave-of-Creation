

function init() {
    startAnimation();
    star_bg = document.getElementById("stars");
}

var star_bg;
var planets = [];

const movement_zone = 30; //+-30px

function togglePlay() {
    var audioElement = document.getElementById('song');
    if (audioElement.paused) {
        audioElement.play();
        document.getElementById('play_button').src = "images/pause.png";
    } else {
        audioElement.pause();
        document.getElementById('play_button').src = "images/play.png";
    }
}
function rewind() {
    document.getElementById('song').currentTime -= 10;
}

function fastforward() {
    document.getElementById('song').currentTime += 10;
}


function startAnimation() {
    planets.push(document.getElementById("oceanplanet"));
    planets.push(document.getElementById("orangecloudplanet"));
    planets.push(document.getElementById("purpleringplanet"));
    planets.push(document.getElementById("stoneplanet"));
    //setInterval(movePlanets, 100);
    console.log(planets);

    // give the planets different animation speeds and starts
    for (let i = 0; i < planets.length; i++) {
        var p = planets[i];

        // neg value to give animations a different headstart
        p.style.animationDelay = -Math.random() * 6 + "s";
        p.style.animationDuration = Math.random() * 2 + 5 + "s";
        p.children[0].style.animationDelay = -Math.random() + "s";
        p.children[0].style.animationDuration = Math.random() * 2 + 6 + "s";



        /*p.style.left = window.getComputedStyle(p).left;
        p.style.top = window.getComputedStyle(p).top;
        p.recentMovementX = 0.0;
        p.recentMovementY = 0.0;
        p.origPos = [parseInt(p.style.left), parseInt(p.style.top)];*/
    }
}

let counter = 0;

function movePlanets() {
    counter++;
    for (let i = 0; i < planets.length; i++) {
        let p = planets[i];
        let x = p.recentMovementX, y = p.recentMovementY;
        if (counter % 10 == 0) {
            console.log(x, y);
            x = Math.random() * 3 - 1;
            y = Math.random() * 2 - 1;
            p.recentMovementX = x;
            p.recentMovementY = y;
        }
        //p.recentMovementY = y;
        //console.log(y)

        var newLeft = Math.max(0, Math.min(parseInt(p.style.left) + x, star_bg.offsetWidth - p.offsetWidth));

        var newLeft = constrain(parseInt(p.style.left) + x, p.origPos[0] - movement_zone, p.origPos[0] + movement_zone);

        var newTop = constrain(parseInt(p.style.top) + y, p.origPos[1] - movement_zone, p.origPos[1] + movement_zone);

        p.style.left = newLeft + "px";
        p.style.top = newTop + "px";
    }
}

function constrain(n, min, max) {
    return Math.max(min, Math.min(n, max));
}