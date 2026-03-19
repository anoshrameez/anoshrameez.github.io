gsap.from("#about .glass", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

gsap.from(".social-icon-btn", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
    },
    scale: 0,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.7)"
});

gsap.from("#process .glass", {
    scrollTrigger: {
        trigger: "#process",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});