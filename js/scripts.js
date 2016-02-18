$(document).ready(function(){
	var block = $(".box");
	block.click(function() {
		window.location = $(this).find("a:first").attr("href");
	});
	block.addClass("klikbaar");
	block.hover = function() {
		window.status = $(this).find("a:first").attr("href")
	}, function() {
		window.status = "";
	}
})