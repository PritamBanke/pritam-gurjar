// // // var audio = document.querySelector("audio");
// // // var play = document.querySelector("play");
// // // var pause = documet.querySelector('pause');

// // // play.addEventListener('click', function () {
// // //     audio.play();
// // // pause.classList.remove("hidden");
// // // play.classList.add("hidden");

// // // });

// // // pause.addEventListener('click', function () {
// // //     audio.play();
// // // play.classList.remove("hidden");
// // // pause.classList.add("hidden");

// // // });

// // var container = "";

// // for (var i = 1; i < 97; i++) {
    
// //     var num = Math.floor(Math.random() * 100);

// //     var red = Math.floor(Math.random() * 256);
// //     var green = Math.floor(Math.random() * 256);
// //     var blue = Math.floor(Math.random() * 256);

//     // container += <div style="backgraund-color: rgb(${red},${green},${blue});"  
//     // class="bubble w-20 h-20 text-3xl flex items-center rounded-full">${num}</div> ;
// // }
// // document.querySelector(".bubbles").innerHTML = container;

// var container ="";
// for(var i=0;i<n;i++){
//     var bubble = document.createElement("div");
//     bubble.textContent = Math.floor(Math.random()*100);
   
        
//     bubble.classList.add(
//         "w-20",
//         "h-20",
//         "bg-green-500",
//         "text-3xl",
//         "flex",
//         "items-center",
//         "justify-center",
//         "rounded-full",
//         "cursor-pointer"
//     )
//     document.querySelector(".bubbles").appendChild(bubble);
//     bubble.addEventListener("click",function(){
//         bubble.classList.add("bg-white");
//     })
// }


var container = "";
for (var i = 0; i < 104; i++) {
    var bubble = document.createElement("div");
    bubble.textContent = Math.floor(Math.random() * 100);

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    bubble.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    bubble.classList.add(
        "w-20",
        "h-20",
        "text-3xl",
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "cursor-pointer"
    );

    document.querySelector(".bubbles").appendChild(bubble);

    bubble.addEventListener("click", function () {
        bubble.classList.add("bg-white");
    });
}
