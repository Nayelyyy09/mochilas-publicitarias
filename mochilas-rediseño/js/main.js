/**
 * Mochilas Publicitarias - Main JavaScript
 * Diseño profesional inspirado en Vélez y Crepier
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initMobileMenu();
    initProductFilters();
    initScrollAnimations();
    initHeaderScroll();
    initSmoothScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.btn-menu');
    const navMain = document.querySelector('.nav-main');
    
    if (!menuBtn || !navMain) return;
    
    menuBtn.addEventListener('click', function() {
        navMain.classList.toggle('active');
        this.classList.toggle('active');
        
        // Toggle aria-expanded
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navMain.contains(e.target)) {
            navMain.classList.remove('active');
            menuBtn.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Product Filters
 */
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterBtns.length === 0 || productCards.length === 0) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.textContent.toLowerCase().trim();
            
            // Filter products with animation
            productCards.forEach(card => {
                const category = card.querySelector('.product-category')?.textContent.toLowerCase() || '';
                
                if (filter === 'todos' || category.includes(filter)) {
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/**
 * Scroll Animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.category-card, .product-card, .feature-card, .testimonial-card'
    );
    
    if (animatedElements.length === 0) return;
    
    // Add initial state
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const headerMain = document.querySelector('.header-main');
    
    if (!header || !headerMain) return;
    
    let lastScroll = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
            headerMain.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.classList.remove('scrolled');
            headerMain.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Lazy Loading Images (for browsers without native support)
 */
function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) return;
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * WhatsApp Click Tracking (optional analytics)
 */
function initWhatsAppTracking() {
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add your analytics tracking here
            console.log('WhatsApp click:', this.href);
        });
    });
}

/**
 * Product Quick View Modal (placeholder)
 */
function initQuickView() {
    const quickViewBtns = document.querySelectorAll('.product-quick-view');
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-title')?.textContent;
            
            // Placeholder for modal functionality
            console.log('Quick view:', productName);
        });
    });
}

/**
 * Search Toggle
 */
function initSearch() {
    const searchBtn = document.querySelector('.btn-search');
    
    if (!searchBtn) return;
    
    searchBtn.addEventListener('click', function() {
        // Placeholder for search functionality
        console.log('Search toggled');
    });
}

/**
 * Performance: Debounce utility
 */
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * Performance: Throttle utility
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export utilities for potential use in other scripts
window.MochilasUtils = {
    debounce,
    throttle
};
