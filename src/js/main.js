let privacyModal = document.querySelector('.section__modal--privacy');
let privacyModalBtn = document.querySelector('.modal__button--privacy');
let privacyCloseBtn = document.querySelector('.privacy__close');
let privacyCloseBtn2 = document.querySelector('.privacy__close2');

let termsModal = document.querySelector('.section__modal--terms');
let termsModalBtn = document.querySelector('.modal__button--terms');
let termsCloseBtn = document.querySelector('.terms__close');
let termsCloseBtn2 = document.querySelector('.terms__close2');

let faqModal = document.querySelector('.section__modal--faq');
let faqModalBtn = document.querySelector('.modal__button--faq');
let faqCloseBtn = document.querySelector('.faq__close');
let faqCloseBtn2 = document.querySelector('.faq__close2');


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

privacyModalBtn.onclick = function () {
    privacyModal.style.display = "block";
    privacyModal.classList.add("showModal");
};

privacyCloseBtn.onclick = function () {
    privacyModal.style.display = "none";
};
privacyCloseBtn2.onclick = function () {
    privacyModal.style.display = "none";
};




termsModalBtn.onclick = function () {
    termsModal.style.display = "block";
    termsModal.classList.add("showModal");
};
termsCloseBtn.onclick = function () {
    termsModal.style.display = "none";
};
termsCloseBtn2.onclick = function () {
    termsModal.style.display = "none";
};

faqModalBtn.onclick = function () {
    faqModal.style.display = "block";
    faqModal.classList.add("showModal");
};
faqCloseBtn.onclick = function () {
    faqModal.style.display = "none";
};
faqCloseBtn2.onclick = function () {
    faqModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == privacyModal) {
        privacyModal.style.display = "none";
    } else if (event.target == termsModal) {
        termsModal.style.display = "none";
    } else if (event.target == faqModal) {
        faqModal.style.display = "none";
    }
};