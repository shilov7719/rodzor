// function slidersDesc() {
//     var swiper = new Swiper('.desc .swiper-container', {
//         speed: 800,
//         slidesPerView: 3,
//         spaceBetween: 10,
//         // autoplay: true,
//         loop: true,
//         navigation: {
//             nextEl: '.desc .swiper-button-next',
//             prevEl: '.desc .swiper-button-prev',
//         },
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 120
//             },
//             768: {
//                 slidesPerView: 2,
//                 // spaceBetween: 0
//             },
//             992: {
//                 slidesPerView: 3,

//             },
//         }
//     })
// }

function slidersWhy() {
    var swiper = new Swiper('.why .swiper-container', {
        speed: 800,
        slidesPerView: 4,
        spaceBetween: 10,
        // autoplay: true,
        loop: true,
        navigation: {
            nextEl: '.why .swiper-button-next',
            prevEl: '.why .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 120
            },
            768: {
                slidesPerView: 2,
                // spaceBetween: 0
            },
            992: {
                slidesPerView: 4,
                // spaceBetween: 0
            },
            // 1150: {
            //     slidesPerView: 4,
            //     // spaceBetween: 0
            // },
        }
    })
}


function openForm() {
    $(".wrapper").addClass("wrapper-fixed")
    $(".modal-bg").show();
    $(".modal-form").slideDown(200);
}

function openAgree() {
    if ($(".agree-btn").hasClass("agree-btn--2")) {
        $(".modal-form").slideUp(200);
    }
    $(".wrapper").addClass("wrapper-fixed")

    $(".modal-bg").show();
    $(".modal-agree").slideDown(200);
}

function closeForm() {
    $(".modal-bg").hide();
    $(".modal-form").slideUp(200);
    $(".modal-agree").slideUp(200);
    $(".wrapper").removeClass("wrapper-fixed")
}


$(document).ready(function() {
    // slidersDesc();
    slidersWhy();
    let xRadio = $("#range1").val();
    let yRadio = $("#range2").val();
    let zRadio = $("#range3").val();
    let result = (xRadio * 3000) + (yRadio * 4500) + (zRadio * 35000) - 250000;
    $("#result").html(result);






    $(".model__card-btn").click(function() {
        openForm();
    })
    $(".footer__info-btn").click(function() {
        openForm();
    })
    $(".calc__btn").click(function() {
        openForm();
    })
    $(".cities__btn").click(function() {
        openForm();
    })
    $(".modal-form__img").click(function() {
        closeForm();
    })
    $(".modal-bg").click(function() {
        closeForm();
    })
    $(".agree-btn").click(function() {
        openAgree();
    })
    $(".footer__agree").click(function() {
        openAgree();
    })
});






function range(el, max) {
    let range = $(`#${el}`)
    let val = range.val();
    range.siblings('div').text(val)
    let calcX = $("#range1").val()
    let calcY = $("#range2").val()
    let calcZ = $("#range3").val()
    let result = (calcX * 3000) + (calcY * 4500) + (calcZ * 35000) - 250000;
    $("#result").html(result);
    // console.log(calcX)
    console.log(result)
    val = (val / max) * 100;

    // console.log(val);
    range.css({
        'background': "-webkit-linear-gradient(left, #005e92 0%, #005e92 " + val + "%, #F1F3F6 " + val + "%, #F1F3F6 100%)"
    });
}