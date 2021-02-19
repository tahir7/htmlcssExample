
$(document).ready(function() {
        $('.nav-item').click(function(){
          var value = $(this).attr('data-filter');
          console.log('value  ', value)

          if(value == 'all') {
            $('.filter').show('2000');
          } else {
              $('.filter').not('.'+value).hide('2000');
              // console.log('.filter.not+value  '  , $('.filter').not('.'+value))

              $('.filter').filter('.'+value).show('2000');
          }

        });

          if($('.nav-item').removeClass('active')) {
            $(this).removeClass('active');
            $(this).addClass('active');
          }
        
          

      });
