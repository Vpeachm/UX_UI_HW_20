

$(document).ready(function() {
  $(".hoverLarger").hover(function() {
     $(this).css("transform", "scale(1.2)");
     //$(this).prepend("<img id='starImage' src='../images/realstar.svg'>")
  },
  function() {
   $(this).css("transform", "scale(1)");
   // $(".topUl").remove("#starImage")
  // var topUl = $(this).find('span').attr('class');
  // $("#hoverLarger").toggle();

  })});