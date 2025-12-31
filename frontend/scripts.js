// hamburger menu toggle
function toggleSideNav() {
    const sideNav = document.getElementById("side-nav");
    sideNav.classList.toggle("translate-x-full");

}
// close side nav on escape key 
document.addEventListener("keydown", e => {
    if (e.key === "Escape") toggleSideNav();
});

//scroll fade animation
document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelectorAll(".scroll-fade-up");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.10 // trigger % value
        }
    );
    element.forEach(el => observer.observe(el));
});