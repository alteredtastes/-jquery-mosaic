//THIS VERSION OF JQUERY MOSAIC #1 CAUSES SOUNDS TO TRIGGER FOLLOWING THE COLOR CHANGES OF THE SNAKE TAIL.
//AS MOUSELEAVE IS TRIGGERED FROM CELLS, THE COLOR OF THOSE CELLS SWAP COLOR SEQUENTIALLY USING A INCREMENTAL DELAYS 
//AND PLAY A CORRESPONDING TONE ON EACH COLOR CHANGE.



$(document).ready(function(){
//add a table. resizeable to window
	$('body').append('<table></table>');
	$('table').css({'position': 'fixed', 'margin': 'auto', 'width': '100%', 'height': '100%'});

//loop 30 times to add 30 table rows
	for(var i = 0; i < 30; i++){
		$('table').append('<tr></tr>');
	};

//loop 30 times to create 30 tds per table row
	for(var i = 0; i < 30; i++){
		$('tr').append('<td></td>');
	};

//loop audio tags to add distinct ID# each, then assign unique playable sound variable to each to trigger with color changes
		var sound = [];
		$('audio').each(function(index){
			$(this).attr('id', 'sound' + index);
			sound[index] = $('#sound' + index)[0];
		});	

//Turn tds white (color1) on mouseover. remove all classes first.

	$('td').mouseover(function(){
			$(this).removeClass().addClass('color1')});


//Change td to red (color2) with delay after mouseleave 
//NOTE: that = this locks "this" to current function context rather than to global variable in the setTimeout function

	$('td').mouseleave(

//set tds from color1 to color2 after 300 milliseconds of mouseleave
		function(){
			var that = this;
			setTimeout(function(){
				$(that).toggleClass('color2');
				sound[0].play()}, 300);

//set tds to new colors incrementally for ROYGBIV, then remove classes
			setTimeout(function(){
				$(that).toggleClass('color3');
				sound[1].play()}, 600);
			setTimeout(function(){
				$(that).toggleClass('color4');
				sound[2].play()}, 900);
			setTimeout(function(){
				$(that).toggleClass('color5');
				sound[3].play()}, 1200);
			setTimeout(function(){
				$(that).toggleClass('color6');
				sound[4].play()}, 1500);
			setTimeout(function(){
				$(that).toggleClass('color7');
				sound[5].play()}, 1800);
			setTimeout(function(){
				$(that).toggleClass('color8');
				sound[6].play()}, 2100);
			setTimeout(function(){
				$(that).removeClass();
				sound[7].play()}, 2400);

		}
		);
			
});






