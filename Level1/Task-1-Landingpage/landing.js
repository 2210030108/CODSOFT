const menuToggle = document.querySelector('#mobile-menu');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        nav.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Select all elements with the class 'scroll-animate'
        const elements = document.querySelectorAll('.scroll-animate');
        
        // Create an intersection observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Stop observing the element once it has animated
                }
            });
        }, {
            threshold: 0.2 // Trigger animation when 20% of the element is visible
        });

        // Observe each element
        elements.forEach(element => {
            observer.observe(element);
        });
    });