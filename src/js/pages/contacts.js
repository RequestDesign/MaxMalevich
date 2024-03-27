import $ from "jquery";
import Swiper from 'swiper';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + 'px';
}

if($('.contacts__blocks').length) {
    let block

    function contactsBlock() {
        const cards = document.querySelectorAll('.contacts__block')
        if (screen.width < 769) {
            cards.forEach(card => {
                card.classList.add('swiper-slide')
            })
            block = new Swiper('.contacts__blocks', {
                modules: [Pagination],
                slidesPerView: 1,
                pagination: {
                    el: ".contacts__blocks-pagination",
                },
            });
        } else {
            cards.forEach(card => {
                card.classList.remove('swiper-slide')
            })
        }
    }
    
    contactsBlock();
    
    $(window).resize(function () {
        contactsBlock();
    });
}