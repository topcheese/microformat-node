/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-v2/h-adr/justaname
The test was built on Sun Jun 14 2015 10:55:15 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-adr', function() {
   var htmlFragment = "<p class=\"h-adr\">665 3rd St. Suite 207 San Francisco, CA 94107 U.S.A.</p>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-adr"],"properties":{"name":["665 3rd St. Suite 207 San Francisco, CA 94107 U.S.A."]}}],"rels":{},"rel-urls":{}};

   it('justaname', function(){
       assert.deepEqual(found, expected);
   });
});
