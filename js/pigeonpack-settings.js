var $pigeonpack_settings = jQuery.noConflict();

$pigeonpack_settings(document).ready(function($) {
	
	$( 'input[name=smtp_enable]' ).live( 'change', function() {
		
		if ( 'mail' === $( this ).val() )
			$( 'tr.smtp_options' ).hide();
		else
			$( 'tr.smtp_options' ).show();
		
	});
	
});