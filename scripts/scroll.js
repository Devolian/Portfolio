function scrollDown(section) {
    document.getElementById(section).scrollIntoView();
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 1) $('#scroll-button').hide();
    else $('#scroll-button').show();
});
