/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.


// jQuery
app.import(app.bowerDirectory + '/jquery/dist/jquery.js'); // jquery.min.js is not working...

// Bootstrap
app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');

// Bootstrap Switch
app.import(app.bowerDirectory + '/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css');
app.import(app.bowerDirectory + '/bootstrap-switch/dist/js/bootstrap-switch.min.js');

module.exports = app.toTree();
