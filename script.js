function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}
function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
