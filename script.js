const text = "Cybersecurity Enthusiast | Penetration Testing Fresher";

let index = 0;

function type(){

document.querySelector(".typing").innerHTML =
text.slice(0,index);

index++;

if(index > text.length){
index = 0;
}

setTimeout(type,100);
}

type();