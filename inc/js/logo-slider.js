// logo slider js

const alcbLogoSliders = document.querySelectorAll(
	'.wp-block-lcb-logo-carousel'
);

[...alcbLogoSliders].forEach((singleSlide) => {
	const swiperSliderDiv = singleSlide.querySelector(
		'.alcb__carousel_container'
	);

	// slider id
	const sliderId = swiperSliderDiv.dataset.id;

	// slider options
	const deskItems = parseInt(swiperSliderDiv.dataset.desktop);
	const tabItems = parseInt(swiperSliderDiv.dataset.tablet);
	const phoneItems = parseInt(swiperSliderDiv.dataset.mobile);

	const deskSpace = parseInt(swiperSliderDiv.dataset.deskspace);
	const tabSpace = parseInt(swiperSliderDiv.dataset.tabspace);
	const phoneSpace = parseInt(swiperSliderDiv.dataset.phonespace);

	const autoplay = JSON.parse(swiperSliderDiv.dataset.autoplay);
	const autoplayDelay = parseInt(swiperSliderDiv.dataset.autoplaydelay);
	const autoplayDirection = JSON.parse(
		swiperSliderDiv.dataset.autoplaydirection
	);
	const pauseOnHover = JSON.parse(swiperSliderDiv.dataset.pauseonhover);

	const autoplayOptions = autoplay
		? {
				delay: autoplayDelay,
				reverseDirection: autoplayDirection,
				pauseOnMouseEnter: pauseOnHover,
				disableOnInteraction: false,
		  }
		: false;

	const speed = parseInt(swiperSliderDiv.dataset.speed);
	const loop = JSON.parse(swiperSliderDiv.dataset.loop);
	const keyboard = JSON.parse(swiperSliderDiv.dataset.keyboard);
	const mousewheel = JSON.parse(swiperSliderDiv.dataset.mousewheel);
	const autoHeight = JSON.parse(swiperSliderDiv.dataset.autoheight);

	// pagination options
	const showPagination = JSON.parse(swiperSliderDiv.dataset.pagination);
	const paginationClass = singleSlide.querySelector('.alcb__pag');

	const paginationOptions = showPagination
		? {
				el: paginationClass,
				clickable: showPagination,
		  }
		: false;

	// navigation options
	const showNav = JSON.parse(swiperSliderDiv.dataset.navigation);
	const prevNav = singleSlide.querySelector('.alcb__prev');
	const nextNav = singleSlide.querySelector('.alcb__next');

	const navigationOptions = showNav
		? {
				nextEl: nextNav,
				prevEl: prevNav,
		  }
		: false;

	// console.log(slideDirection);

	const slider = new Swiper(`#${sliderId}`, {
		pagination: paginationOptions,
		navigation: navigationOptions,
		slidesPerView: deskItems,
		spaceBetween: deskSpace,
		autoplay: autoplayOptions,
		speed,
		loop,
		keyboard,
		mousewheel,
		autoHeight,
		breakpoints: {
			320: {
				slidesPerView: phoneItems,
				spaceBetween: phoneSpace,
			},

			601: {
				slidesPerView: tabItems,
				spaceBetween: tabSpace,
			},

			992: {
				slidesPerView: deskItems,
				spaceBetween: deskSpace,
			},
		},
	});
});
