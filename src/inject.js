(function() {

	$(document).ready( function() {
		// Place a div at a top right about hacked mode
		var div = document.createElement('div');
		div.style.position = 'fixed';
		div.style.top = 0;
		div.style.right = 0;
		div.textContent = 'Hacked mode = enabled';
		document.body.appendChild(div);
	 
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