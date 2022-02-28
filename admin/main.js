$(document).ready(function() {

    $('.menu-btn').click(function() {
        $('.sidebar').toggleClass('active')
    })

    $('.checkbox').click(function() {
        $('.checkbox-center').not($(this).find('.checkbox-center')).removeClass('active')
        $(this).find('.checkbox-center').addClass('active')
    })

    $('.popup').hide()
    $('.popup-overlay').click(function() {
        $('.popup').fadeOut()
    })

    $('.add-btn').click(function() {
        $('.add-job-popup').fadeIn()
    })


})