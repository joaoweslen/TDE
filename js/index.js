$(document).ready(function () {
    $(window).scroll(function () {
        // barra de navegação fixa na rolagem
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        //botão de rolagem para cima mostrar/ocultar script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //deslize para cima script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /*Animção da rolagem*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    /*Mostra o texto do sobre depois da rolagem*/
    sr.reveal('.about__img', {});
    sr.reveal('.about__subtitle', { delay: 400 });
    sr.reveal('.about__text', { delay: 400 });

    // Animação de escrevendo
    var typed = new Typed(".typing", {
        strings: ["Petróleo", "Preços"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Carrosel do equipe
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});