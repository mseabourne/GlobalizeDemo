/* jshint indent: false */
/*jshint -W109 */ // disable single quote warning

"use strict";

console.log('\'Allo \'Allo!');

Globalize.addCultureInfo( 'en-US', {
    messages: {
        buttonHome: 'Home',
        buttonAbout: 'About',
        buttonContact: 'Contact',
        welcomeHeader: 'Hello',
        welcomeMessage: 'America is all about speed. Hot, nasty, badass speed. -Eleanor Roosevelt, 1936',
        btnSuccess: 'Go'
    }
});

Globalize.addCultureInfo( 'en-CA', {
    messages: {
        buttonHome: 'Home, eh!',
        buttonAbout: 'About, eh!',
        buttonContact: 'Contact, eh!',
        welcomeHeader: 'Hello, eh!',
        welcomeMessage: 'Hey, we found a dead mouse in our beer, eh? That means you owe us a free case',
        btnSuccess: 'Go'
    }
});


var myGlobalizeDemo = myGlobalizeDemo || {};
myGlobalizeDemo.switchCountry = function(lang){
    $("#btnHome").text(Globalize.localize( 'buttonHome', lang ));
    $("#btnAbout").text(Globalize.localize( 'buttonAbout', lang ));
    $("#btnContact").text(Globalize.localize( 'buttonContact', lang ));
    $("#welcomeHeader").text(Globalize.localize( 'welcomeHeader', lang ));
    $("#welcomeMessage").text(Globalize.localize( 'welcomeMessage', lang ));
};


$( document ).ready(function() {

  $('#countrySelect').change(function() {
    myGlobalizeDemo.switchCountry($(this).val());
  }).trigger('change');
  
});