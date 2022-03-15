let slidecount = 0;

// // mannual
// controler

// function control(n){
//     slidecount += n;
//     slideshow(slidecount);
// }

// // display function
// function slideshow(count) {
//     let slide = document.getElementsByClassName("slide");

//     if(count == slide.length){
//         count = 0;
//         slidecount = 0;
//     }
//     if(count < 0){
//         slidecount = slide.length - 1;
//         count = slide.length - 1;
//     }
//     for(let y of slide){
//         y.style.display = "none";
//     }
//     slide[count].style.display = "block";
// }
// slideshow(slidecount);

// automatic function
function slideshowauto() {
    let slide = document.getElementsByClassName("slide");
    for(let y of slide){
        y.style.display = "none";
    }
    slidecount++;
    if(slidecount > slide.length){
        slidecount = 1;
    }
    slide[slidecount - 1].style.display = "block";
    setTimeout(slideshowauto, 1000);
}
slideshowauto();

