/*
function highlightCorrectNavBarElement() {
	var window = $(window);
	if (window.scrollTop() > contact)
}
*/

var changedText = new Array("my name is Jai Srivastav", "I am an app developer", "I am a web developer");
var changeTextIndex = 0;

function changeText() {
	var fadeInTime = 1000;
	var delayTime = 1250;
	var fadeOutTime = 1000;
	var totalTime = fadeInTime + delayTime + fadeOutTime;
	$(".changingText").text(changedText[changeTextIndex]);
	$(".changingText").fadeTo(fadeInTime, 1).delay(delayTime).fadeTo(fadeOutTime, 0, function() {
		changeTextIndex = (changeTextIndex + 1) % changedText.length;
		changeText();
	});
}

var stickyNavTop;

function bottomOfBanner() {
	return $("#banner").offset().top + $("#banner").height();
}

function resizeBanner() {
	var height = $(window).height();
	$("#banner").height(height * 0.75);
	stickyNavTop = bottomOfBanner();
}

$(document).ready(function(){

	// Resize Banner
	resizeBanner();
	$(window).resize(resizeBanner);

	//Constantly change banner text
	changeText();

	//Navigation Bar Link Fade In/Out
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

	//Navigation Bar Sticks top 
	//stickyNavTop = $("header").offset().top;
	stickyNavTop = bottomOfBanner();
	$(document).scroll(function(){
		console.log($(window).scrollTop());
		console.log(stickyNavTop);

		if ($(window).scrollTop() >= stickyNavTop) {
			$("header").addClass("stickyNavBar");
			$("#about").addClass("stickyAbout");
		}
		else {
			$("header").removeClass("stickyNavBar");
			$("#about").removeClass("stickyAbout");
		}
	});

});