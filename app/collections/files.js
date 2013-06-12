var Backbone = require('backbone');
var File = require('../models/file');
var config = require('../config');

module.exports = Backbone.Collection.extend({
  model: File,

  initialize: function(models, options) {
    this.comparator = function(file) {
      return file.get('name');
    };

    this.url = config.api + '/repos/' + options.owner.login + '/' + 
      options.repo + '/contents?ref=' + options.branch;
  }
});