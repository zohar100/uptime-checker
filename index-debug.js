/*
* Primary file for API
*
*/

// Dependencies
var server = require('./lib/server');
var workers = require('./lib/workers');
var cli = require('./lib/cli');
var exampleDebuggingProblem = require('./lib/exampleDebuggingProblem');

// Declare the app
var app = {};

// Init function
app.init = function() {
  // Start the server
  debugger;
  server.init();
  debugger;
  
  // Start the workers
  debugger;
  workers.init();
  debugger;

  // Start the CLI, but make sure it starts last
  debugger;
  setTimeout(function() {
    cli.init();
  }, 50);
  debugger;

  // Set foo at 1 
  var foo = 1;
  debugger;

  // Increment foo
  foo++;
  debugger;

  // Square foo
  foo = foo.toString();
  debugger;

  // Call the init script that will throw
  exampleDebuggingProblem.init();
  debugger;
}

// Execute
app.init()

// Export the app
module.exports = app;