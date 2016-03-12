/**
 * Created by Sergey on 3/3/2016.
 */
(function($){

    $(document).ready(function(){

        $('.testimonials-slider li').each(function (){
            $(this).find($('img')).prependTo($(this).find('.cbp-qtcontent blockquote'))
        });

        $('a.down-button').smoothScroll({speed: 800});

    });

})(jQuery);