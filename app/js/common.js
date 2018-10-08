$(function() {

	$('#js-slider').slick({
		dots: true,
		dotsClass: 'slider__dots flex flex--align-center',
		infinite: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev"><svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.628 25.543a18.408 18.408 0 0 0 9.505 10.523 18.374 18.374 0 0 0 14.153.713 18.403 18.403 0 0 0 10.512-9.516 18.435 18.435 0 0 0 .712-14.169.754.754 0 1 0-1.42.507 16.933 16.933 0 0 1-.654 13.016 16.904 16.904 0 0 1-9.656 8.74 16.881 16.881 0 0 1-13.001-.654 16.91 16.91 0 0 1-8.731-9.667 16.933 16.933 0 0 1 .654-13.016 16.904 16.904 0 0 1 9.656-8.74A16.95 16.95 0 0 1 27.793 4.7a.755.755 0 0 0 .772-1.296A18.477 18.477 0 0 0 19.079.777c-2.094 0-4.199.358-6.226 1.081A18.402 18.402 0 0 0 2.34 11.374a18.433 18.433 0 0 0-.712 14.169z" fill="#fff"/><path d="M10.78 19.319c0 .416.338.754.754.754h18.768a.754.754 0 0 0 0-1.509H11.534a.754.754 0 0 0-.754.755z" fill="#fff"/><path d="M16.785 11.428a.755.755 0 0 0-1.066-1.067l-8.415 8.424a.755.755 0 0 0 0 1.067l8.415 8.424a.753.753 0 1 0 1.066-1.067l-7.882-7.89 7.882-7.891z" fill="#fff"/></svg></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next"><svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.199 13.099a18.408 18.408 0 0 0-9.505-10.523 18.375 18.375 0 0 0-14.153-.713 18.403 18.403 0 0 0-10.512 9.515 18.434 18.434 0 0 0-.712 14.17.754.754 0 1 0 1.42-.507 16.933 16.933 0 0 1 .654-13.016 16.904 16.904 0 0 1 9.656-8.74 16.881 16.881 0 0 1 13.001.654 16.91 16.91 0 0 1 8.731 9.666 16.933 16.933 0 0 1-.654 13.016 16.904 16.904 0 0 1-9.655 8.74 16.95 16.95 0 0 1-14.436-1.42.755.755 0 0 0-.772 1.296 18.478 18.478 0 0 0 9.487 2.627c2.095 0 4.2-.357 6.227-1.08a18.402 18.402 0 0 0 10.511-9.516 18.433 18.433 0 0 0 .712-14.17z" fill="#fff"/><path d="M27.048 19.323a.754.754 0 0 0-.754-.754H7.526a.754.754 0 0 0 0 1.509h18.768a.754.754 0 0 0 .754-.755z" fill="#fff"/><path d="M21.042 27.214a.755.755 0 0 0 1.066 1.067l8.415-8.424a.755.755 0 0 0 0-1.067l-8.415-8.425a.753.753 0 1 0-1.066 1.067l7.882 7.891-7.882 7.891z" fill="#fff"/></svg></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {}
		}]
	});

	$('#js-last-news').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dotsClass: 'slider__dots slider__dots--last-news flex flex--align-center',
		infinite: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev slider__arrow--last-news-prev"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15.76" cy="16.041" r="15" stroke="#019875"/><path d="M11.674 14.477l5.17-5.496a1.356 1.356 0 0 1 2.001 0c.553.587.553 1.54 0 2.127l-4.17 4.433 4.17 4.433c.553.587.553 1.539 0 2.126a1.356 1.356 0 0 1-2 0l-5.17-5.496a1.572 1.572 0 0 1 0-2.127z" fill="#019875"/></svg></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next slider__arrow--last-news-next"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.361" cy="16.041" r="15" transform="rotate(-180 16.361 16.04)" stroke="#019875"/><path d="M20.447 17.604l-5.17 5.496a1.356 1.356 0 0 1-2.001 0 1.571 1.571 0 0 1 0-2.126l4.17-4.433-4.17-4.433a1.572 1.572 0 0 1 0-2.127 1.356 1.356 0 0 1 2 0l5.171 5.496c.552.588.552 1.54 0 2.127z" fill="#019875"/></svg></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {}
		}]
	});

	$('#js-partners').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dotsClass: 'slider__dots slider__dots--last-news flex flex--align-center',
		infinite: true,
		prevArrow: '<div class="slider__arrow slider__arrow--prev slider__arrow--partners-prev"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15.76" cy="16.041" r="15" stroke="#E0E0E0"/><path d="M11.674 14.477l5.17-5.496a1.356 1.356 0 0 1 2.001 0c.553.587.553 1.54 0 2.127l-4.17 4.433 4.17 4.433c.553.587.553 1.539 0 2.126a1.356 1.356 0 0 1-2 0l-5.17-5.496a1.572 1.572 0 0 1 0-2.127z" fill="#E0E0E0"/></svg></div>',
		nextArrow: '<div class="slider__arrow slider__arrow--next slider__arrow--partners-next"><svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.361" cy="16.041" r="15" transform="rotate(-180 16.361 16.04)" stroke="#E0E0E0"/><path d="M20.447 17.604l-5.17 5.496a1.356 1.356 0 0 1-2.001 0 1.571 1.571 0 0 1 0-2.126l4.17-4.433-4.17-4.433a1.572 1.572 0 0 1 0-2.127 1.356 1.356 0 0 1 2 0l5.171 5.496c.552.588.552 1.54 0 2.127z" fill="#E0E0E0"/></svg></div>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {}
		}]
	});

	$('#js-marquee').marquee({
		duration: 15000,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true
	});

})
