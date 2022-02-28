$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('.home-nav, .mobile-menu').addClass('active')
        } else {
            $('.home-nav, .mobile-menu').removeClass('active')
        }
    })

    $('.mobile-menu, .explore-mobile-menu, .earn-mobile-menu').hide()
    $('.menu-btn').click(function() {
        $('.mobile-menu, .explore-mobile-menu, .earn-mobile-menu').slideToggle(200)
    })

    $('.popup, .popup-invite').hide()
    $(document).on('click', '.profile-btn, .talk', function(e) {
        e.preventDefault()
        $('.popup').fadeIn()
    })

    $('.popup .popup-overlay').click(function() {
        $('.popup').fadeOut()
    })

    $('.welcome-btn').click(function(e) {
        e.preventDefault()
        $('.popup-invite').fadeIn()
    })

    $('.popup-invite .popup-overlay').click(function() {
        $('.popup-invite').fadeOut()
    })


    $('.filter').click(function() {
        $('.filter').not(this).find('ul').slideUp()
        $(this).find('ul').slideToggle(200)
    })


})