 $(document).ready(start);

 function start(){
  //  $('#show-this-on-click').addClass('hide');
  $('.readmore').click(showMore);
  $('.readless').click(showLess);
  $('learnmore').click(learnMore);
  $('hide').click(learnLess);
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

function learnMore(e){
  e.preventDefault();
  $('#learnmoretext').slideDown();
  $('.learnmore').hide();
  $('.readless').show();
}

function learnLess(e){
  e.preventDefault();
  $('#learnmoretext').slideUp();
  $('.learnless').hide();
  $('.readmore').show();
}
