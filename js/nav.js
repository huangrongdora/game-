$(document).ready(function () {
  $(window).resize(function () {
    var w = innerWidth;
    if (w < 992) {
      $("#ds").click(function (e) {
        var target = e.target || e.srcElement;
       // e.preventDefault();
        console.log(target);
        // $(".nav lu").css({
        //   "position": "absolute",
        //   "top": "100%",
        //   "display": "block !important"
        // })
      });
    }
  });
})