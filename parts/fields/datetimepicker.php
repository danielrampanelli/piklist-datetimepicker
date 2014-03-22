<input type="text" class="hasDateTimePicker"
	   data-date-format="DD/MM/YYYY hh:mm"
	   id="<?php echo piklist_form::get_field_id($field, $scope, $index, $prefix) ?>"
       name="<?php echo piklist_form::get_field_name($field, $scope, $index, $prefix) ?>"
       value="<?php echo is_array($value) ? esc_attr(end($value)) : esc_attr($value); ?>"
       <?php echo piklist_form::attributes_to_string($attributes); ?> />