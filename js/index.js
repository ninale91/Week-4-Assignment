 $(document).ready(){
   alert("Hello! I am an alert box!!");
   $('#show-this-on-click').addClass('hide');

   $('.readmore').on('click', function() {
     $(this).next('#show-this-on-click').toggleClass('.hide');
   });
}]
