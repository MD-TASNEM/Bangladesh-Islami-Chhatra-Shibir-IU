
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");

  // Toggle Sidebar
  mobileMenuToggle.addEventListener("click", () => {
    mobileSidebar.classList.toggle("-translate-x-full");
    mobileOverlay.classList.toggle("hidden");
  });

  // Hide sidebar when clicking overlay
  mobileOverlay.addEventListener("click", () => {
    mobileSidebar.classList.add("-translate-x-full");
    mobileOverlay.classList.add("hidden");
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        mobileSidebar.classList.add("-translate-x-full");
        mobileOverlay.classList.add("hidden");
      }
    });
  });

