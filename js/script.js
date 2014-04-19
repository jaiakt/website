/*
function highlightCorrectNavBarElement() {
	var window = $(window);
	if (window.scrollTop() > contact)
}
*/

$(document).ready(function(){
	$("li.navBarLink").hover(
		function() {
			console.log("hovered");
			$(this).animate({
				backgroundColor: "#474747"
			}, 150);
		}, function() {
			$(this).animate({
				backgroundColor: "black"
			}, 150);
		});
	$(document).scroll(function(){
		
	});
});