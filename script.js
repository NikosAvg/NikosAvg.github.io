document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMode");

  if (toggleButton) {
    // Set default icon
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';

    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      toggleButton.innerHTML = document.body.classList.contains("dark")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  }

  // Scroll animation
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
});
