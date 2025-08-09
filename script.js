document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Logic (used on all pages) ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const menuLinks = mobileMenu?.querySelectorAll('a');

    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });
    }

    // --- Intro Page Logic (only on index.html) ---
    const knowMoreBtn = document.getElementById('knowMoreBtn');
    const boyAnimationContainer = document.getElementById('boy-animation-container');

    if (knowMoreBtn && boyAnimationContainer) {
        // "Know me more" button and boy animation
        knowMoreBtn.addEventListener('click', () => {
            // Make the boy animation visible and add the animation class
            boyAnimationContainer.classList.remove('invisible');
            boyAnimationContainer.classList.add('fly-animation');
            
            // Wait for the animation to finish (3 seconds) before redirecting
            setTimeout(() => {
                window.location.href = 'ai-assistant.html';
            }, 3000); 
        });
    }

});
