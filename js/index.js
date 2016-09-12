 $(document).ready(start);

 function start(){
   $('#show-this-on-click').addClass('hide');
 }

   $('.readmore').on('click', function() {
     $(this).next('#show-this-on-click').toggleClass('hide');
   })
