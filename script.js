
    // Add your JavaScript code here
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            header.classList.add('animate');
        } else {
            header.classList.remove('animate');
        }
    });
