jQuery(document).ready(function () {

    jQuery('.navigation').on('click', '.dropdown-js', function (e) {
        if(jQuery(this).hasClass('opened')){
            jQuery(this).removeClass('opened');
            jQuery('.submenu-js').slideUp(300);
        } else{
            jQuery(this).addClass('opened');
            jQuery('.submenu-js').slideDown(300);
            e.preventDefault();
        }

    });

});


jQuery(function($){
    $(document).mouseup(function (e){
        var block = $(".opened");
        if (!block.is(e.target)
            && block.has(e.target).length === 0) {
            block.find('.submenu-js').slideUp(300);
            jQuery('.dropdown-js').removeClass('opened');
        }
    });
});