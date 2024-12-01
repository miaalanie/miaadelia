(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

// Fungsi untuk validasi form
document.addEventListener("DOMContentLoaded", function () {
    // Ambil form dan elemen peringatan
    const form = document.getElementById("supportForm");
    const warningMessage = document.getElementById("warningMessage");

    // Tambahkan event listener untuk menangani submit form
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Mencegah form dari pengiriman otomatis

        // Ambil nilai dari input form
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Cek apakah semua field terisi
        if (name === "" || email === "" || subject === "" || message === "") {
            // Jika ada field yang kosong, tampilkan pesan peringatan
            warningMessage.style.display = "block";
        } else {
            // Jika semua field terisi, sembunyikan pesan peringatan dan submit form
            warningMessage.style.display = "none";
            alert("Dukungan Anda telah dikirim! Terima kasih atas dukungannya!");
            form.submit(); // Kirim form (bisa ditambahkan action URL form jika diperlukan)
        }
    });
});
