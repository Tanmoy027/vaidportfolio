 // Filter functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const posterItems = document.querySelectorAll('.poster-item');
            const searchInput = document.querySelector('.search-box input');
            
            // Filter posters by category
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    const filter = button.getAttribute('data-filter');
                    
                    posterItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Search functionality
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                
                posterItems.forEach(item => {
                    const itemText = item.textContent.toLowerCase();
                    if (itemText.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
            
            // Add to cart animation
            const cartButtons = document.querySelectorAll('.cart-btn');
            cartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    this.style.background = '#4CAF50';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.background = '#333';
                    }, 1500);
                });
            });
        });