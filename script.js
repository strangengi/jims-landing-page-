/**
 * JIMS Greater Noida - Basic JavaScript
 * Clean, standard, and easy to explain in a technical interview.
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
      });
    });
  }

  // 2. Course Category Filter Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const courseCards = document.querySelectorAll(".course-card");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      tabButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add active class to clicked button
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      // Show or hide course cards based on category
      courseCards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 3. Simple FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      const parentItem = this.parentElement;

      // Close other FAQ items
      document.querySelectorAll(".faq-item").forEach(function (item) {
        if (item !== parentItem) {
          item.classList.remove("active");
          const icon = item.querySelector(".faq-icon");
          if (icon) icon.textContent = "+";
        }
      });

      // Toggle current item
      parentItem.classList.toggle("active");
      const icon = parentItem.querySelector(".faq-icon");
      if (icon) {
        icon.textContent = parentItem.classList.contains("active") ? "-" : "+";
      }
    });
  });

  // 4. Quick Apply Button Action
  const applyButtons = document.querySelectorAll(".apply-course-btn");
  const courseDropdown = document.getElementById("heroCourse");

  applyButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const courseName = this.getAttribute("data-course");

      // Auto-select course in enquiry form
      if (courseDropdown && courseName) {
        courseDropdown.value = courseName;
      }

      // Scroll smoothly to enquiry form
      const formSection = document.getElementById("enquiryForm");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
        const nameField = document.getElementById("studentName");
        if (nameField) nameField.focus();
      }
    });
  });

  // 5. Basic Form Validation & Submit Handling
  const forms = [
    document.getElementById("enquiryForm"),
    document.getElementById("contactForm")
  ];

  forms.forEach(function (form) {
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = form.querySelector('input[name="name"]');
      const phoneInput = form.querySelector('input[name="phone"]');

      // Simple validation
      if (!nameInput || nameInput.value.trim() === "") {
        alert("Please enter your name.");
        return;
      }

      if (!phoneInput || phoneInput.value.trim().length < 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }

      // Successful submission confirmation
      alert("Thank you, " + nameInput.value.trim() + "! Your enquiry has been submitted. Our JIMS admissions team will call you soon.");
      form.reset();
    });
  });

});
