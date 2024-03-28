import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const rem = function (rem) {
	if (window.innerWidth > 768) {
		return 0.005208335 * window.innerWidth * rem;
	} else {
		// где 375 это ширина мобильной версии макета
		return (100 / 375) * (0.05 * window.innerWidth) * rem;
	}
};

document.addEventListener('DOMContentLoaded', () => {
	try {
		lettersSwiper()
	} catch {}
});



function lettersSwiper() {
	const pagBox = document.querySelector('.letters-slider__pagination-box');
	const pag = document.querySelector('.letters-slider__pagination');
	const curSlide = pagBox.querySelector('.pag-cur');
	const lastSlide = pagBox.querySelector('.pag-last');

	const swiper = new Swiper('.letters-slider__swiper', {
		slidesPerView: 1,
		spaceBetween: rem(2),
		loop: true,
		pagination: {
			el: '.letters-slider__pagination',
			type: 'bullets',
		},
        navigation: {
			prevEl: '.letters-slider__navigation .navigation-prev',
			nextEl: '.letters-slider__navigation .navigation-next',
		},
		breakpoints: {
			769: {
				slidesPerView: 3,
				spaceBetween: rem(4.8),
				slidesPerGroup: 1,
				pagination: {
					type: 'progressbar',
				},
			},
            385: {
                slidesPerView: 1,
                pagination: {
					type: 'progressbar',
				},
            }
		},
		on: {
			init: swiper => {
				curSlide.textContent = `0${swiper.slides[swiper.activeIndex].getAttribute('data-num')}`;
				lastSlide.textContent = `0${swiper.slides.length}`;
			},
			slideChange: function (swiper) {
				curSlide.textContent = `0${swiper.slides[swiper.activeIndex].getAttribute('data-num')}`;
			},
		},
	});
}
