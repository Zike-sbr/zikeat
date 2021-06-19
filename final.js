// the carousel

let slidePosition = 0;
const slides = document.getElementsByClassName('carouselpic');
const totalSlides = slides.length;

document.getElementById('next-button')
    .addEventListener("click", function() {
        moveToNextSlide();
    })
document.
    getElementById('prev-button')
    .addEventListener("click", function() {
        moveToPrevSlide();
    })

function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('picone');
        slide.classList.add('.carouselpic--hidden');
    }

    slides[slidePosition].classList.add('picone')
}

function moveToNextSlide() {
    if (slidePosition===totalSlides - 1) {
        slidePosition = 0;
    } else{
        slidePosition++;
    }
    updateSlidePosition()
}
function moveToPrevSlide() {
    if (slidePosition===0) {
        slidePosition = totalSlides - 1;
    } else{
        slidePosition--;
    }
    updateSlidePosition()
}
// setTimeout

//signup part

// validate the email adress


// function validateEmail(){
// var x=document.forms["loginForm"]["email"].value;
// var atpos=x.indexOf("@");
// var dotpos=x.lastIndexOf(".");

// var name = document.loginForm.name.value
//    if (name.length==0)
//     return alert(`name is required`)

// var password = document.loginForm.password.value
// if (password.length<8)
//     return alert(`password length should more than 8`)

// if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
// alert("Please enter a valid email address.");
// return false;
// }

// }



//create an account 


function created(e){
    
}

document.getElementById("done").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("test");
    alert("Your accound has been created succesfully");
})
// calling

// function calling(){
    
// }

// keep it for later