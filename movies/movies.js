var audio;

var interstellar = new Audio("audio/interstellar.mp3");
var got = new Audio("audio/gameofthrones.mp3");
var dark = new Audio("audio/dark.mp3")
var all = [interstellar,got,dark];
var buttonList = document.querySelectorAll('.card-footer button');
for (let i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", function(){
        matchMusic(this);
    })
}

function matchMusic(trigg){
    trigg.firstElementChild.classList.toggle("fa-circle-pause");
    var a = trigg.firstElementChild;
    console.log(a);
    var image = trigg.parentNode.parentNode.firstElementChild.firstElementChild.alt;

    switch (image) {
        case "interstellar.jpg":
            toogleMusic(interstellar, trigg);
            break;

        case "gameofthrones.jpg":
            toogleMusic(got, trigg);
            break;
        
        case "dark.jpg":
            toogleMusic(dark , trigg);
            break;
    
        default:
            console.log("Sound not found");
    }
}

function toogleMusic(music, btn){
    if (music.paused){
        btn.firstElementChild.innerHtml = '<i class="fa-solid fa-music"></i>';
        for (let i = 0; i < all.length;i++){
            all[i].pause();
        }
        return music.play();
    }
    else{
        btn.firstElementChild.innerHtml = '<i class="fa-solid fa-circle-pause"></i>';
        return music.pause();
    }
    // return music.paused ? music.play() : music.pause();
}

