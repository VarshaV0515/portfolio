// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize your JavaScript code here
    console.log('Website initialized');

    // "View More" button goes to Work page
    var viewMoreBtn = document.getElementById('view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            window.location.href = 'work.html';
        });
    }

    // "Read More" button goes to Writings page
    var readMoreBtn = document.getElementById('read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            window.location.href = 'writings.html';
        });
    }

    // Pills filter logic
    const pills = document.querySelectorAll('#project-pills .pill');
    const cards = document.querySelectorAll('#project-grid .project-card');

    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Remove active from all, add to clicked
            pills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');

            const tag = this.getAttribute('data-tag');
            if (tag === 'All') {
                cards.forEach(card => card.style.display = '');
            } else {
                cards.forEach(card => {
                    const tags = card.getAttribute('data-tags').split(',');
                    if (tags.map(t => t.trim()).includes(tag)) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });

    // Make project cards clickable
    document.querySelectorAll('.project-card[data-link], .project-card[data-pdf]').forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent click if user is selecting text
            if (window.getSelection().toString()) return;
            
            const url = card.getAttribute('data-link');
            const pdfUrl = card.getAttribute('data-pdf');
            
            // ORIGINAL LOGIC (commented out for now)
            // if (pdfUrl) {
            //     // Show choice dialog if both Gamma and PDF are available
            //     const choice = confirm('Choose your preferred format:\\n\\nClick "OK" for PDF version\\nClick "Cancel" for Gamma presentation');
            //     if (choice) {
            //         // User chose PDF
            //         window.open(pdfUrl, '_blank', 'noopener');
            //     } else {
            //         // User chose Gamma presentation
            //         if (url) {
            //             window.open(url, '_blank', 'noopener');
            //         }
            //     }
            // } else {
            //     // Only Gamma presentation available
            //     if (url) {
            //         window.open(url, '_blank', 'noopener');
            //     }
            // }

            // CURRENT LOGIC (only show dialog when both options are available)
            if (pdfUrl && url) {
                // Show choice dialog if both Gamma and PDF are available
                const choice = confirm('Choose your preferred format:\n\nClick "OK" for PDF version\nClick "Cancel" for Gamma presentation');
                if (choice) {
                    // User chose PDF
                    window.open(pdfUrl, '_blank', 'noopener');
                } else {
                    // User chose Gamma presentation
                    window.open(url, '_blank', 'noopener');
                }
            } else if (pdfUrl) {
                // Only PDF available
                window.open(pdfUrl, '_blank', 'noopener');
            } else if (url) {
                // Only Gamma presentation available
                window.open(url, '_blank', 'noopener');
            }
        });
        // Optional: Keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const url = card.getAttribute('data-link');
                const pdfUrl = card.getAttribute('data-pdf');
                
                // ORIGINAL LOGIC (commented out for now)
                // if (pdfUrl) {
                //     // Show choice dialog if both Gamma and PDF are available
                //     const choice = confirm('Choose your preferred format:\\n\\nClick "OK" for PDF version\\nClick "Cancel" for Gamma presentation');
                //     if (choice) {
                //         // User chose PDF
                //         window.open(pdfUrl, '_blank', 'noopener');
                //     } else {
                //         // User chose Gamma presentation
                //         if (url) {
                //             window.open(url, '_blank', 'noopener');
                //     }
                //     }
                // } else {
                //     // Only Gamma presentation available
                //     if (url) {
                //         window.open(url, '_blank', 'noopener');
                //     }
                // }

                // CURRENT LOGIC (only show dialog when both options are available)
                if (pdfUrl && url) {
                    // Show choice dialog if both Gamma and PDF are available
                    const choice = confirm('Choose your preferred format:\n\nClick "OK" for PDF version\nClick "Cancel" for Gamma presentation');
                    if (choice) {
                        // User chose PDF
                        window.open(pdfUrl, '_blank', 'noopener');
                    } else {
                        // User chose Gamma presentation
                        window.open(url, '_blank', 'noopener');
                    }
                } else if (pdfUrl) {
                    // Only PDF available
                    window.open(pdfUrl, '_blank', 'noopener');
                } else if (url) {
                    // Only Gamma presentation available
                    window.open(url, '_blank', 'noopener');
                }
            }
        });
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    const closeMenu = document.getElementById('close-menu');

    if (hamburger && overlay && closeMenu) {
        hamburger.addEventListener('click', () => {
            overlay.classList.add('open');
        });
        closeMenu.addEventListener('click', () => {
            overlay.classList.remove('open');
        });
        // Optional: close menu when clicking a link
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.classList.remove('open');
            });
        });
    }
}); 