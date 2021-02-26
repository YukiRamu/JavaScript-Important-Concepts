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

//closure
// function getCountry () {
//   let city = "Tokyo";

//   function getCity () {
//     console.log(city); 
//   }
//   getCity();
// }
// getCountry();
//console

//closure
function getCountry() {
  let city = "Tokyo";

  function getCity() {
    return city;
  }
  return getCity;
}
let myCity = getCountry()();
console.log("I worked in " + myCity + " for 4 years");
//console



// //closure
// function OuterFunction () {
//   let city = "Tokyo";

//   function getCity () {
//     console.log (city);
//   }
//   return getCity;
// }
// const myCity = OuterFunction();
// myCity();
// console.log(myCity);
// //console


