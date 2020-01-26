$(function () {
  $('header').height($(window).height());
  $('header .cen').each(function(){

     $(this).css('paddingTop',($(window).height()- $('header .cen').height())/2);
     $(this).css('paddingLeft',(($(window).width()-250)- $('header .cen').width())/2);
  });

  
  $('header .arrow i').click(function(){
    $('html , body').animate({
    scrollTop: $('#features').offset().top
    },1000)
    
  });
  
  function checkitem()
    {
        if($('.opinion:first').hasClass('active'))
        {
          $('.testim .fa-chevron-circle-left').fadeOut();
        }
        else
        {
          $('.testim .fa-chevron-circle-left').fadeIn();
        }
        if($('.opinion:last').hasClass('active'))
        {
          $('.testim .fa-chevron-circle-right').fadeOut();
        }
        else
        {
          $('.testim .fa-chevron-circle-right').fadeIn();

        }
    }
    
    $('.testim i').click(function(){
      if($(this).hasClass('fa-chevron-circle-right'))
      {
        $('.testim .active').fadeOut(500,function(){
            $(this).removeClass('active').next('.opinion').addClass('active').fadeIn();
            checkitem();
        });
      }
      else
      {
        $('.testim .active').fadeOut(500,function(){
            $(this).removeClass('active').prev('.opinion').fadeIn().addClass('active')
            checkitem();

        });
      }

    });
    checkitem();
 });