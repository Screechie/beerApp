// Your JS goes here
$(function(){

	//Return all beers
	$("#beers").on("submit",function(e){
		e.preventDefault();
		$.getJSON("/search", function(data){
			console.log(data);
		})
	});

});