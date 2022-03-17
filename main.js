$(document).ready(function() {

    setTimeout(() => {
        $('.loading-animation').fadeOut(1000)
    }, 1000)

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

    // $('.popup, .popup-invite, .popup-startups').hide()
    $(document).on('click', '.profile-btn, .talk', function(e) {
        e.preventDefault()
        $('.popup').fadeIn()
    })

    $('.popup-overlay').click(function() {
        $(this).parent().fadeOut()
    })

    $('.welcome-btn').click(function(e) {
        e.preventDefault()
        $('.popup-invite').fadeIn()
    })
    
    // $('.startups-link').click(function(e) {
    //     e.preventDefault()
    //     $('.popup-startups').fadeIn()
    // })
    
    $('.community-link').click(function(e) {
        e.preventDefault()
        $('.popup-community').fadeIn()
    })


    $('.filter').click(function() {
        $('.filter').not(this).find('ul').slideUp()
        $(this).find('ul').slideToggle(200)
    })

    $('#startupBtn')[0].click()
        


})