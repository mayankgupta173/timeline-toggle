var widgets = require("sdk/widget");
var tabs = require('sdk/tabs');
var self = require('sdk/self');

var widget = widgets.Widget({
  id: 'timeline-toggle',
  label: 'Turn on/off the FB timeline',
  contentURL: self.data.url('favicon.ico'),
  onClick: function() {
    tabs.activeTab.attach({
      contentScriptFile: self.data.url('toggle.js')
    });
  }
});
