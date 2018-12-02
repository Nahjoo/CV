var anim = document.querySelector("i");
anim.style.position = "absolute";
var postop = 0;
var dir = -1;

function animation(){
    if(postop == 0){
        dir = 1;
    }else if (postop == 30){
        dir = -1; 
    }
    postop += 2 * dir;
    anim.style.top = `${postop}px`;
    requestAnimationFrame(animation, 1000);
}

requestAnimationFrame(animation, 1000);

anim.addEventListener("click", change);

function changenge(){

}





