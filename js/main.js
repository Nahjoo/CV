var anim = document.querySelector("i");
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

// var canvas = document.getElementById('canvas');
// c = canvas.getContext('2d');

// var innerWidth = window.innerWidth,
//     innerHeight = window.innerHeight,
//     TWO_PI = Math.PI * 2,
//     circleArray = [],
//     NumOfCircles = 100;

// canvas.width = innerWidth;
// canvas.height = innerHeight;

// // Create multi color circles
// var colorArray = [
//     '#EEEEC6',
//     // '#00fff6',
//     // '#ffea00',
//     // '#f609ff',
//     // '#ff4e00'
// ];
// // Function for creating circle
// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//     this.radius = radius;

//     // Create function for animte circle
//     this.update = function () {
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy;
//         this.draw();
//     }
//     // Create function for draw circle
//     this.draw = function () {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, TWO_PI, false);
//         c.fillStyle = this.color;
//         c.fill();
//         c.closePath();
//     }
// }
// // Run Circle function for creating new circle
// // Create multiple circles
// for (var i = 0; i < NumOfCircles; i++) {
//     var radius = (Math.random() * 3) + 1; // Random circle size
//     var x = Math.random() * (innerWidth - radius * 2) + radius; // Random X Position
//     var y = Math.random() * (innerHeight - radius * 2) + radius; // Random Y position
//     var dx = (Math.random() - 0.5) * 2; // Random X velocity
//     var dy = (Math.random() - 0.5) * 2; // Random Y velocity
//     circleArray.push(new Circle(x, y, dx, dy, radius)); // Create new circle
// }


// // Function for animte canvas elements
// function animat() {
//     requestAnimationFrame(animat);
//     c.clearRect(0, 0, innerWidth, innerHeight);

//     for (var i = 0; i < circleArray.length; i++) {
//         circleArray[i].update();
//     }
// }

// animat();


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






