
    const menuToggle = document.getElementById('mobile-menu');
    const menuList = document.querySelector('.menu-list');

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
            menuList.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });

    
    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('no-scroll');
    });
   
    
    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".menu-list li a");
    
        function checkScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
    
                if (sectionTop < windowHeight * 0.75) {
                    section.classList.add("show");
                } else {
                    section.classList.remove("show");
                }
            });
        }
    
        checkScroll();
    
       
        window.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);
    
        
        navLinks.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const sectionTop = targetSection.offsetTop - 100; 
                    window.scrollTo({
                        top: sectionTop,
                        behavior: "smooth"
                    });
                }
            });
        });
    });
   