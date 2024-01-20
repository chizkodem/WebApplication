document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');

    // Function to remove "active" class from all navigation links and parent <li> elements
    function removeActiveClass() {
        navLinks.forEach(navLink => {
            navLink.classList.remove('active');
            if (navLink.parentElement.tagName === 'LI') {
                navLink.parentElement.classList.remove('active');
            }
        });
    }

    // Add click event listener to the logo
    logo.addEventListener('click', function () {
        removeActiveClass();
    });

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove the "active" class from all navigation links and parent <li> elements
            removeActiveClass();

            // Add the "active" class to the clicked navigation link and its parent <li> element
            this.classList.add('active');
            if (this.parentElement.tagName === 'LI') {
                this.parentElement.classList.add('active');
            }
        });
    });
});
