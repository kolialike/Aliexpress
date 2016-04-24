jQuery(function($){

  var body = $("body");
  //menu
  var menuBurger = $(".menu-burger");
  menuBurger.on('click', function(event) {
  	event.preventDefault();
  	body.toggleClass('mobile-menu-open');
  	inputContainer.removeClass('open-search')
  });
  var mobileMenu = $(".mobile-menu");
  mobileMenu.on('click', function(event) {
  	event.preventDefault();
  	body.removeClass("mobile-menu-open");
  });
  var mobileMenuItem = $(".mobile-menu-item");
  mobileMenuItem.on('click', function(event) {
  	event.stopPropagation();
  });

  // mobile-search
	var mobileSearch = $(".mobile-search");
	var inputContainer = $(".input-container");
  var header = $("#header")
	mobileSearch.on("click", function(event){
    event.preventDefault();
    inputContainer.toggleClass("open-search");
    body.removeClass('mobile-menu-open')
  });
  inputContainer.on("click", function(event){
    event.stopPropagation();
  });
  header.on("click", function(event){
    event.stopPropagation();
  });
  body.on("click", function(event){
    inputContainer.removeClass("open-search");
  });

  //search
  var Search = $(".search");
  var inputContainer = $(".input-container");
  var header = $("#header")
  Search.on("click", function(event){
    event.preventDefault();
    inputContainer.toggleClass("open-search");
    body.removeClass('mobile-menu-open')
  });
  inputContainer.on("click", function(event){
    event.stopPropagation();
  });
  header.on("click", function(event){
    event.stopPropagation();
  });
  body.on("click", function(event){
    inputContainer.removeClass("open-search");
  });

  //
  var footerTop = $(".footer-top");
  footerTop.on("click", function (event) {
    event.preventDefault();
     $('body,html').animate({scrollTop: 0}, 1000);
  });

  //active-categiry
  var contentNavigationItems = $(".content-navigation-items a");
  contentNavigationItems.on('click', function(event) {
    event.preventDefault();
    var $this = $(this);
    $this.parent().addClass('active').siblings().removeClass('active');
  });

});