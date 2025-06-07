document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality for archive
    const filterButtons = document.querySelectorAll('.archive-filters .filter-btn');
    const archiveCards = document.querySelectorAll('.archive-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            archiveCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form validation
    const devotionalForm = document.getElementById('devotional-form');
    
    function validateDevotionalForm(form) {
        const title = form.querySelector('#title').value.trim();
        const bibleVerse = form.querySelector('#bible-verse').value.trim();
        const reflection = form.querySelector('#reflection').value.trim();
        const category = form.querySelector('#category').value;

        if (!title || !bibleVerse || !reflection || !category) {
            alert('Please fill in all required fields');
            return false;
        }

        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for sharing your devotional! It will be reviewed and posted soon.');
        form.reset();
        return false; // Prevent form submission for now
    }

    // Add character counter for textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.textContent = '0 characters';
        textarea.parentNode.appendChild(counter);

        textarea.addEventListener('input', () => {
            const length = textarea.value.length;
            counter.textContent = `${length} characters`;
            
            // Add visual feedback for length
            if (length > 1000) {
                counter.style.color = '#e74c3c';
            } else {
                counter.style.color = '#666';
            }
        });
    });

    // Add smooth scrolling for "Read More" links
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Here you would typically load the full devotional content
            // For now, we'll just show an alert
            alert('This feature will be available soon!');
        });
    });

    // Add share functionality
    const shareButtons = document.createElement('div');
    shareButtons.className = 'share-buttons';
    shareButtons.innerHTML = `
        <button class="share-btn" data-platform="facebook">
            <i class="fab fa-facebook"></i> Share
        </button>
        <button class="share-btn" data-platform="twitter">
            <i class="fab fa-twitter"></i> Tweet
        </button>
        <button class="share-btn" data-platform="email">
            <i class="fas fa-envelope"></i> Email
        </button>
    `;

    const devotionalCard = document.querySelector('.devotional-card');
    devotionalCard.appendChild(shareButtons);

    // Handle share button clicks
    document.querySelectorAll('.share-btn').forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.getAttribute('data-platform');
            const title = document.querySelector('.devotional-header h3').textContent;
            const url = window.location.href;

            switch (platform) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
                    break;
                case 'email':
                    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
                    break;
            }
        });
    });

    // Add print functionality
    const printButton = document.createElement('button');
    printButton.className = 'print-btn';
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Devotional';
    devotionalCard.appendChild(printButton);

    printButton.addEventListener('click', () => {
        window.print();
    });
}); 