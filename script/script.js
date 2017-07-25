$(document).ready(function(event){
	// console.log("i am here");
var widthX = $("html").width();

/*carousel*/ 

var size = 800;
var button;

if(widthX < size){
	$("#content-items").slick();
}else{
	console.log("не сработало");
	$("#content-items li").attr("class","col-md-4");
}

	/*============================*/ 

if(widthX < size){
	button = $("#list__button");

	button.attr("data-active","cross");
	button.html('<svg width="20" height="20"><use xlink:href="#icon-menu"/></use></svg>');
}




// $("#list__button").click(function(even){
if(widthX < size){
		button.click(function(even){
		listClick(even);
	});

}



function listClick(evn){

	evn.preventDefault();

	var cross = 'cancel-circle';
	var menu = 'menu';

	var atr = $("#list__button").attr("data-active");

	if(atr == 'cancel-circle'){
		activeTogle2(menu);
	}else{
		activeTogle2(cross);
	}

	$("#header__list").slideToggle(400);

}




	function activeTogle2(attr){

		$("#list__button").html('<svg width="20" height="20"><use xlink:href="#icon-'+attr+'"/></use></svg>');
		$("#list__button").attr("data-active", attr);

	}

});