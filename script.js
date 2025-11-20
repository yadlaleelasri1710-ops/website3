// ===============================
// ADVANCED PORTFOLIO INTERACTIONS
// ===============================

// 1️⃣ Typing effect in the hero section
document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.querySelector(".hero h2");
  const text = "Full Stack Developer";
  let index = 0;

  function type() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  typedText.textContent = "";
  type();
});

// 2️⃣ Smooth scroll reveal on sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// 3️⃣ Active navigation link on scroll
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("class");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    }
  });
});

// 4️⃣ Dark / Light Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.className = "dark-toggle";
toggleButton.innerHTML = "🌙";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.innerHTML = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.innerHTML = "☀";
  }
});

// 5️⃣ Contact Form Validation + Animation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showToast("⚠ Please fill in all fields.", "error");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast("📧 Enter a valid email address.", "error");
    return false;
  }

  showToast("✅ Message sent successfully!", "success");
  document.querySelector(".contact-form").reset();
  return false;
}

// 6️⃣ Toast notification system
function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = toast ${type};
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("visible"), 100);
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}