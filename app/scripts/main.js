console.log('\'Allo \'Allo!');

Globalize.loadTranslation( "en-US", {
  greetings: {
    hello: "howdy folks",
    bye: "bye"
  }
});

Globalize.loadTranslation( "en-CA", {
  greetings: {
    hello: "how's it going, eh!",
    bye: "see ya later hoser"
  }
});
$( document ).ready(function() {

  $("#countrySelect").change(function() {
    alert("switch country");
  });
  
});