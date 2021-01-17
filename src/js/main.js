let modal = document.querySelector('.section__modal');
let modalBtn = document.querySelector('.modal__button');
let closeBtn = document.querySelector('.close');
let closeBtn2 = document.querySelector('.close2');


$(document).ready(function () {
    let scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 300)
    })
});



$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-brand");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav__link");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

modalBtn.onclick = function () {
    modal.style.display = "block";
    modal.classList.add("showModal");
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};
closeBtn2.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}