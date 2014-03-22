<?php

/*
Plugin Name: Date/Time Picker for Piklist.
Plugin URI: http://neuralquery.com/
Description: Date/Time Picker for the awesome Piklist framework.
Version: 1.0
Author: Daniel Rampanelli
Author URI: http://neuralquery.com/
Plugin Type: Piklist
License: Proprietary
*/

add_action('admin_enqueue_scripts', function() {
	wp_enqueue_style('neuralquery-datetimepicker-bootstrap', plugins_url('assets/bootstrap/css/bootstrap.css', __FILE__));
	wp_enqueue_style('neuralquery-datetimepicker', plugins_url('assets/bootstrap-datetimepicker.min.css', __FILE__));
	
	wp_register_script('neuralquery-datetimepicker-moment', plugins_url('assets/moment-with-langs.min.js', __FILE__));
	wp_register_script('neuralquery-datetimepicker-collapse', plugins_url('assets/collapse.js', __FILE__));
	wp_register_script('neuralquery-datetimepicker-transition', plugins_url('assets/transition.js', __FILE__));
	
	wp_register_script('neuralquery-datetimepicker-picker', plugins_url('assets/bootstrap-datetimepicker.min.js', __FILE__), array(
		'neuralquery-datetimepicker-moment',
		'neuralquery-datetimepicker-collapse',
		'neuralquery-datetimepicker-transition'
	));
	
	wp_register_script('neuralquery-datetimepicker', plugins_url('assets/datetimepicker.js', __FILE__), array(
		'neuralquery-datetimepicker-picker',
		'jquery',
	));
});

add_filter('piklist_pre_render_field', function($field) {
	if ($field['type'] == 'datetimepicker') {
		wp_enqueue_script('neuralquery-datetimepicker');
		
		$field['js_callback'] = 'neuralquery_datetimepicker_initialize';
	}
	
	return $field;
});

?>