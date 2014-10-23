//this is client side javascript

console.log('test');

$(function(){

	$('.btn').on('click', function(e){
		
		// Make an ajax GET request to the server
		$.get('/countries', {}, function(resultData){
		});
	});

});// end of jQuery