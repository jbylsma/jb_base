<?php
/**
 * @file
 * jb_base.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function jb_base_user_default_roles() {
  $roles = array();

  // Exported role: Site Administrator.
  $roles['Site Administrator'] = array(
    'name' => 'Site Administrator',
    'weight' => 2,
  );

  return $roles;
}
