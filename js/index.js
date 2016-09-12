 $(document).ready(start);

 function start(){
  //  $('#show-this-on-click').addClass('hide');
  $('.readmore').click(showMore);
  $('.readless').click(showLess);
  $('learnmore').click(LearnMore);
  $('hide').click(LearnLess);
 };

 function showMore(e) {
   e.preventDefault();
   $('#show-this-on-click').slideDown();
   $('.readmore').hide();
   $('.readless').show();
 }

 function showLess(e) {
   e.preventDefault();
   $('#show-this-on-click').slideUp();
   $('.readless').hide();
   $('.readmore').show();
 }
