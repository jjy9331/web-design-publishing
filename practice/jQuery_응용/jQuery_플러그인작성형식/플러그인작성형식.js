//플러그인 작성형식
(function($){
	
	

   $.fn.플러그인명= function(options){
	   
	    options = $.extend({
			a:0,
			b:1,
			c:2,
		}, options);
	   
		
	    this.each(function(){

             options.a + options.b + options.c
			
		});
		return this;
	   
   };
   
   

})(jQuery);



