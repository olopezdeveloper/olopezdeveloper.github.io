jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   

  $('#language').change(function() {
    console.log(this.checked);
    if(this.checked){
        $(".english").removeClass("hidden");
        $(".spanish").addClass("hidden");
    }else{
        $(".spanish").removeClass("hidden");
        $(".english").addClass("hidden");
    }

  })
    

});