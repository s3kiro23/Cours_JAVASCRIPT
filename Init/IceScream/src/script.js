function color(z){
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementById("3").style.backgroundColor=b;
}

let count = 2
function miam(){
    if (count == 2){
        document.getElementById("4").removeAttribute("hidden");
        count-=1;
    }
    else {
        document.getElementById("5").removeAttribute("hidden");
        console.log(count)
    }
}