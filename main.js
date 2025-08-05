// main.js
gsap.registerPlugin(ScrollTrigger);

// ===== HERO SECTION =====
gsap.set("#hero h1, #hero .hero-sub", {opacity: 0, y: 60});
gsap.set(".down-arrow", {opacity: 0, y: 30});
gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom 60%",
    scrub: true,
    pin: "#hero",
    pinSpacing: true,
  }
})
.to("#hero h1", {opacity: 1, y: 0, duration: 1.1, ease: "power2.out"})
.to("#hero .hero-sub", {opacity: 1, y: 0, duration: 1.1, ease: "power2.out"}, "-=0.7")
.to(".down-arrow", {opacity: 1, y: 0, duration: 0.9, ease: "power2.out"}, "-=0.6");

// Arrow yoyo bounce (infinite, not tied to scroll)
gsap.to(".down-arrow", {
  y: 18,
  repeat: -1,
  yoyo: true,
  duration: 1.1,
  ease: "power1.inOut"
});

// ===== PROBLEM SECTION =====
gsap.set("#problem h2, #problem .problem-desc", {opacity: 0, y: 60});
gsap.set(".collage-rect", {opacity: 0, scale: 0.96, rotation: -8, transformOrigin: "50% 50%"});
gsap.set(".problem-reveal", {opacity: 0, y: 40});

let collageRects = document.querySelectorAll(".collage-rect");
let collageTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#problem",
    start: "top 80%",
    end: "+=70%",
    scrub: true,
    pin: "#problem",
    anticipatePin: 1,
  }
});
collageTl
  .to("#problem h2", {opacity: 1, y: 0, duration: 1.05, ease: "power2.out"})
  .to("#problem .problem-desc", {opacity: 1, y: 0, duration: 1.05, ease: "power2.out"}, "-=0.7")
  .to(collageRects, {
    opacity: 1,
    scale: 1.04,
    rotation: (i) => [-8, 12, -4, 7][i] || 0,
    duration: 1.18,
    stagger: 0.18,
    ease: "power2.out"
  }, "-=0.5")
  .to(collageRects, {
    scale: 1,
    rotation: (i) => [0, 0, 0, 0][i],
    duration: 0.5,
    ease: "power2.inOut"
  })
  .to(collageRects, {
    opacity: 0,
    duration: 0.6,
    stagger: 0.11,
    ease: "power1.in"
  }, "+=0.45")
  .to(".problem-reveal", {opacity: 1, y: 0, duration: 1, ease: "power2.out"}, "-=0.23");

// ===== SOLUTION SECTION =====
gsap.set("#solution h2", {opacity: 0, y: 60});
gsap.set(".feature-card", {opacity: 0, y: 60});
gsap.timeline({
  scrollTrigger: {
    trigger: "#solution",
    start: "top 80%",
    end: "+=90%",
    scrub: true,
    pin: "#solution",
    anticipatePin: 1,
  }
})
.to("#solution h2", {opacity: 1, y: 0, duration: 1.05, ease: "power2.out"})
.to(".feature-card", {
  opacity: 1, y: 0,
  duration: 1.1,
  stagger: 0.24,
  ease: "power2.out"
}, "-=0.65");

// ===== FEATURES SECTION =====
gsap.set(".features-row .feature-card", {opacity: 0, y: 60, scale: 0.94});
gsap.timeline({
  scrollTrigger: {
    trigger: "#features",
    start: "top 80%",
    end: "+=85%",
    scrub: true,
    pin: "#features",
    anticipatePin: 1,
  }
})
.to(".features-row .feature-card", {
  opacity: 1,
  y: 0,
  scale: 1,
  duration: 1.16,
  stagger: 0.32,
  ease: "power2.out"
});

// ===== VISION SECTION =====
gsap.set("#vision h2, #vision p", {opacity: 0, y: 60});
gsap.timeline({
  scrollTrigger: {
    trigger: "#vision",
    start: "top 85%",
    end: "+=60%",
    scrub: true,
  }
})
.to("#vision h2", {opacity: 1, y: 0, duration: 1.02, ease: "power2.out"})
.to("#vision h2", {
  y: -24,
  duration: 1.3,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#vision",
    start: "top 90%",
    end: "bottom top",
    scrub: true,
  }
}, "-=0.85")
.to("#vision p", {opacity: 1, y: 0, duration: 0.85, ease: "power2.out"}, "-=0.74");

// ===== CTA SECTION =====
gsap.set("#cta h2, .cta-form, .cta-note", {opacity: 0, y: 42});
gsap.timeline({
  scrollTrigger: {
    trigger: "#cta",
    start: "top 85%",
    end: "+=55%",
    scrub: true,
  }
})
.to("#cta h2", {opacity: 1, y: 0, duration: 1, ease: "power2.out"})
.to(".cta-form", {opacity: 1, y: 0, duration: 1, ease: "power2.out"}, "-=0.7")
.to(".cta-note", {opacity: 1, y: 0, duration: 1, ease: "power2.out"}, "-=0.7");

// ===== Accessibility: allow tab focus on input/button =====
document.querySelectorAll('input, button').forEach(el => {
  el.tabIndex = 0;
});