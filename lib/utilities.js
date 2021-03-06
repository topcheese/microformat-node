/*
   Utilities
   Copyright (C) 2010 - 2013 Glenn Jones. All Rights Reserved.
   MIT License: https://raw.github.com/glennjones/microformat-node/master/license.txt
   
   */

'use strict';

module.exports = {

    // is the object a string
    isString: function( obj ) {
        return typeof( obj ) === 'string';
    },
    
    // is the object a number
    isNumber: function( obj ) {
        return !isNaN(parseFloat( obj )) && isFinite( obj );
    },


    // does a string start with the test
    startWith: function( str, test ) {
        return(str.indexOf(test) === 0);
    },


    // remove spaces at front and back of string
    trim: function( str ) {
        if(this.isString(str)){
            return str.replace(/^\s+|\s+$/g, '');
        }else{
            return '';
        }
    },


    // is a string only contain white space chars
    isOnlyWhiteSpace: function( str ){
        return !(/[^\t\n\r ]/.test( str ));
    },


    // removes white space from a string
    removeWhiteSpace: function( str ){
        return str.replace(/[\t\n\r ]+/g, ' ');
    },

    // checks a string is a valid HTML ID
    // HTML4 spec: ID and NAME tokens must begin with a letter ([A-Za-z]) and may be followed by any number of letters, digits ([0-9]), hyphens ("-"), underscores ("_"), colons (":"), and periods (".").
    // this is a much more strict test to stop css parser from throwing errors, so it blocks the use of colons (":"), and periods (".")
    isValidHTMLID: function( str ){
        if(str 
            && this.trim(str) !== '' 
            && str.indexOf(',') < 0
            && str.indexOf('.') < 0 
            && str.indexOf(':') < 0  
            && this.trim(str).indexOf(' ') < 0 ){

            return true
        }else{
            return false
        }
    },


    // is the object a array
    isArray: function( obj ) {
        return obj && !( obj.propertyIsEnumerable( 'length' ) ) && typeof obj === 'object' && typeof obj.length === 'number';
    },


    // simple function to find out if a object has any properties. 
    hasProperties: function( obj ) {
        var key;
        for(key in obj) {
            if( obj.hasOwnProperty( key ) ) {
                return true;
            }
        }
        return false;
    }

};


