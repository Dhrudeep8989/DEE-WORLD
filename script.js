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
    const heroTextElement = document.getElementById('hero-text');
    const knowMoreBtn = document.getElementById('knowMoreBtn');
    const carAnimationContainer = document.getElementById('car-animation-container');

    if (heroTextElement && knowMoreBtn && carAnimationContainer) {
        // Typing animation on the hero text
        const heroText = "Hey, I'm Alex Johnson. A Full-Stack Developer.";
        let i = 0;
        function typeHeroText() {
            if (i < heroText.length) {
                heroTextElement.textContent += heroText.charAt(i);
                i++;
                setTimeout(typeHeroText, 50); // Typing speed
            }
        }
        typeHeroText();

        // "Know me more" button and car animation
        knowMoreBtn.addEventListener('click', () => {
            // Make the car visible and start the animation
            carAnimationContainer.classList.remove('invisible');
            carAnimationContainer.classList.add('drive-animation');
            
            // Wait for the animation to finish (2 seconds)
            setTimeout(() => {
                window.location.href = 'ai-assistant.html';
            }, 2000); // This should match the animation duration in CSS
        });
    }

});
