var $pigeonpack_campaign = jQuery.noConflict();

$pigeonpack_campaign(document).ready(function($) {
	
	$( 'select#campaign_type' ).live( 'change', function() {
		
		if ( 'wp_post' === $( this ).val() ) {
				
			$( 'tr.wp_post_options' ).show();
			
			if ( 'digest' === $( 'select#wp_post_type' ).val() ) {
			
				$( 'tr.wp_post_digest_options' ).show();
				
			}
			
		} else {
		
			$( 'tr.wp_post_options' ).hide();
			$( 'tr.wp_post_digest_options' ).hide();
			
		}
		
	});
	
	$( 'select#wp_post_type' ).live( 'change', function() {
		
		if ( 'digest' === $( this ).val() ) {
				
			$( 'tr.wp_post_digest_options' ).show();
			
		} else {
		
			$( 'tr.wp_post_digest_options' ).hide();
			
		}
		
	});

	
	$( 'select#wp_post_digest_frequency' ).live( 'change', function() {
		
		switch( $( this ).val() ) {
		
			case 'monthly':
				$( 'div.monthly_options' ).show();
				$( 'div.weekly_options' ).hide();
				$( 'div.wp_post_digest_days' ).hide();
				break;	
				
			case 'weekly':
				$( 'div.monthly_options' ).hide();
				$( 'div.weekly_options' ).show();
				$( 'div.wp_post_digest_days' ).hide();
				break;	
				
			case 'daily':
			default:
				$( 'div.monthly_options' ).hide();
				$( 'div.weekly_options' ).hide();
				$( 'div.wp_post_digest_days' ).show();
				break;	
			
		}
		
	});
	
});