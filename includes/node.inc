<?php

/**
 * Implements hook_form_BASE_FORM_ID_alter().
 *
 * Generate the Path field from the Title field.
 */
function jb_base_form_node_form_alter(&$form, $form_state) {
  $field_name = 'field_jb_slug';

  // Make sure the necessary fields exist.
  if (!array_key_exists('title', $form) || !array_key_exists($field_name, $form)) {
    return;
  }

  $field =& $form[$field_name];

  // Populate array key for attaching Javascript.
  if (!array_key_exists('#attached', $field)) {
    $field['#attached'] = array();
  }

  if (!array_key_exists('js', $field['#attached'])) {
    $field['#attached']['js'] = array();
  }

  $field['#attached']['js'][] = drupal_get_path('module', 'jb_base') . '/js/jb_base-title_to_slug.js';

  // On new nodes, enable "Providing a menu link."
  $form['#process'] = array('jb_base_form_process_menu');
}

/**
 * Render API callback: Enables menu links on new nodes.
 */
function jb_base_form_process_menu($form) {
  if (!$form['nid']['#value'] && array_key_exists('menu', $form)) {
    $form['menu']['enabled']['#default_value'] = 1;
  }

  return $form;
}
