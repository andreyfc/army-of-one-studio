/**
 * Army of One Studio - Website Scripts
 * Handles smooth animations, scroll effects, and interactive elements
 */

(function() {
    'use strict';

    // ============================================
    // Smooth Scroll & Intersection Observer
    // ============================================

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('.featured-game, .about, .values, .footer');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Observe value cards for staggered animation
    const valueCards = document.querySelectorAll('.value-card');
    valueCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    // ============================================
    // Smooth Scroll for Scroll Indicator
    // ============================================

    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const gameSection = document.getElementById('game');
            if (gameSection) {
                gameSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Hide scroll indicator after scrolling
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 100 && scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else if (scrollTop <= 100 && scrollIndicator) {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
        lastScrollTop = scrollTop;
    });

    // ============================================
    // Parallax Effect for Bubbles
    // ============================================

    const bubbles = document.querySelectorAll('.bubble');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        bubbles.forEach((bubble, index) => {
            const speed = (index + 1) * 0.1;
            bubble.style.transform = `translateY(${rate * speed}px)`;
        });
    });

    // ============================================
    // Screenshot Hover Effects
    // ============================================

    const screenshots = document.querySelectorAll('.screenshot');
    screenshots.forEach(screenshot => {
        screenshot.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        screenshot.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // ============================================
    // Smooth Page Load Animation
    // ============================================

    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // ============================================
    // Keyboard Navigation Enhancement
    // ============================================

    // Add keyboard support for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button, .social-link');
    ctaButtons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });

    // ============================================
    // Performance: Debounce Scroll Events
    // ============================================

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-heavy functions if needed
    const optimizedScrollHandler = debounce(() => {
        // Additional scroll-based animations can go here
    }, 10);

    // ============================================
    // Console Message
    // ============================================

    console.log('%cArmy of One Studio', 'font-size: 20px; font-weight: bold; color: #FF6B9D;');
    console.log('%cOne creator. An army of ideas.', 'font-size: 14px; color: #4ECDC4;');
    console.log('%cMade with care ❤️', 'font-size: 12px; color: #6C757D;');

})();
