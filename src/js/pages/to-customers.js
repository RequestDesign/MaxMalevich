import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
	try {
        toCustomersBannerSwiper ()
	} catch {}

});

function toCustomersBannerSwiper () {
    const swiperList = new Swiper('.to-customers-banner__swiper', {
		slidesPerView: 'auto',
		spaceBetween: rem(4),
		loop: true,
        grabCursor: true,     
		centeredSlides: true,
		breakpoints: {
			1201: {
                spaceBetween: rem(4.8),
                centeredSlides: true,
			},
			768: {
                spaceBetween: rem(4),
                centeredSlides: true,
			},
           
		},
		
	});
}