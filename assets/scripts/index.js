
let heroCards = document.querySelectorAll('.heroesBox__card');

class HeroCard {
    constructor(img, name) {
        this.img = img;
        this.name = name;
    }
}
let heroes = [
    new HeroCard("./assets/images/mainpage/harry.svg", 'Harry Potter'),
    new HeroCard("./assets/images/mainpage/lord.svg", 'Lord Voldemort'),
    new HeroCard("./assets/images/mainpage/hermione.svg", 'Hermione'),
    new HeroCard("./assets/images/mainpage/ron.svg", 'Ron Weasley'),
];

$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        easing: 'ease',
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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

});
let pHover = document.querySelectorAll('.galleryText_size');
console.log(pHover);
for (p of pHover) {
    p.addEventListener('mouseover', function () {
        p.classList.add('galleryText_sizeHover');
    });
    p.addEventListener('mouseover', function () {
        p.classList.add('galleryText_size');
    });
}
$(function () {
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html($data_tooltip)
            .css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX + 5
            })
            .show();
    }).mouseout(function () {
        $("#tooltip").hide()
            .html("")
            .css({
                "top": 0,
                "left": 0
            });
    });
});
$(".mainpage").fadeIn(1000);
let instaFooter = document.getElementById('insta');
let whatsFooter = document.getElementById('whats');
instaFooter.addEventListener('mouseover', e => instaFooter.src = "./assets/images/footer/insta.svg");
instaFooter.addEventListener('mouseout', e => instaFooter.src = "./assets/images/footer/image_41.png");
whatsFooter.addEventListener('mouseover', e => whatsFooter.src = "./assets/images/footer/whats.svg");
whatsFooter.addEventListener('mouseout', e => whatsFooter.src = "./assets/images/footer/image_40.png");




