// Add active class to current section when nav link is clicked
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    for (let j = 0; j < sections.length; j++) {
      sections[j].classList.remove("active");
    }
    const sectionId = this.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.classList.add("active");
  });
}

// Scroll to section when link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
