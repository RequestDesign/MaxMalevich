import $ from 'jquery';

const header = $('.header')
$(document).ready(function () {
	openBurgerMenu();
	headerNav();
});

$(window).resize(function () {
	headerNav();
});

function openBurgerMenu() {
		let menu = $('.burger-menu');
		let button = menu.find('.burger-menu_button', '.burger-menu_lines');
		let links = menu.find('.burger-menu_link');
		let overlay = menu.find('.burger-menu_overlay');
		
		button.on('click', (e) => {
		  e.preventDefault();
		  toggleMenu();
		});
		
		// links.on('click', () => toggleMenu());
		// overlay.on('click', () => toggleMenu());
		
		function toggleMenu(){
		  menu.toggleClass('burger-menu_active');
		  
		  if (menu.hasClass('burger-menu_active')) {
			$('body').css('overlow', 'hidden');
			$('.header').addClass('active')
		  } else {
			$('body').css('overlow', 'visible');
			$('.header').removeClass('active')

		  }
		}
}

function headerNav() {
	let navButtons = $('.header__menu li');
	let navLinks = $('.header__menu li a');
	let navMenus = $('.header__bottom-wrapper');

	navButtons.each(function (index, item) {
		let itemMenu = item.dataset.menu;
		$(item).find('button').length &&
			$(item).on('mouseover', function (e) {
				header.addClass('active')
				e.preventDefault();
				$(navButtons).removeClass('active');
				$(navMenus).removeClass('active');
				setTimeout(() => {
					$(`.${itemMenu}`).addClass('active');
					$(item).addClass('active');
				}, 0);
				if (window.outerWidth <= 768) {
					$('.header__menu-bottom').addClass('active');
					$('.header__menu-top').removeClass('active');
					$('.header__menu-btn').css('display', 'none');
					$('.header__menu-social').css('display', 'none');
					$('.header__burger-btn').removeClass('active');
					$('.header__back-btn').addClass('active');
				}
			});
	});
	if (window.outerWidth <= 768) {
		if ($('.header__back-btn').hasClass('active')) {
			$('.header__menu-btn').css('display', 'flex');
			$('.header__menu-social').css('display', 'none');
		}
		$('.header__back-btn').on('click', function () {
			if ($(this).hasClass('active')) {
				$('.header__menu-bottom').removeClass('active');
				$('.header__menu-top').addClass('active');
				$('.header__menu-btn').css('display', 'flex');
				$('.header__menu-social').css('display', 'flex');
				$('.header__burger-btn').addClass('active');
				$(this).removeClass('active');
			}
		});
	} else {
		$('.header__menu-btn').css('display', 'none');
		$('.header__menu-social').css('display', 'flex');
		navLinks.on('mouseover', () => {
			navButtons.removeClass('active');
			if(header.hasClass('active') && !header.hasClass('closing')) {
				header.addClass('closing')
				setTimeout(() => {
					header.removeClass('active')
					header.removeClass('closing')
				$('.header__bottom-wrapper').removeClass('active');
				}, 600);
			} 
		});
		header.on('mouseleave', () => {
			navButtons.removeClass('active');
			if(!header.hasClass('acitve') && !header.hasClass('closing')) {
				header.addClass('closing')
				setTimeout(() => {
					header.removeClass('active')
					header.removeClass('closing')
				$('.header__bottom-wrapper').removeClass('active');
				}, 600);
			} 
		})
	}
}
