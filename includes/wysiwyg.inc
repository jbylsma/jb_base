<?php

/**
 * Implements hook_wysiwyg_editor_settings_alter().
 *
 * Load custom config for CKEditor
 */
function jb_base_wysiwyg_editor_settings_alter(&$settings, $context) {
  if ($context['profile']->editor == 'ckeditor') {
    $settings['customConfig'] = base_path() . drupal_get_path('module', 'jb_base') . '/js/jb_base-wysiwyg.js';
    $settings['startupOutlineBlocks'] = true;
  }
}
