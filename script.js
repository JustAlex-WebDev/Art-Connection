// Nav styles on scroll
const scrollHeader = () => {
  const navbarElement = document.getElementById("header");
  if (this.scrollY >= 15) {
    navbarElement.classList.add("activated");
  } else {
    navbarElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Scroll to the top btn
const scrollToTopBtn = document.querySelector(".scrollToTop-btn");

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = () => {
  scrollFunction();
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}
