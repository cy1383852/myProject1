app.controller("goodsCtrl", function($scope, $css) {
	$css.removeAll();
	$css.add("./discover/css/goods.css");
	$css.add("./discover/css/swiper.css");


var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	loop: true,
	autoplay: 500,
	autoplayDisableOnInteraction: false,
	autoplayStopOnLast: true,
	grabCursor: true,

	// 如果需要分页器
	pagination: '.swiper-pagination',

	// 如果需要前进后退按钮
	// nextButton: '.swiper-button-next',
	// prevButton: '.swiper-button-prev',

	// 如果需要滚动条
	// scrollbar: '.swiper-scrollbar',
});

});
