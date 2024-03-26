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
