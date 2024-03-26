import Swiper from 'swiper';
import { Navigation, EffectCreative, Pagination, EffectCoverflow, EffectFade, Thumbs } from 'swiper/modules';

function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + 'px';
}

const sliders = document.querySelectorAll('.swiper');

sliders.forEach(slider => {
	const nav = slider.closest('.swiper').querySelector('.navigation');
	const pag = slider.closest('.swiper').querySelector('.pagination');
	const prevEl = nav.querySelector('.navigation-prev');
	const nextEl = nav.querySelector('.navigation-next');
	const curSlide = pag.querySelector('.pag-cur');
	const lastSlide = pag.querySelector('.pag-last');
	const lineSVG = pag.querySelector('svg path');
	const svg = pag.querySelector('svg');
	new Swiper(slider, {
		modules: [Navigation, Pagination],
		slidesPerView: 1,
		spaceBetween: 20,
		allowTouchMove: true,
		navigation: {
			prevEl,
			nextEl,
		},
		pagination: {
			el: slider.querySelector('.pagination') || false,
		},
		on: {
			init: swiper => {
				curSlide.textContent = `0${swiper.activeIndex + 1}`;
				lastSlide.textContent = `0${swiper.slides.length}`;
				const svgWidth = svg.clientWidth;
				const oneSlideWidth = svgWidth / swiper.slides.length;
				console.log(oneSlideWidth, svgWidth);
				lineSVG.setAttribute('d', `M0 1H${oneSlideWidth}`);
			},
			slideChange: function (swiper) {
				curSlide.textContent = `0${swiper.activeIndex + 1}`;
				const svgWidth = svg.clientWidth;
				const oneSlideWidth = svgWidth / swiper.slides.length;
				const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
				console.log(oneSlideWidth, svgWidth);
				lineSVG.setAttribute('d', `M0 1H${lineWidth}`);
				// Находим ближайшую svg этой полоски и берем ее path
				// path d="M0 1H62.4" stroke="#D3965F" stroke-width="1.4"
				// Далее у path нужно взять атрибут d - и у него поменять последние цифры после H,
				// чтобы отрисовать линию зависящую от слайдов и менять ее относительно текущего
			},
		},
		breakpoints: {
			769: {
				pagination: false,
			},
		},
	});
});

const furnitureSlider = document.querySelector('.furniture__slider');

if (furnitureSlider) {
	new Swiper(furnitureSlider, {
		modules: [Navigation, Pagination, EffectCreative],
		slidesPerView: 1,
		// spaceBetween: `${remToPx(10)}rem`,
		speed: 1200,
		allowTouchMove: true,
		// navigation: {
		// 	prevEl: '.barbershop-advantages__slider-navigation-btn--prev',
		// 	nextEl: '.barbershop-advantages__slider-navigation-btn--next',
		// },
		// pagination: {
		// 	type: 'fraction',
		// 	el: '.barbershop-advantages__slider-fraction',
		// },
		on: {
			slideChange: swiper => {
				const secondAfterNextSlide = swiper.activeIndex + 3;
				console.log('secondAfterNextSlide: ', secondAfterNextSlide, swiper.slides[secondAfterNextSlide]);
				// swiper.slides[secondAfterNextSlide] ? (swiper.slides[secondAfterNextSlide].style.transform = `translate(-43rem, -27rem)`) : null;
			},
		},
		effect: 'creative',
		creativeEffect: {
			limitProgress: 2,

			prev: {
				translate: ['0', '20.1rem', 0],
				opacity: 0,
				zIndex: -1,
			},
			next: {
				translate: ['54.6rem', '-8.5rem', 0],
			},
		},
		breakpoints: {
			768: {
				allowTouchMove: true,
				slidesPerView: 3,
				// spaceBetween: `${remToPx(10)}rem`,
				creativeEffect: {
					limitProgress: 4,
					progressMultiplier: 1,
					prev: {
						translate: ['0', '20.1rem', 0],
						opacity: 0,
						zIndex: -1,
					},
					next: {
						translate: ['53.6rem', '-8.5rem', 0],
					},
				},
			},
		},
	});
}

const facadesNext = document.querySelector('.authors__facades .navigation-next');
const facadesPrev = document.querySelector('.authors__facades .navigation-prev');

const navExamples = document.querySelector('.examples .navigation');
console.log('window.innerWidth: ', window.innerWidth);

var swiper = new Swiper('.examples__slider', {
	modules: [EffectCoverflow, Navigation, Pagination],
	effect: window.screen.width > 769 ? 'coverflow' : 'slide',
	grabCursor: true,
	centeredSlides: true,
	loop: true,
	spaceBetween: remToPx(2),
	slidesPerView: 1,
	navigation: {
		prevEl: navExamples.querySelector('.navigation-prev'),
		nextEl: navExamples.querySelector('.navigation-next'),
	},
	coverflowEffect: {
		rotate: 80,
		stretch: -30,
		depth: 300,
		scale: 0.8,
		modifier: 0.5,

		slideShadows: true,
	},
	pagination: {
		el: '.examples-pag',
	},
	breakpoints: {
		769: {
			spaceBetween: 0,
			slidesPerView: 'auto',
			initialSlide: 3,
		},
	},
});

let swiper3 = null;
if (window.innerWidth < 769) {
	swiper3 = new Swiper('.authors__selected--mob', {
		modules: [EffectFade],
		effect: 'fade',
		slidesPerView: 'auto',
		spaceBetween: remToPx(2),
		allowTouchMove: false,
		speed: 1000,
		loop: true,
	});
} else {
	swiper3 = new Swiper('.authors__selected', {
		modules: [EffectFade],
		effect: 'fade',
		slidesPerView: 'auto',
		spaceBetween: remToPx(2),
		allowTouchMove: false,
		speed: 1000,
		loop: true,
	});
}

const swiper2 = new Swiper('.authors__project', {
	modules: [EffectFade, Thumbs],
	effect: 'fade',
	slidesPerView: 'auto',
	spaceBetween: remToPx(2),
	allowTouchMove: false,
	speed: 1000,
	loop: true,
	thumbs: {
		swiper: swiper3,
	},
});

const swiper1 = new Swiper('.authors__facades-slider', {
	modules: [Pagination, Thumbs],
	slidesPerView: 'auto',
	spaceBetween: remToPx(5.4),
	allowTouchMove: true,
	speed: 1000,
	pagination: {
		el: '.authors__facades-pag',
	},
	loop: true,
	thumbs: { swiper: swiper2 },
	breakpoints: {
		769: {
			spaceBetween: remToPx(2),
			allowTouchMove: false,
		},
	},
});

const btnZoom = document.querySelectorAll('.authors__selected-zoom');
btnZoom.forEach(btn => {
	btn.addEventListener('click', e => {
		console.log(e.target);
		const img = e.target.nextElementSibling;
		console.log(img);
		img.classList.toggle('zoomed');
	});
});

facadesPrev.addEventListener('click', () => {
	swiper1.slidePrev();
	swiper2.slidePrev();
	swiper3.slidePrev();
});

facadesNext.addEventListener('click', () => {
	swiper1.slideNext();
	swiper2.slideNext();
	swiper3.slideNext();
});

const swiperNews = new Swiper('.news__slider', {
	slidesPerView: 'auto',
	spaceBetween: remToPx(0.8),
	loop: true,
	loopedSlides: 4,
	initialSlide: 3,
	centeredSlides: false,
	breakpoints: {
		769: {
			spaceBetween: remToPx(4.8),
		},
	},
});
