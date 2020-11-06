/*
* Author: Sean Brown,
* Created: October 31st, 2020
* Public Domain
*/
endpoint="https://www.boredapi.com/api/activity/"

$("#activate").click(function(){
  $.ajax({
url: endpoint,

})
// If the request succeeds
.done(function( data ) {
      // alert("Success!");
      var quote = data.activity;
      $("#output").append("<p>" + quote)
       alert("Success!");
  })

// If the request fails
.fail(function( xhr, status, errorThrown ) {
 console.log(errorThrown + " Status:" + status );
})

})
