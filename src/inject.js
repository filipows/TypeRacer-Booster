(function() {

	$(document).ready( function() {
		// Place a div at a top right about hacked mode
	  	var $hackedModeDiv = jQuery(document.createElement("div"));

		$hackedModeDiv.css('position', 'fixed');
		$hackedModeDiv.css('top', '0px');
		$hackedModeDiv.css('right', '0px');
		$hackedModeDiv.html('Hacked mode = enabled');
		$('body').append($hackedModeDiv);	
 
		$('input.txtInput').focus();

		var text = $('.nonHideableWords ').text();
		var arrayOfWords = text.split(" ")

		var idx = 0;
		function nextWord() {
			$('input.txtInput').val(arrayOfWords[idx++]);
		}

		$('input.txtInput').keypress ( function(e) {
			if ( e.keyCode == 32 ){ 	// check for space
				nextWord();				
			}
		});
 	});

})();