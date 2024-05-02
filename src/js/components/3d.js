// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'DOMContentLoaded,load,resize' });

// const slidesEl = document.querySelectorAll('.hero__slide');

// if (slidesEl.length > 0) {
// 	const slidesArr = gsap.utils.toArray(slidesEl);
// 	console.log(slidesEl, slidesEl.length * slidesEl[0].clientHeight);

// 	const timeSlides = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.hero__container',
// 			start: 'top top',
// 			end: () => slidesEl.length * slidesEl[0].clientHeight + ' 100%',
// 			pin: true,
// 			scrub: 2,
// 			snap: {
// 				snapTo: 1 / (slidesEl.length - 1),
// 				duration: 1.5,
// 				delay: 0.0,
// 				inertia: false,
// 				ease: 'none',
// 			},
// 		},
// 	});

// 	// const timeLineSlides = gsap.timeline({
// 	// 	scrollTrigger: {
// 	// 		trigger: document.querySelector('.hero__container').parentElement,
// 	// 		start: 'top top',
// 	// 		end: () => slidesEl.length * slidesEl[0].clientHeight + ' 100%',
// 	// 		scrub: 2,
// 	// 	},
// 	// });

// 	slidesArr.forEach((item, id) => {
// 		const img = item.querySelector('img');
// 		const text = item.querySelector('.hero__text');
// 		if (id !== slidesArr.length - 1) {
// 			gsap.to(img, {
// 				scale: 2,
// 				scrollTrigger: {
// 					trigger: item,
// 					start: () => id * slidesEl[0].clientHeight + ' top',
// 					end: () => (id + 1) * slidesEl[0].clientHeight + ' top',
// 					scrub: 2,
// 				},
// 			});
// 			gsap.to(text, {
// 				scale: 5,
// 				scrollTrigger: {
// 					trigger: item,
// 					start: () => id * slidesEl[0].clientHeight + ' top',
// 					end: () => (id + 1) * slidesEl[0].clientHeight + ' top',
// 					scrub: 2,
// 				},
// 			});
// 		} else {
// 			// gsap.to(item, {
// 			// 	opacity: 0,
// 			// 	scrollTrigger: {
// 			// 		trigger: item,
// 			// 		start: () => (id + 1) * slidesEl[0].clientHeight - (slidesEl[0].clientHeight - 10) + ' top',
// 			// 		end: () => (id + 1) * slidesEl[0].clientHeight - (slidesEl[0].clientHeight - 10) + ' bottom',
// 			// 		scrub: 3,
// 			// 		markers: true,
// 			// 		onEnter: () => {
// 			// 			gsap.to(item, { duration: 2, scrollTo: { y: item.offsetTop + item.offsetHeight }, ease: 'power2.inOut' });
// 			// 		},
// 			// 	},
// 			// });
// 		}
// 		gsap.to(item, {
// 			zIndex: id * -1,
// 		});
// 		gsap.to(item, {
// 			opacity: 0,
// 			scrollTrigger: {
// 				trigger: item,
// 				start: () => (id + 1) * slidesEl[0].clientHeight - 200 + ' top',
// 				end: () => (id + 1) * slidesEl[0].clientHeight + ' top',
// 				scrub: 3,
// 				markers: true,
// 			},
// 		});
// 	});
// }

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

const swiper = new Swiper('.kitchen-baner_swiper', {
	modules: [Pagination, EffectCreative],
	allowTouchMove: false,
	speed: 5000,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: true,
	},
	effect: "creative",
	creativeEffect: {
        prev: {
		  opacity: 0,
		  scale: 3,
        },
        next: {
		  opacity: 0,
		  scale: 1,
        },
    },
	pagination: {
		el: '.kitchen-baner_pagination',
	},
});