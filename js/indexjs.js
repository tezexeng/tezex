
        // Back-to-Top Button Script
    const backToTopButton = document.getElementById('back-to-top');

    function scrollFunction() {
        // Check if the user has scrolled down more than 150px
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // CRITICAL FIX: Run the function once on load to set the initial state
    scrollFunction(); 

    // Then, bind the function to the scroll event
    window.onscroll = function() {scrollFunction()};

    // Click handler for smooth scroll
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });

        
        // Hamburger Menu Script
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');

        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            
            // Toggle the icon between bars and close (X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // FAQ Toggle Script
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                // Close any currently active FAQ item before opening the new one
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle the 'active' class on the clicked item
                item.classList.toggle('active');
            });
        });

