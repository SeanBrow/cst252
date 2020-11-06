/*
* Author: Sean Brown,
* Created: October 31st, 2020
* Public Domain
*/
endpoint="http://numbersapi.com/random/trivia/"

$("#activate").click(function(){
  $.ajax({
url: endpoint,

})
// If the request succeeds
.done(function( json ) {
  $.get(endpoint, function(data) {
      $('#output').text(data);
})
 alert("Success!");

})
// If the request fails
.fail(function( xhr, status, errorThrown ) {
 console.log(errorThrown + " Status:" + status );
})

})
