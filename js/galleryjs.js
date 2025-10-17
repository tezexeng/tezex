
        // Back-to-Top Button Script
        const backToTopButton = document.getElementById('back-to-top');
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
          }
        }

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

        // ====================================
        // NEW JAVASCRIPT FOR IMAGE CAROUSEL
        // ====================================
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.querySelector('.carousel-track');
            const items = Array.from(document.querySelectorAll('.carousel-item'));
            const prevButton = document.querySelector('.arrow-left');
            const nextButton = document.querySelector('.arrow-right');
            const captionElement = document.getElementById('carousel-caption-text');
            const itemCount = items.length;
            let currentIndex = 0;

            // Function to update the carousel's visual state
            const updateCarousel = () => {
                // Calculate the amount to translate (move) the track
                const translateAmount = -currentIndex * 100;
                track.style.transform = 'translateX(' + translateAmount + '%)';

                // Update the image caption
                captionElement.textContent = items[currentIndex].getAttribute('data-caption');

                // Update button disabled state
                prevButton.disabled = currentIndex === 0;
                nextButton.disabled = currentIndex === itemCount - 1;
            };

            // Event listener for the Next button
            nextButton.addEventListener('click', () => {
                if (currentIndex < itemCount - 1) {
                    currentIndex++;
                    updateCarousel();
                }
            });

            // Event listener for the Previous button
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                    }
            });

            // Initialize the carousel on load
            updateCarousel();
        });

