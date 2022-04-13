//플러그인 작성형식
(function($){
	
	

   $.fn.overImg= function(options){
	   
	    options = $.extend({
			a: "_o",
			b: "_x"
		}, options);
	   
		
	    this.each(function(){

             var img = $(this).find("img");
			 var src_off = img.attr("src");
			 var src_on = img.attr("src").replace(options.b, options.a);
			 		 
			 $(this).mouseenter(function(){
				 img.attr("src",src_on);
			 });
			 $(this).mouseleave(function(){
				 img.attr("src",src_off);
			 });
			 
			
		});
		return this;
	   
   };
   
   

})(jQuery);













