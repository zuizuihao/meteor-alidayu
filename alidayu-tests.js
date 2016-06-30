// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-alidayu.js.
import { name as packageName } from "meteor/meteor-alidayu";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-alidayu - example', function (test) {
  test.equal(packageName, "meteor-alidayu");
});
