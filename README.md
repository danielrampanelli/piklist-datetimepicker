# Date/Time Picker for Piklist

This WordPress plugin offers a *datetimepicker* Piklist field type, based on the [bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker) project.

## Installation

This plugin is not yet published on the official plugin repository so you can either download and install it manually or, if you are using Composer, you can add this repository to your installation's `composer.json` file like this

	"repositories": [{
        "type": "vcs",
        "url": "https://github.com/neuralquery/piklist-datetimepicker"
    }],
    "require": {
        "neuralquery/piklist-datetimepicker": "@dev"
    }

## Usage

You can use this field type by defining a field like this

	piklist('field', array(
		'type' => 'datetimepicker',
		'scope' => 'post_meta',
		'field' => 'your_field_name',
		'label' => 'Date/Time',
		'options' => array(
			'format' => 'DD/MM/YYYY hh:mm',
			'pick12HourFormat' => FALSE,
			'sideBySide' => TRUE,
		),
	));

For the complete list of options that can be defined, please consult [this](http://eonasdan.github.io/bootstrap-datetimepicker/#options) page.