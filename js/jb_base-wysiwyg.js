// @see https://www.drupal.org/node/1146776#comment-8576963
(function(){
  CKEDITOR.editorConfig = function(config) {
    config.dataIndentationChars = '  ';
    config.tabSpaces = 2;
    config.autoParagraph = false;
    config.bodyClass = 'page';
  };

  CKEDITOR.on('instanceReady', function(e) {
    var instance,
        rules;

    instance = e.editor;

    rules = {
      indent: true,
      breakBeforeOpen: true,
      breakAfterOpen: false,
      breakBeforeClose: false,
      breakAfterClose: true,
    };

    instance.dataProcessor.writer.setRules('p', rules);
    instance.dataProcessor.writer.setRules('div', rules);
    instance.dataProcessor.writer.setRules('table', rules);
    instance.dataProcessor.writer.setRules('thead', rules);
    instance.dataProcessor.writer.setRules('tbody', rules);
    instance.dataProcessor.writer.setRules('tr', rules);
    instance.dataProcessor.writer.setRules('th', rules);
    instance.dataProcessor.writer.setRules('td', rules);

    instance.dataProcessor.writer.setRules('br', {
      breakAfterOpen: true,
    });

    //instance.resize('', 300, true);
  });
}());
