

const imgs = document.querySelectorAll(".img");
// console.log(imgs);
// console.log(imgs.length);

// const img = document.getElementsByClassName(".img");
// console.log(img);
document.getElementById("nxtbtn").onclick = function() {myFunction()};
var index=0;
// console.log(imgs[3]);

function myFunction() {
   if(index==imgs.length-1){
    index=0
    const mainImg=document.getElementById("main_img");
    mainImg.style.display = "block";
    mainImg.src = imgs[index].src;
   }
   const mainImg=document.getElementById("main_img");
    mainImg.style.display = "block";
    mainImg.src = imgs[index + 1].src;
    index++;

  }

  document.getElementById("prevbtn").onclick = function() {myFunction1()};

//   document.getElementById("prevbtn").onclick = () => myFunction1();
  function myFunction1() {

    if(index==0){
     index=imgs.length-1
     const mainImg=document.getElementById("main_img");
     mainImg.style.display = "block";
     mainImg.src = imgs[index].src;
    }
    const mainImg=document.getElementById("main_img");
     mainImg.style.display = "block";
     mainImg.src = imgs[index - 1].src;
     index--;
 
   }


//    var imgs = document.getElementsByClassName("img");
   for (var i = 0; i < imgs.length; i++) {
    console.log(imgs)
     imgs[i].addEventListener("click", function(e) {
        console.log("hai darling");
        const mainImg=document.getElementById("main_img");
        console.log(e.target.id)
        console.log(imgs);
        console.log(imgs[e.target.id]);
        mainImg.style.display = "block";
        mainImg.src = imgs[e.target.id].src;
     });
   }

// for (var i = 0; i < imgs.length; i++) {
//     (function(index) {
//       imgs[index].addEventListener("click", function() {
//         console.log("hai darling");
//         const mainImg = document.getElementById("main_img");
//         console.log(imgs[index]);
//         mainImg.style.display = "block";
//         mainImg.src = imgs[index].src;
//       });
//     })(i);
    
//   }





