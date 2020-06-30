'use strict';
var home = require('./home');
var renderMarkdown = require('./renderMarkdown');
var renderGithubMarkdown = require('./renderGithubMarkdown');
var renderMarkdown_json = require('./renderMarkdown-json');
var renderGithubMarkdown_json = require('./renderGithubMarkdown-json');

// options shared to all routing modules
function setOptions(options) {
  exports.options = options;
  home.options = options;
  renderMarkdown.options = options;
  renderGithubMarkdown.options = options;
  renderMarkdown_json.options = options;
  renderGithubMarkdown_json.options = options;
}

// exports:
exports.setOptions = setOptions;
exports.home = home;
exports.markdown = renderMarkdown;
exports.github_markdown = renderGithubMarkdown;
exports.markdown_json = renderMarkdown_json;
exports.github_markdown_json = renderGithubMarkdown_json;


