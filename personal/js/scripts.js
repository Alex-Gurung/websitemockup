document.addEventListener("DOMContentLoaded", function () {
    Typed.new("#typer", {
        strings: ["Me! ", "<span class='lighthouse'>Lighthouse</span> ",
            "<span class='sah'>S. A. H.</span> ",
            "<span class='notes'>Notes With Markov</span> ",
            "<span class='ship'>Ship Creator</span> ", "News Scraper "
        ],
        typeSpeed: 1.5,
        backSpeed: 0.75,
        loop: true,
        backDelay: 800
    });
});
AOS.init();
$('body').flowtype();
    smoothScroll.init({
    speed: 800,
    easing: 'easeInOutCubic'
});
$(".github-inline").click(function () {
    var win = window.open('https://github.com/alex-gurung', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
    }
});