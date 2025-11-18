const sections = document.querySelectorAll('.section');
const controls = document.querySelectorAll('.control');
const mainContent = document.querySelector('.main-content');

// Function to handle page transitions
function pageTransitions() {
  // Navigation button active state
  controls.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Remove active state from all buttons
      controls.forEach((b) => b.classList.remove('active-btn'));
      this.classList.add('active-btn');

      // Get the section id from data-id
      const id = this.dataset.id;

      // Hide all sections
      sections.forEach((section) => section.classList.remove('active'));

      // Show the targeted section
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('active');
      }
    });
  });

  // Theme toggle button
  const themeBtn = document.querySelector('.theme-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
}

// Initialize page transitions
pageTransitions();