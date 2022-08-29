function open_about_us(argument) {
	document.getElementById('about_us_podmenu').classList.add('active');
}
function close_about_us(argument) {
	document.getElementById('about_us_podmenu').classList.remove('active');
}
function open_list_our_doctors(argument) {
	document.getElementById('our_doctors_podmenu').classList.add('active');
}
function close_list_our_doctors(argument) {
	document.getElementById('our_doctors_podmenu').classList.remove('active');
}
function open_list_our_service(argument) {
	document.getElementById('our_service_podmenu').classList.add('active');
}
function close_list_our_service(argument) {
	document.getElementById('our_service_podmenu').classList.remove('active');
}
function open_list_mobile_menu_about_us(argument) {
	document.getElementById('about_us_podmenu_mobile_menu').classList.toggle('active');
	document.getElementById('podmenu_icon').classList.toggle('active');
}
function open_list_our_doctors_mobile_menu(argument) {
	document.getElementById('our_doctors_podmenu_mobile_menu').classList.toggle('active');
	document.getElementById('podmenu_icon_doc').classList.toggle('active');
}
function open_list_our_service_mobile_menu(argument) {
	document.getElementById('our_service_podmenu_mobile_menu').classList.toggle('active');
	document.getElementById('podmenu_icon_our_service').classList.toggle('active');
}
function close_podmenu() {
	document.getElementById('about_us_podmenu_mobile_menu').classList.remove('active');
	document.getElementById('our_doctors_podmenu_mobile_menu').classList.remove('active');
	document.getElementById('our_service_podmenu_mobile_menu').classList.remove('active');
	document.getElementById('podmenu_icon').classList.remove('active');
	document.getElementById('podmenu_icon_doc').classList.remove('active');
	document.getElementById('podmenu_icon_our_service').classList.remove('active');
}
function open_mobile_menu(){
	document.getElementById('menu_list_mobile_menu').classList.toggle('active');
	document.getElementById('bar1').classList.toggle('active');
	document.getElementById('bar2').classList.toggle('active');
	document.getElementById('bar3').classList.toggle('active');
}
function filter(argument) {
	document.getElementById('filter').classList.add('active')
}
function open_form(argument) {
	document.getElementById('an_appointment').classList.add('active');
}
function close_form(argument) {
	document.getElementById('an_appointment').classList.remove('active');
	document.getElementById('filter').classList.remove('active')
}
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true
  });
});