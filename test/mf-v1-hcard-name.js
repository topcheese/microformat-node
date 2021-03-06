/*
Microformats Test Suite - Downloaded from github repo: glennjones/tests version v0.1.17 
Mocha integration test from: microformats-v1/hcard/name
The test was built on Sun Jun 14 2015 10:55:15 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('hcard', function() {
   var htmlFragment = "<base href=\"http://example.com\">\n<div class=\"vcard\">\n    <div class=\"name\">\n        <span class=\"honorific-prefix\">Dr</span> \n        <span class=\"given-name\">John</span> \n        <abbr class=\"additional-name\" title=\"Peter\">P</abbr>  \n        <span class=\"family-name\">Doe</span> \n        <data class=\"honorific-suffix\" value=\"MSc\"></data>\n        <img class=\"honorific-suffix\" src=\"images/logo.gif\" alt=\"PHD\" />\n    </div>\n</div>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-card"],"properties":{"honorific-prefix":["Dr"],"given-name":["John"],"additional-name":["Peter"],"family-name":["Doe"],"honorific-suffix":["MSc","PHD"],"name":["Dr \n        John \n        P  \n        Doe"],"photo":["http://example.com/images/logo.gif"]}}],"rels":{},"rel-urls":{}};

   it('name', function(){
       assert.deepEqual(found, expected);
   });
});
