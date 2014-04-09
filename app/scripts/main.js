/* jshint indent: false */
/*jshint -W109 */ // disable single quote warning

"use strict";

Globalize.addCultureInfo( 'en-US', {
    messages: {
        buttonHome: 'Home',
        buttonAbout: 'About',
        buttonContact: 'Contact',
        welcomeHeader: 'Hello',
        welcomeMessage: 'America is all about speed. Hot, nasty, badass speed. -Eleanor Roosevelt, 1936',
        btnSuccess: 'Go',
        btnSuccessDestination: 'http://allrecipes.com/Recipe/Baked-Potato/Detail.aspx'
    }
});

Globalize.addCultureInfo( 'en-CA', {
    messages: {
        buttonHome: 'Home, eh!',
        buttonAbout: 'About, eh!',
        buttonContact: 'Contact, eh!',
        welcomeHeader: 'Hello, eh!',
        welcomeMessage: 'Hey, we found a dead mouse in our beer, eh? That means you owe us a free case',
        btnSuccess: 'Get it',
        btnSuccessDestination: 'http://allrecipes.com/Recipe/Real-Poutine/Detail.aspx'
    }
});

Globalize.addCultureInfo( 'fr-FR', {
    messages: {
        buttonHome: 'Maison',
        buttonAbout: 'Sur',
        buttonContact: 'Contacter',
        welcomeHeader: 'Bonjour',
        welcomeMessage: 'Tour de France commence 5th Juillet',
        btnSuccess: 'Aller',
        btnSuccessDestination: 'http://allrecipes.fr/recette/7165/moules-frites.aspx'
    }
});


var myGlobalizeDemo = myGlobalizeDemo || {};
myGlobalizeDemo.switchCountry = function(lang){
    
    // Update individual elements
    // $("#btnHome").text(Globalize.localize( 'buttonHome', lang ));
    // $("#btnAbout").text(Globalize.localize( 'buttonAbout', lang ));
    // $("#btnContact").text(Globalize.localize( 'buttonContact', lang ));
    // $("#welcomeHeader").text(Globalize.localize( 'welcomeHeader', lang ));
    // $("#welcomeMessage").text(Globalize.localize( 'welcomeMessage', lang ));
    Globalize.culture(lang);
    
    // Update all based on data attributes    
    $('[data-localize]').each(function(index) {
        $(this).text(Globalize.localize($(this).data('localize')));
    });

    // example of culture time formatting
    $('#currentTime').text(Globalize.format(new Date(), 'F'));
};


$( document ).ready(function() {

  $('#countrySelect').change(function() {
    myGlobalizeDemo.switchCountry($(this).val());
  }).trigger('change');
  $('#btnSuccess').click(function() {
    window.open(Globalize.localize('btnSuccessDestination'));
  });
});