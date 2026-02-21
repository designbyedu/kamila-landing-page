// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initial Load Animation (Hero Section)
const heroTl = gsap.timeline({
    defaults: { ease: "power4.out" }
});

// Animate each word in the hero title
const words = document.querySelectorAll('.hero-title .word');
gsap.set(words, { yPercent: 120, opacity: 0 });

heroTl.to(words, {
    yPercent: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    delay: 0.2
})
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=0.8")
    .to('.btn-primary', {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=0.8")
    .fromTo('.navbar',
        { yPercent: -100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 },
        "-=1"
    );

// Scroll Animations for Services Section
gsap.from(".services .section-header > *", {
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
});

gsap.from(".service-card", {
    scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%"
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
});

// Scroll Animations for Portfolio Section
gsap.from(".portfolio .section-header > *", {
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
});

gsap.from(".portfolio-item", {
    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 80%"
    },
    scale: 0.9,
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1
});

// Footer Animation
gsap.from(".footer-content > *", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 90%"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.background = 'rgba(255, 255, 255, 0.85)';
    }
});
