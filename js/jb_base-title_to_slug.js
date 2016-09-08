(function ($) {
  'use strict';

/**
 * If possible, populate the Slug field from the Title field.
 */
Drupal.behaviors.jbBaseTitleToSlug = {
  attach: function (context) {
    var slugField = $('#edit-field-jb-slug-und-0-value', context),
        titleField = $('#edit-title', context);

    // Bail out if we do not have all required fields.
    if (!(slugField.length && titleField.length)) {
      return;
    }

    slugField.once('jbbaseTitleToSlug', function() {
      // If the slug is populated, mark it as overridden. All further
      // slug changes must be done manually.
      if (slugField.val().length) {
        slugField.data('pathAutomaticTitleOverridden', true);
      }

      // If the slug has been manually edited, disable this behavior.
      slugField.bind('keyup', function () {
        slugField.data('pathAutomaticTitleOverridden', true);
      });

      // Update the slug automatically.
      titleField.bind('keyup', function () {
        if (slugField.data('pathAutomaticTitleOverridden')) {
          return;
        }

        slugField
          .val(titleField.val().replace(/\s+/g, '-').toLowerCase())
          .trigger('formUpdated');
      });
    });
  }
};

})(jQuery);

