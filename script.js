// scroll reveal //
document.addEventListener("DOMContentLoaded", function() {
    const projectContainers = document.querySelectorAll('.projectContainer');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;

        projectContainers.forEach(container => {
            const containerTop = container.getBoundingClientRect().top + scrollTop;
            const containerBottom = container.getBoundingClientRect().bottom + scrollTop;

            // Adjust the offset as needed to control when the container appears
            const offset = windowHeight * 0.4; // Adjust this value as needed

            // Check if the container is within the viewport and if the page is not at the very top
            if (scrollTop > 0 && containerTop < scrollTop + windowHeight - offset && containerBottom > scrollTop + offset) {
                container.classList.add('visible');
            } else {
                container.classList.remove('visible');
            }

            // Handle projectItem elements within each container
            const projectItems = container.querySelectorAll('.projectItem');
            projectItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top + scrollTop;
                const itemBottom = item.getBoundingClientRect().bottom + scrollTop;

                // Adjust the offset for projectItem elements
                const itemOffset = windowHeight * 0.32; // Adjust this value as needed

                // Check if the item is within the viewport and if the page is not at the very top
                if (scrollTop > 0 && itemTop < scrollTop + windowHeight - itemOffset && itemBottom > scrollTop + itemOffset) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    revealOnScroll(); // Initial call to reveal items already in view
});


// scroll to top on page load/refresh //
document.addEventListener("DOMContentLoaded", function() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional: smooth scrolling behavior
      });
  };

  // Call scrollToTop function when the page loads
  scrollToTop();
});
