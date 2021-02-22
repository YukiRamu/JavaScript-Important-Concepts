/* Yuki Matsubara - Morning Class WMAD2 Week1 Weekly Assignment */
/* ===== Move to top button =====*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 200) {
      $('#toTop').fadeIn();
  } else {
      $('#toTop').fadeOut();
  }
});
$(document).ready(function() {
  $("#toTop").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });
});

/*Examples shown in the articles */
// //closure
// function outerFunction () {
//   const outer = `I see the outer variable!`

//   function innerFunction() {
//     console.log("I am here " + outer);
//   }
//   return innerFunction;
// }
// outerFunction()();


//Local Scope
if (true) {
  //Local scope 1

}else {
  //Local scope 2

}
function getName() {
  //Local scope 3
  var fullName = "Edward";
}
//Global Scope
console.log(fullName);
getName();
  






