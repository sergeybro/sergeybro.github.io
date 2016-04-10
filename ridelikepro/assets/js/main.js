/**
 * Created by Sergey on 3/3/2016.
 */
(function($){

    $(document).ready(function(){

        $('.testimonials-slider li').each(function (){
            $(this).find($('img')).prependTo($(this).find('.cbp-qtcontent blockquote'))
        });

        $('a.down-button').smoothScroll({speed: 800});

        var pass = $("#pass").val();
    $.get('index.php', $("#pass").val(), function (data) {
    	return alert(data);
    	})
    });

var vagabond (x, y) = {
	 
	 posX: x,

	 posY: y,

	/*currentCoords: [x, y],*/
	goUp: function () {
		/*var currentX = posX;
		currentX = currentX + 1;*/
		x = x + 1;
		return this;
	},
	goDown: function () {
		/*var currentX = posX;
		return currentX = currentX - 1;*/ 
		x = x - 1;
		return this;
	},
	goRight: function () {
		/*var currentY = posY;
		return currentY = currentY + 1;*/ 
		y = y + 1;
		return this;
	},
	goLeft: function () {
		/*var currentY = posY;
		return currentY = currentX - 1;*/ 
		y = y - 1;
		return this;
	}
};

var Artem = new vagabond( 1, 1 );

function vagabond (x, y) {
	 
	 this.posX = x;

	 this.posY = y;

	
	goUp: function () {
	
		x = x + 1;
		return this;
	},
	goDown: function () {
	
		x = x - 1;
		return this;
	},
	goRight: function () {
	
		y = y + 1;
		return this;
	},
	goLeft: function () {
	
		y = y - 1;
		return this;
	}
};

var Artem = new vagabond( 1, 1 );

})(jQuery);