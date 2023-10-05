document.addEventListener('DOMContentLoaded', function () {
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
  
    function checkVisibility() {
      animateOnScrollElements.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop - windowHeight <= 0) {
          element.classList.add('animated');
        }
      });
    }
  
    // Initial check in case elements are already in the viewport on page load.
    checkVisibility();
  
    // Listen for scroll events and check element visibility.
    window.addEventListener('scroll', checkVisibility);
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const scrollItems = document.querySelectorAll('.scroll-item');
    let currentIndex = 0;
  
    function showNextItem() {
      scrollItems[currentIndex].classList.remove('show');
      currentIndex = (currentIndex + 1) % scrollItems.length;
      scrollItems[currentIndex].classList.add('show');
    }
  
    // Initial display
    scrollItems[currentIndex].classList.add('show');
  
    // Set an interval to show the next item every 3 seconds
    setInterval(showNextItem, 3000);
  });
  