$(document) .ready(function() {
  

  $(document).hover(function() {
    $('.call').addClass('animated');
});

  

  var g= true;
    $(".navbutton").hover(function(){
        
        if (g==true) {
            $(".navbutton").css("width", "85px");
            g=false;
        }
        else {
            $(".navbutton").css("width", "75px");
            g=true;
        }
    });  
  
  
   var gg= true;
    $(".navbutton").click(function(){
        if (gg==true) {
            $( ".nav" ).css("position", "fixed");
            $( ".nav" ).css("display", "inherit");
            
            gg=false;
        }
        else {

            $( ".nav" ).css("display", "none");

            gg=true;
            
        }   
    });

       var help= true;
    $("#help").hover(function(){
        if (help==true) {
         
         $( "#helpwindow" ).animate({
              opacity: "1"
              }, 200);
            
            help=false;
        }
        else {

        $( "#helpwindow" ).animate({
              opacity: "0"
              }, 200);

            help=true;
            
        }   
    });
  
  
    var o= true;
    $("#termA").hover(function(){
        if (o==true) {
            
            $("#termA").html('L<a class="underlinestatic">aw</a>n<br/><a class="underlinestatic">Guy</a>land');
            $("#preview").html('New York');
            $( ".underline" ).animate({
              color: "#DE6E64"
              }, 100);

            $( ".head1" ).animate({
              top: "-12px"
              }, 10);

            $( ".head2" ).animate({
              top: "27px"
              }, 10);


            o=false;
        }
        else {
            $("#termA").html('Long</br>Island');
            $("#preview").html('Standard');
            $( ".underline" ).animate({
              color: "#1D7FCA"
              }, 100);

            $( ".head1" ).animate({
              top: "0px"
              }, 10);

            $( ".head2" ).animate({
              top: "15px"
              }, 10);

            o=true;
        }    
    });

  

     var termclick= true;
    $("#termA").click(function(){

            $( "#termA" ).animate({
              opacity: "0"
              }, 0);

            $( ".termcontainer" ).animate({
              width: "600px"
              }, 0);

            $( "#termB1" ).animate({
              opacity: "1"
              }, 50);
            $( ".popup" ).animate({
              opacity: "1"
              }, 100);
            $( ".tint" ).animate({
              opacity: ".25"
              }, 2000);
            $("#termB1").css("top", "-5%");
            $( "#termB2" ).animate({
              opacity: "1"
              }, 200);
            $("#termB2").css("top", "34%");

            $('.popup').css('zIndex', 1);
            $('#termB1').css('zIndex', 3);
            $('.details').css('zIndex', 3);
            $('#termB2').css('zIndex', 3);
            $('.tint').css('zIndex', 0);

             $( "#newyork" ).animate({
              opacity: "1"
              }, 800);

              $( "#standard" ).animate({
              opacity: "1"
              }, 800);

          $( ".details" ).animate({
              opacity: "1"
              }, 800);

          $( "#lingfeature" ).animate({
              opacity: "1"
              }, 800);

          $( "#next" ).animate({
              opacity: "0"
              }, 100);

          $( "#prev" ).animate({
              opacity: "0"
              }, 100);

          $( "#help" ).animate({
              opacity: "0"
              }, 100);

          $( "#preview" ).animate({
              opacity: "0"
              }, 0);

          $( ".grid-icon" ).animate({
              opacity: "0"
              }, 0);

          $( ".logo" ).animate({
              opacity: "0",
              zIndex: "0"
              }, 0);

          $( ".pointer" ).animate({
              opacity: "0"
              }, 0);

          $( ".abt" ).animate({
              opacity: "0"
              }, 0);
    });




    var termclick= true;
    $(".close").click(function(){

        $( "#termA" ).animate({
              opacity: "1"
              }, 100);

        $( ".termcontainer" ).animate({
              width: "300px"
              }, 0);

        $( "#termB1" ).animate({
              opacity: "0"
              }, 20);
        $( ".popup" ).animate({
              opacity: "0"
              }, 100);
            $( ".tint" ).animate({
              opacity: "0"
              }, 20);
            $("#termB1").css("top", "30%");
            $( "#termB2" ).animate({
              opacity: "0"
              }, 20);
            $("#termB2").css("top", "14%");

            $( "#newyork" ).animate({
              opacity: "0"
              }, 800);

            $( "#standard" ).animate({
              opacity: "0"
              }, 800);

          $( ".details" ).animate({
              opacity: "0"
              }, 0);

          $( "#lingfeature" ).animate({
              opacity: "0"
              }, 800);
            $('.popup').css('zIndex', -1);
            $('#termB1').css('zIndex', 1);
            $('.details').css('zIndex', 2);
            $('#termB2').css('zIndex', 1);
            $('.tint').css('zIndex', -2);

            $( "#next" ).animate({
              opacity: "1"
              }, 500);

            $( "#prev" ).animate({
              opacity: "1"
              }, 500);

            $( "#help" ).animate({
              opacity: "1"
              }, 1000);

             $( "#preview" ).animate({
              opacity: "1"
              }, 1300);

             $( ".grid-icon" ).animate({
              opacity: "1"
              }, 1000);

             $( ".logo" ).animate({
              zIndex: "3"
              }, 0);

              $( ".logo" ).animate({
              opacity: "1"
              }, 1000);

              $( ".pointer" ).animate({
              opacity: "1"
              }, 1000);

              $( ".abt" ).animate({
              opacity: "1"
              }, 1000);
  
    });


  

  
  

  jQuery(function( $ ) {
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#prev";
    // RIGHT
    keymap[ 39 ] = "#next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});


       var photo= true;
  $(".body").one('mouseenter',function(){
        if (photo==true) {
          
          $( ".termcontainer" ).animate({
              opacity: "1"
              }, 500);

          $( ".overlay" ).animate({
              opacity: "1"
              }, 100);

          $( ".leftcolumn1" ).animate({
              opacity: "0"
              }, 500);

          $( "#next" ).animate({
              opacity: "1"
              }, 1000);

          $( "#prev" ).animate({
              opacity: "1"
              }, 1000);

          $( ".grid-icon" ).animate({
              opacity: "1"
              }, 1000);

            $( "#preview" ).animate({
              opacity: "1"
              }, 200);

            $( ".pointer" ).animate({
              opacity: "1"
              }, 1000);

            $( ".abt" ).animate({
              opacity: "1"
              }, 1000);



            photo=false;
        }
        else {
          
         // $( ".termcontainer" ).animate({
         //      opacity: "0"
         //      }, 500);

         //  $( ".overlay" ).animate({
         //      opacity: "0"
         //      }, 100);

         //  $( ".leftcolumn1" ).animate({
         //      opacity: "1"
         //      }, 500);

         //  $( "#next" ).animate({
         //      opacity: "0"
         //      }, 100);
          
            
            photo=true;
        }    
    });



  
});