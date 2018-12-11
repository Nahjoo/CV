var anim = document.querySelector(".go");
anim.style.position = "absolute";
var postop = 0;
var dir = -1;

function animation() {
    if (postop == 0) {
        dir = 1;
    } else if (postop == 30) {
        dir = -1;
    }
    postop += 2 * dir;
    anim.style.top = `${postop}px`;
    requestAnimationFrame(animation, 1000);
}

requestAnimationFrame(animation, 1000);

var tableau = "Développeur Web / Web Mobile";
var tabl = [];
var div = document.querySelector(".phrase");
var texte = tableau.split('');
var txt = texte.length;
var ok = '';
var msg = txt - 1;
var i = 0;



function boucle() {
    for (i = 0; i < txt; i++) {
        console.log('ok');
        texte[i] = ok + texte[i]
        tabl.push(texte[i]);
        ok = texte[i];
    }

}

var bis = 0;
function change() {
    div.innerHTML = tabl[bis];
    bis++;
    if (bis == txt) {
        div.innerHTML = "";
        var j = 0;
        for (j = 0; j < tabl.length; j++) {
            div.innerHTML = tabl[j];
        }


    }


    if (bis >= txt) {
        bis = msg;
    }
}

console.log(tabl)
boucle();
setInterval("change()", 150);


$(function () {
    /**
    * Smooth scrolling to a specific element 
    **/
    function scrollTo(target) {
        if (target.length) {
            $("html, body").stop().animate({ scrollTop: target.offset().top }, 1500);
        }
    }
    // exemple
    scrollTo($("#mon-id"));
});






