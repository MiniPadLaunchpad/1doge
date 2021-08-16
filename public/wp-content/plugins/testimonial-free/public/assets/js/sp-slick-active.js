jQuery(document).ready(function ($) {

    $('.sp-testimonial-free-section').each(function (index) {
        var _this = $(this),
            custom_id = $(this).attr('id'),
            preloader = _this.data('preloader');

        if ('1' == preloader) {
            var parents_class = $('#' + custom_id).parent('.sp-testimonial-free-wrapper'),
                parents_siblings_id = parents_class.find('.tfree-preloader').attr('id');
            $(window).load(function () {
                $('#' + parents_siblings_id).animate({ opacity: 1 }, 600).hide();
                $('#' + custom_id).animate({ opacity: 1 }, 600)
            })
        }

        var tfree_custom_slider_id = $(this).attr('id');
        if (tfree_custom_slider_id != '') {
            jQuery('#' + tfree_custom_slider_id).slick({
                pauseOnFocus: false,
                slidesToScroll: 1,
                prevArrow: "<div class='slick-prev'><i class='fa fa-angle-left'></i></div>",
                nextArrow: "<div class='slick-next'><i class='fa fa-angle-right'></i></div>",
            });
        }
    });
});