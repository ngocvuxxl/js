jQuery.noconflict();
jQuery.fn.stripTags = function() {
    return this.replaceWith( this.html().replace(/<\/?[^>]+>/gi, '') );
};
