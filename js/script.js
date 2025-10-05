document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  let slideIndex = 1;

  function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    for (let i = 0; i < dots.length; i++)
      dots[i].className = dots[i].className.replace(" active-dot", "");

    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active-dot";
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const slidesExist = document.getElementsByClassName("slides").length > 0;
  if (slidesExist) {
    showSlides(slideIndex);
    setInterval(() => plusSlides(1), 5000);
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;
  }

  const btnGaleri = document.getElementById("btnGaleri");
  const slideshowSection = document.querySelector(".slideshow");
  if (btnGaleri && slideshowSection) {
    btnGaleri.addEventListener("click", (e) => {
      e.preventDefault();
      slideshowSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input, textarea");
      for (let input of inputs) {
        if (!input.value.trim()) {
          alert("Harap isi semua field!");
          return;
        }
      }
      alert("Terima kasih, pesan Anda sudah terkirim!");
      form.reset();
    });
  }

  const navbar = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "⬆";
  scrollBtn.className = "scroll-top-btn";
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollBtn.classList.add("visible");
    else scrollBtn.classList.remove("visible");
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const tentangLink = document.querySelector(".tentang-link");
  const tentangSection = document.getElementById("tentang");
  if (tentangLink && tentangSection) {
    tentangLink.addEventListener("click", (e) => {
      e.preventDefault();
      tentangSection.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, null, "#tentang");
    });
  }

  window.addEventListener("load", () => {
    if (window.location.hash === "#tentang") {
      const tentangSection = document.getElementById("tentang");
      if (tentangSection) {
        window.scrollTo({ top: 0, behavior: "instant" });
        setTimeout(() => {
          tentangSection.scrollIntoView({ behavior: "smooth" });
        }, 400);
      }
    }
  });

  const animatedEls = document.querySelectorAll(".fade-in-up");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  animatedEls.forEach(el => observer.observe(el));

  const fadeEls = document.querySelectorAll(".fade-in");
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });
  fadeEls.forEach(el => obs.observe(el));
});

const slideEls = document.querySelectorAll(".slide-in-left, .slide-in-right");
const slideObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.3 });
slideEls.forEach(el => slideObs.observe(el));

const sectionEls = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
sectionEls.forEach(sec => sectionObserver.observe(sec));

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-visible");
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const target = link.getAttribute("href");
    if (
      target &&
      !target.startsWith("http") &&
      !target.startsWith("#") &&
      !target.startsWith("mailto:")
    ) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("page-visible");
        document.body.classList.add("fade-page");
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  });
});
