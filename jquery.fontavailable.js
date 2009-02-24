/* fontAvailable jQuery Plugin, v1.0
 *
 * Copyright (c) 2009, Howard Rauscher
 * Licensed under the MIT License
 */
 
(function($) {
	var element;
	
    $.fontAvailable = function(fontName) {
        var width;    
        // prepare element, and append to DOM
        !element && ( element = $( document.createElement( 'span' ))
            .css('visibility', 'hidden')
            .html('abcdefghijklmnopqrstuvwxyz')
            .appendTo( document.body ));
        
        // get the width of element after applying a fake font
        width = element
            .css('font-family', '__FAKEFONT__')
            .width();
        
        element.css('font-family', fontName);
        
        return width !== element.width();
    }
})(jQuery);