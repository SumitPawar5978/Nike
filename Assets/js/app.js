$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fas fa-chevron-right btn"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fas fa-chevron-left btn"></i></button>',
    responsive: [{
        breakpoint: 800,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    },     
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});

$('.multiple-items-2').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fas fa-chevron-right btn"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fas fa-chevron-left btn"></i></button>',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



function openModal() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

function closeModal() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.hide();
}

// Trigger openModal() function when the body is loaded
document.body.onload = openModal;




function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePasswordButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.classList.remove("fa-eye");
        togglePasswordButton.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePasswordButton.classList.remove("fa-eye-slash");
        togglePasswordButton.classList.add("fa-eye");
    }
}


// $(".filter a").click(function (e) {
// e.preventDefault();
// var a = $(this).attr("href");
// a = a.substr(1);
// $(".sets a").each(function () {
//   if (!$(this).hasClass(a) && a != "") $(this).addClass("hide");
//   else $(this).removeClass("hide");
// });



// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("btncontainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
// var current = document.getElementsByClassName("btn-active");
// current[0].className = current[0].className.replace(" btn-active", "");
// this.className += " btn-active";

// }
// });


// let imgs = document.querySelectorAll("img");
// let count;
// imgs.forEach((img, index) => {
// img.addEventListener("click", function (e) {
//   if (e.target == this) {
//     count = index;
//     let openDiv = document.createElement("div");
//     let imgPreview = document.createElement("img");
//     let butonsSection = document.createElement("div");
//     butonsSection.classList.add("butonsSection");
//     let closeBtn = document.createElement("button");
//     let nextBtn = document.createElement("button");
//     let prevButton = document.createElement("button");
//     prevButton.innerText = "Previous";
//     nextBtn.innerText = "Next";

//     nextBtn.classList.add("nextButton");
//     prevButton.classList.add("prevButton");
//     nextBtn.addEventListener("click", function () {
//       if (count >= imgs.length - 1) {
//         count = 0;
//       } else {
//         count++;
//       }

//       imgPreview.src = imgs[count].src;
//     });

//     prevButton.addEventListener("click", function () {
//       if (count === 0) {
//         count = imgs.length - 1;
//       } else {
//         count--;
//       }

//       imgPreview.src = imgs[count].src;
//     });

//     closeBtn.classList.add("closeBtn");
//     closeBtn.innerText = "Close";
//     closeBtn.addEventListener("click", function () {
//       openDiv.remove();
//     });

//     imgPreview.classList.add("imgPreview");
//     imgPreview.src = this.src;

//     butonsSection.append(prevButton, nextBtn);
//     openDiv.append(imgPreview, butonsSection, closeBtn);

//     openDiv.classList.add("openDiv");

//     document.querySelector("body").append(openDiv);
//   }
// });
// });



// $(document).ready(function(){
//     $(".list").click(function(){
//       const dataValue = $(this).attr("data-filter")
//       if(dataValue == "all-items"){
//         $(".item").show()
//       }else{
//         $(".item").not("." + dataValue).hide()
//         $(".item").filter("." + dataValue).show()
//       }
//     }) 
//   })
//   $(".list").click(function(){
//     $(this).addClass("active").siblings().removeClass("active")
//   })








