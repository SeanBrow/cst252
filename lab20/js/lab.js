/*
* Author: Sean Brown,
* Created: November 16th, 2020
* Public Domain
*/

URL="https://xkcd.com/info.0.json"
  $.ajax({
url: URL,
data: {

},
type:"GET"
})
// If the request succeeds
.done(function( data ) {
  console.log(data);
  var imageUrl= data.img;
  var title = data.title;
  var alt=data.alt;
  var html = `
        <div>
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
        </div>
      `
  $("#result").append(html);

  })
