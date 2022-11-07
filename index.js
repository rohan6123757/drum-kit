let a=document.getElementsByClassName("all");
function shadow(event){
    for(let i=0 ;i<a.length ;i++){
        document.getElementsByClassName(event)[0].classList.add("pressed");
        setTimeout(function(){
            document.getElementsByClassName(event)[0].classList.remove("pressed");
        },100)
        
    }
}

for(let i=0 ;i<a.length ;i++){
    a[i].addEventListener("click",function(){
        let audio=new Audio("sounds/"+a[i].className[0] + ".wav");
        audio.play();
        shadow(a[i].className[0]);
    })
}
document.addEventListener("keypress",function(event){
    let audio=new Audio("sounds/"+ (event.key).toUpperCase() + ".wav");
    audio.play();
    shadow((event.key).toUpperCase());
})
