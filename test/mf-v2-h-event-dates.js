/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-v2/h-event/dates
The test was built on Sun Jun 14 2015 10:55:15 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('h-event', function() {
   var htmlFragment = "<section class=\"h-event\">\n\t<p><span class=\"p-name\">The 4th Microformat party</span> will be on:</p>\n\t<ul>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26T19:00-08:00\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26T19:00-08\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26T19:00-0800\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26T19:00+0800\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26T19:00+08:00\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26T19:00Z\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26t19:00-08:00\">26 July</time></li>\n\t\t<li><time class=\"dt-start\" datetime=\"2009-06-26 19:00:00-08:00\">26 July</time></li>\n\t</ul>\n</section>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-event"],"properties":{"name":["The 4th Microformat party"],"start":["2009-06-26T19:00-08:00","2009-06-26T19:00-08","2009-06-26T19:00-0800","2009-06-26T19:00+0800","2009-06-26T19:00+08:00","2009-06-26T19:00Z","2009-06-26t19:00-08:00","2009-06-26 19:00:00-08:00"]}}],"rels":{},"rel-urls":{}};

   it('dates', function(){
       assert.deepEqual(found, expected);
   });
});
