import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
	portfolioSwipers();

	document.querySelector('.portfolio-head') && categories();
});

function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + 'px';
}

const categories = () => {
	const categoriesListContainer = document.querySelector('.portfolio-head__swiper .swiper-wrapper'),
		categoriesList = categoriesListContainer.querySelectorAll('.portfolio-head__swiper-slide');

	categoriesListContainer.addEventListener('click', e => {
		const target = e.target;

		if (target.classList.contains('portfolio-head__swiper-slide')) {
			categoriesList.forEach(category => {
				category.classList.remove('active');
			});

			target.classList.add('active');
		}
	});
};

const portfolioSwipers = () => {
	if (document.querySelector('.portfolio-head__categories')) {
		const categoriesContainer = document.querySelector('.portfolio-head__categories'),
			prevBtn = categoriesContainer.querySelector('.porfolio-head__swiper-prev'),
			nextBtn = categoriesContainer.querySelector('.porfolio-head__swiper-next');

		const categoriesSwiper = new Swiper('.portfolio-head__swiper', {
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			spaceBetween: 18,
			freeMode: true,

			on: window.screen.width > 1200 && {
				slideChange: function (swiper) {
					if (!prevBtn.classList.contains('swiper-button-disabled')) {
						categoriesContainer.style.paddingLeft = '4.2rem';
						swiper.update();
					}

					if (!nextBtn.classList.contains('swiper-button-disabled')) {
						categoriesContainer.style.paddingLeft = '4.2rem';
						swiper.update();
					}
				},
			},

			breakpoints: {
				1200: {
					freeMode: false,
				},
			},

			navigation: {
				prevEl: prevBtn,
				nextEl: nextBtn,
			},
		});
	}

	if (document.querySelector('.portfolio-list__swiper')) {
		const sliders = document.querySelectorAll('.portfolio-list__swiper');

		sliders.forEach(slider => {
			const parentItem = slider.closest('.portfolio-list__item'),
				nav = parentItem.querySelector('.navigation'),
				pag = parentItem.querySelector('.pagination'),
				prevEl = nav.querySelector('.navigation-prev'),
				nextEl = nav.querySelector('.navigation-next'),
				curSlide = pag.querySelector('.pag-cur'),
				lastSlide = pag.querySelector('.pag-last'),
				lineSVG = pag.querySelector('svg path'),
				svg = pag.querySelector('svg'),
				svgWidth = svg.querySelector('line').getAttribute('x2');

			new Swiper(slider, {
				slidesPerView: 'auto',
				slidesPerGroup: 1,
				effect: 'coverflow',
				centeredSlides: true,

				coverflowEffect: {
					rotate: 0,
					stretch: 170,
					depth: 150,
					modifier: 1,
					slideShadows: true,
				},

				breakpoints: {
					1586: {
						coverflowEffect: {
							stretch: 200,
							depth: 300,
						},
					},
					1345: {
						coverflowEffect: {
							stretch: 200,
							depth: 236.5,
						},
					},
					1166: {
						coverflowEffect: {
							stretch: 200,
							depth: 170,
						},
					},
					996: {
						coverflowEffect: {
							stretch: 150,
							depth: 229,
						},
					},
					811: {
						coverflowEffect: {
							stretch: 100,
							depth: 310,
						},
					},
					769: {
						coverflowEffect: {
							stretch: 50,
							depth: 425,
						},
					},
				},

				on: {
					init: swiper => {
						const oneSlideWidth = svgWidth / swiper.slides.length;

						curSlide.textContent = `0${swiper.activeIndex + 1}`;
						lastSlide.textContent = `0${swiper.slides.length}`;

						lineSVG.setAttribute('d', `M0 1H${oneSlideWidth}`);
					},
					slideChange: function (swiper) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;

						curSlide.textContent = `0${swiper.activeIndex + 1}`;

						lineSVG.setAttribute('d', `M0 1H${lineWidth}`);
						// Находим ближайшую svg этой полоски и берем ее path
						// path d="M0 1H62.4" stroke="#D3965F" stroke-width="1.4"
						// Далее у path нужно взять атрибут d - и у него поменять последние цифры после H,
						// чтобы отрисовать линию зависящую от слайдов и менять ее относительно текущего
					},
				},

				pagination: {
					el: window.screen.width > 767 ? slider.querySelector('.pagination') : '.portfolio-list__swiper-pagination',
				},

				navigation: {
					prevEl,
					nextEl,
				},
			});
		});
	}
};
