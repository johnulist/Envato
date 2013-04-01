$(document).ready(function() {
	$('#mini_slider').cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		next: '#next', 
		prev: '#prev' 
	});
	
	
	// jQuery tabs
	// http://papermashup.com/simple-jquery-tabs/

	$('#mini_tabs > .tab_content').hide(); // hide all of the content areas first
	$('#mini_tabs > .tab_content:first').show(); // display the first content area
	$('#mini_tabs .navigation ul li:first').addClass('active'); //on the first tab, add the class 'active'
	
	$('#mini_tabs .navigation li a').click(function(){ // on click of a tab :
		$('#mini_tabs .navigation li').removeClass('active'); // remove the 'active' class from its original location
		$(this).parent().addClass('active'); // add the 'active' class to the new tab
		var currentTab = $(this).attr('href'); // get the href from the link that was clicked and save it
			$('#mini_tabs > .tab_content').hide(); // hide all of the content areas
			$(currentTab).show(); // display the matching link/container that was clicked
			return false;
	});
	
	
	// jEqual height columns
	// http://www.cssnewbie.com/equal-height-columns-with-jquery/
	
	function equalHeight(group) {
		var tallest = 0;
		group.each(function() {
			var thisHeight = $(this).height();
			if(thisHeight > tallest) {
				tallest = thisHeight;
			}
		});
		group.height(tallest);
	}
	
	equalHeight($(".columns > .col"));
	
	
	// Clear Input
	// http://plugins.jquery.com/project/clear-input

	(function( $ ){
	  // define the initialValue() function
	  $.fn.initialValue = function(value) {
		if (value) {
		  return this.attr('initial-value', value);
		} else {
		  return this.attr('initial-value');
		}
	  };
	  
	  $.fn.clearInput = function() {
		return this
		  .focus(function(){
			if (this.value == $(this).initialValue()) {
			  this.value = '';
			}
		  })
		  .blur(function(){
			if (this.value == '') {
			  this.value = $(this).initialValue();
			}
		  })
		  .each(function(index, elt) {
			$(this).initialValue(this.value);
		  });
	  };
	
	  // apply plugin to all inputs with class ".clearInput"
	  $(function() {
		$('.field .clearInput').clearInput();
	  });
	})( jQuery );
	
});