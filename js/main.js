 jQuery(document).ready(function($){

 	// room selection
 	$('.room_minus').click(function(){
 		var $room = $('#select_room').val();
 		$room = $room-1;
 		$room = $room>0?$room:1;
 		var $room_text = $room==1?$room+' Room':$room+' Rooms';
 		$('#select_room').val($room);
 		$('.room_text').html($room_text);
 	});
 	$('.room_plus').click(function(){
 		var $room = $('#select_room').val();
 		$room = parseInt($room)+1;
 		var $room_text = $room==1?$room+' Room':$room+' Rooms';
 		$('#select_room').val($room);
 		$('.room_text').html($room_text);
 	});

 	// adult selection
 	$('.adult_minus').click(function(){
 		var $adult = $('#select_adult').val();
 		$adult = $adult-1;
 		$adult = $adult>0?$adult:1;
 		var $adult_text = $adult==1?$adult+' Adult':$adult+' Adults';
 		$('#select_adult').val($adult);
 		$('.adult_text').html($adult_text);
 	});
 	$('.adult_plus').click(function(){
 		var $adult = $('#select_adult').val();
 		$adult = parseInt($adult)+1;
 		var $adult_text = $adult==1?$adult+' Adult':$adult+' Adults';
 		$('#select_adult').val($adult);
 		$('.adult_text').html($adult_text);
 	});

 	// children selection
 	$('.child_minus').click(function(){
 		var $child = $('#select_child').val();
 		$child = $child-1;
 		$child = $child>0?$child:0;
 		var $child_text = $child>1?$child+' Childrens':$child+' Children';
 		$('#select_child').val($child);
 		$('.child_text').html($child_text);
 	});
 	$('.child_plus').click(function(){
 		var $child = $('#select_child').val();
 		$child = parseInt($child)+1;
 		var $child_text = $child>1?$child+' Childrens':$child+' Children';
 		$('#select_child').val($child);
 		$('.child_text').html($child_text);
 	});

 	$('.toggle_reservation').click(function(){
 		$('#toggle_reservation').slideToggle();
 	});

 	$('.see_more_rooms').click(function(){
 		console.log('cliecked')
 		$(this).closest('.find_hotel_items').find('#see_more_rooms').slideToggle();
 	});

 	$('.areainformationtext i').click(function(){
 		$(this).parent().hide();
 	});
	
			//Google Maps
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				el: '#map',
				zoom: 16,
				lat: 23.8104659,
				lng: 90.3272611,
				
				scrollwheel:false,
				click: function(e){
				  alert('click');
				},
				dragend: function(e){
				  alert('dragend');
				}
			  });
			});
		

	 //Scroll to Top
	 $(window).scroll(function(){
		if($(this).scrollTop()>300){
			$('.scrolltoup').fadeIn();
		}
		else
		{
			$('.scrolltoup').fadeOut();
		}
	 });
	 
	 //Down to Up 
	 $('.scrolltoup').click(function(){ 
		$("html, body").animate({
		scrollTop:0},500)
	 });

	 // checkin datepicker with click on calender icon
	$(".checkinDatepicker").click(function() {
       $("#checkinDatepicker").focus(); 
    });
    // checkout datepicker with click on cleander icon
    $(".checkoutDatepicker").click(function() {
       $("#checkoutDatepicker").focus(); 
    });
	 // checkin datepicker2 with click on calender icon
	$(".checkinDatepicker2").click(function() {
       $("#checkinDatepicker2").focus(); 
    });
    // checkout datepicker2 with click on cleander icon
    $(".checkoutDatepicker2").click(function() {
       $("#checkoutDatepicker2").focus(); 
    });

    // initial global datepicker
	$('.datepicker').datepicker();

	// tooltip
	$('[data-toggle="tooltip"]').tooltip();  
});