/*
* Author: Sean Brown,
* Created: October 31st, 2020
* Public Domain
*/
//add button to change the class of Challenge
$("button.challenge-btn").click(function(){
 // remove existing classes
 $("#subject").removeClass("formal");
  $("#subject").removeClass("informal");
 //toggle strange  class
 $("#subject").toggleClass("strange")
});

$("button.problem-btn").click(function(){
 // remove existing classes
  $("#subject").removeClass("formal");
 $("#subject").removeClass("strange");
 //  toggle informal class
 $("#subject").toggleClass("informal")
});

$("button.result-btn").click(function(){
 // remove existing classes
 $("#subject").removeClass("informal");
  $("#subject").removeClass("strange");
 //  toggle formal class
 $("#subject").toggleClass("formal")
});

$("bonus-btn").click(function(){
  var $this = $(this);
    if ($this.hasClass ("formal"))
      $this.removeClass("formal")
    if ($this.hasClass ("informal")) {
      $this.toggleClass("formal informal");
    } else {
      $this.addClass("informal")
    }
})
//add button to change the class of Problems
//add button to change the class of Result
