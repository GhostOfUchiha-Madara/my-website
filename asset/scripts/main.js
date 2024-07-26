// JavaScript for Dropdown Menu Animation
document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            var dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = 'block';
            dropdownContent.style.opacity = 0;
            setTimeout(function() {
                dropdownContent.style.opacity = 1;
            }, 0);
        });

        dropdown.addEventListener('mouseleave', function() {
            var dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.opacity = 0;
            setTimeout(function() {
                dropdownContent.style.display = 'none';
            }, 300); // Match this with the CSS transition duration
        });
    });
});

// JavaScript for smooth scrolling
/*document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});*/
