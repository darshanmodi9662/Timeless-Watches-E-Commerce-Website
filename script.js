// Smooth Scrolling for Navbar Links
document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".nav-link");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            // Smooth scroll to the section
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });
});
// Fade-in Animation for Hero Section
document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector(".hero-section");
    heroSection.style.opacity = 0;
    heroSection.style.transition = "opacity 2s ease-in-out";
    
    // Set opacity to 1 to fade in
    setTimeout(() => {
        heroSection.style.opacity = 1;
    }, 500);
});
