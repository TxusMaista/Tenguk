$(window).load(function(){

    $('#opt').toggle(
        function() {
            $('#right').animate({ left: 250 }, 'slow', function() {
                $('#opt').html('<');
            });
        },
        function() {
            $('#right').animate({ left: 0 }, 'slow', function() {
                $('#opt').html('Ì');
            });
        }
    );

    $('#per').toggle(
        function() {
            $('#right').animate({ left: -250 }, 'slow', function() {
                $('#per').html('=');
            });
        },
        function() {
            $('#right').animate({ left: 0 }, 'slow', function() {
                $('#per').html('L');
            });
        }
    );

      $(function() {

      var menu_ul = $('.menu > li > ul'),
             menu_a  = $('.menu > li > a');

      menu_ul.hide();

      menu_a.click(function(e) {
          e.preventDefault();
          if(!$(this).hasClass('active')) {
              menu_a.removeClass('active');
              menu_ul.filter(':visible').slideUp('normal');
              $(this).addClass('active').next().stop(true,true).slideDown('normal');
          } else {
              $(this).removeClass('active');
              $(this).next().stop(true,true).slideUp('normal');
          }
      });

  });
});


