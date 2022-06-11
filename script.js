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
