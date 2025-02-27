// Toggle navbar visibility on small screens
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Highlight active section in the navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  const top = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Remove 'active' class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the current section's link
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

// Filter Projects by Category
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Add click event listener to all filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      // Show or hide project cards based on the filter
      projectCards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Dark mode toggle functionality
const darkModeToggle = document.querySelector("#darkmode-toggle");
const body = document.querySelector("body");
const icon = document.querySelector(".btn__icon");

let isDarkMode = localStorage.getItem("darkmode") === "true"; // Load dark mode state from local storage

const toggleDarkMode = () => {
  document.documentElement.style.setProperty(
    "--bg-color",
    isDarkMode ? "#080808" : "#f0f0f0"
  );
  document.documentElement.style.setProperty(
    "--second-bg-color",
    isDarkMode ? "#131313" : "#e0e0e0"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    isDarkMode ? "white" : "#333"
  );
  document.documentElement.style.setProperty(
    "--main-color",
    isDarkMode ? "#00ffee" : "#fa8128"
  );
  body.classList.toggle("darkmode", isDarkMode);
  updateIcon();
};

darkModeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  storeDarkModePreference(isDarkMode);
  toggleDarkMode();
});

function storeDarkModePreference(value) {
  localStorage.setItem("darkmode", value);
}

function updateIcon() {
  icon.classList.add("animated");

  if (isDarkMode) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500); // Remove the animation class after it completes
}

// Initialize dark mode on page load
toggleDarkMode();
