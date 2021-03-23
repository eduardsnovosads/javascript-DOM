// Your JavaScript goes here.
const secondFilms = document.querySelector(".second_five");
let liTag = document.querySelector(".second_five").querySelectorAll("li");

secondFilms.style.display = "none"; 

function toggle(){
    if(secondFilms.style.display === "none"){
        secondFilms.style.display = "block"; 
        
        var i;
        for(i = 0; i < liTag.length; i++){
            liTag[i].style.display = "block";                 
        }

    }
    else{
        secondFilms.style.display = "none"; 

        var i;
        for(i = 0; i < liTag.length; i++){
            liTag[i].style.display = "none";                 
        }
    }

}
