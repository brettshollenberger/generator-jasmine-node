'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JasmineNodeGenerator = module.exports = function JasmineNodeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JasmineNodeGenerator, yeoman.generators.Base);

JasmineNodeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'What would you like to call your first module?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;

    cb();
  }.bind(this));
};

JasmineNodeGenerator.prototype.app = function app() {
  this.mkdir('lib');
  this.mkdir('spec');
  this.template('_mod.js', 'lib/' + this.moduleName + '.js');
  this.template('_mod.spec.js', 'spec/' + this.moduleName + '.spec.js');

  this.copy('_package.json', 'package.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
};

JasmineNodeGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
