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
		disignersBannerSwiper();
	} catch {}
	try {
		magazinesSwiper();
	} catch {}
});

function disignersBannerSwiper() {
	const sliders = document.querySelectorAll('.designers-banner__swiper-slide');
	let rows = Math.ceil(sliders.length / 2);
	const swiper = new Swiper('.designers-banner__swiper', {
		slidesPerView: 1,
		spaceBetween: rem(2),
		grid: {
			rows: 1,
		},
		pagination: {
			el: '.designers-banner__swiper-pagination',
		},
		breakpoints: {
			769: {
				slidesPerView: 4,
				spaceBetween: 0,
				grid: {
					rows: rows,
				},
			},
		},
	});
}

function magazinesSwiper() {
	const swiper = new Swiper('.magazines__swiper', {
		slidesPerView: 1,
		spaceBetween: rem(2),
		pagination: {
			el: '.magazines__swiper-pagination',
		},
		breakpoints: {
			769: {
				slidesPerView: 4,
				spaceBetween: rem(4.8),
				slidesPerGroup: 1,
			},
			385: {
				slidesPerView: 2,
				spaceBetween: rem(2),
				slidesPerGroup: 2,
			}
		},
	});
}