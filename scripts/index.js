// Full credits to flightszone/flights/shaun/lsd for the site src <3

let transitionActive = false;
var song = document.getElementById("song");
var current_page = "main";


//PAGE LOADING


function startHome() {
    if (transitionActive) return;
    transitionActive = true;

    const displayText = document.querySelector('.display-text');
    displayText.style.opacity = 0;

    setTimeout(() => {
        displayText.innerHTML = getRandomSentence();
        displayText.style.opacity = 1;
        transitionActive = false;
    }, 2000);
}

function startPage() {
    const enterButton = document.getElementById("enter-container");
    enterButton.style.transition = "opacity 1s ease-in-out";
    enterButton.style.opacity = 0;

    setTimeout(() => {
        setTimeout(() => {
            const memberButtons = document.getElementById("member-container");
            const mainButtons = document.getElementById("main-container");
            memberButtons.style.display = "flex";
            mainButtons.style.display = "flex";

            requestAnimationFrame(() => {
                memberButtons.style.transition = "opacity 1s ease-in-out";
                memberButtons.style.opacity = 1;
                mainButtons.style.transition = "opacity 1s ease-in-out";
                mainButtons.style.opacity = 1;
            });

            enterButton.style.display = "none";
        }, 500);
    }, 1000);

    song.volume = 0;
    song.playbackRate = 0.85;
    song.play();

    var fadeInInterval = setInterval(function () {
        song.volume += 0.1;
        if (song.volume >= 0.7) {
            song.volume = 0.7;
            clearInterval(fadeInInterval);
        }
    }, 350);

    setTimeout(startHome, 1000);
};


//MEMBER BUTTONS
function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@masochist; " + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@masochist; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;
        randomGif.style.position = "absolute";

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function lsd() {
    memberCall(
        "assets/lsd_icon.png",
        "<a href='https://solo.to/com' target='_blank' style='color: white;'>solo.to</a>",
        "lsd"
    );
}

function evie() {
    memberCall(
        "assets/evie.jpg",
        "<a href='https://depre.ss/ed' target='_blank' style='color: white;'>depre.ss/ed</a>, <a href='https://x.com/wobbly' target='_blank' style='color: white;'>twitter</a>",
        "evie"
    );
}

// CORE BUTTONS

function memberCall(pfpSrc, textContent, user) {
    if (transitionActive) return;
    transitionActive = true;

    if (current_page === "member") {
        const displayText = document.querySelector(".display-text");
        const pfpImage = document.getElementById("pfp-image");

        displayText.innerHTML = textContent;
        document.title = "@masochist; " + user;
        pfpImage.src = pfpSrc;

        transitionActive = false;
    } else {
        current_page = "member";
        document.title = "@masochist; " + user;
        const displayText = document.querySelector(".display-text");
        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.display = "block";
        pfpImage.style.opacity = 1;

        displayText.innerHTML = textContent;
        pfpImage.src = pfpSrc;
        randomGif.style.display = "none";

        transitionActive = false;
    }
}

function updatePage(htmlContent, pageTitle) {
    if (transitionActive) return;

    transitionActive = true;

    document.title = "@masochist; " + pageTitle;

    const displayText = document.querySelector(".display-text");

    if (current_page !== "main") {
        current_page = "main";

        const randomGif = document.getElementById("random-gif");
        const pfpImage = document.getElementById("pfp-image");

        pfpImage.style.opacity = 0;
        randomGif.style.display = "block";
        randomGif.style.opacity = 1;
        displayText.innerHTML = htmlContent;
        pfpImage.style.display = "none";
        displayText.style.opacity = 1;

        transitionActive = false;
    } else {
        displayText.innerHTML = htmlContent;
        transitionActive = false;
    }
}

function domains() {
    updatePage(
        "<a href='https://bombocl.art/' target='_blank' style='color: white;'>bombocl.art</a>, " +
        "<a href='https://masochi.st/' target='_blank' style='color: white;'>masochi.st</a>, " +
        "<a href='https://nightco.re/' target='_blank' style='color: white;'>nightco.re</a>, " +
        "<a href='https://cathedr.al/' target='_blank' style='color: white;'>cathedr.al</a>, " +
        "<a href='https://swatte.rs/' target='_blank' style='color: white;'>swatte.rs</a>, " +
        "<a href='https://harmle.ss/' target='_blank' style='color: white;'>harmle.ss</a>, " +
        "<a href='https://depre.ss/' target='_blank' style='color: white;'>depre.ss</a>, " +
        "<a href='https://oppre.ss/' target='_blank' style='color: white;'>oppre.ss</a>, " +
        "<a href='https://tarni.sh/' target='_blank' style='color: white;'>tarni.sh</a>, " +
        "<a href='https://doxe.rs/' target='_blank' style='color: white;'>doxe.rs</a>",
        "domains"
    );
}


function projects() {
    updatePage(
        "Current projects: <a href='https://masochi.st/' target='_blank' style='color: white;'>masochi.st</a>; an all-in-one digital solutions site, offering biolinks, image host, emails & etc.",
        "projects"
    )
}


function about() {
    updatePage(
        "<a href='https://discord.gg/ic3' target='_blank' style='color: white;'>@masochist</a> is a cyber collective with a primary focus on coding and various other digital endeavors",
        "about"
    );
}


function discord() {
    window.open("https://discord.gg/ic3", "_blank");
}

function getRandomSentence() {
    const sentences = [
        "the world is your oyster",
        "took advantage of my kindness",
        "i hate who ive become",
        "proclaim eternal victory",
        "live by the sword",
        "die by the sword",
        "visit <a href='https://masochi.st/'>masochi.st</a> too"
    ];
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

var gifs = [
    "alakazam.gif",
    "arceus.gif",
    "articuno.gif",
    "charizard.gif",
    "darkrai.gif",
    "dialga.gif",
    "dragonite.gif",
    "entei.gif",
    "garchomp.gif",
    "gardevoir.gif",
    "genesect.gif",
    "gengar.gif",
    "giratina.gif",
    "groudon.gif",
    "ho-oh.gif",
    "kyogre.gif",
    "kyurem.gif",
    "lugia.gif",
    "mewtwo.gif",
    "moltres.gif",
    "palkia.gif",
    "raikou.gif",
    "rayquaza.gif",
    "reshiram.gif",
    "scizor.gif",
    "suicune.gif",
    "tyranitar.gif",
    "venusaur.gif",
    "zapdos.gif",
    "zekrom.gif"
];

function setRandomGif() {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    var randomGif = gifs[randomIndex];
    document.getElementById("random-gif").src = "assets/" + randomGif;

    document.body.setAttribute("data-current-gif", randomGif);

    updateButtonHoverColor();
}

setRandomGif();

function updateButtonHoverColor() {
    var currentGif = document.body.getAttribute("data-current-gif");
    var buttons = document.querySelectorAll(".buttons-container button");

    buttons.forEach(function (button) {
        button.setAttribute("data-gif", currentGif);
    });
}

