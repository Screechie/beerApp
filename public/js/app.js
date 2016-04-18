// Your JS goes here
$(function(){

	//Return all beers
	$("#beers").on("submit",function(e){
		e.preventDefault();
		$.getJSON("/beers", function(data){
			console.log(data);
		})
	});

});