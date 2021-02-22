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
  
function getCity() {
  let city = "Vancouver";
  console.log(city);
}

function getAddress() {
  let city = "Tokyo";
  console.log(city);
}

if (true) {
  let a = 4;
  let result = 5 + a;
} else {
  let b = 5;
  let result = 5 + b;
}






