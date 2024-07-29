document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const imageGallery = document.getElementById('image-gallery');
    const loadMoreBtn = document.getElementById('load-more');
    const characterList = document.getElementById('character-list');
    const quoteContainer = document.getElementById('quote-container');
    const newQuoteBtn = document.getElementById('new-quote');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    // Image gallery
    const images = [
        'assets/image_0.png', 'assets/image_1.png', 'assets/image_2.png',
        'assets/image_3.png', 'assets/image_4.png', 'assets/image_5.png',
        'assets/image_6.png', 'assets/image_7.png', 'assets/image_8.png',
        'assets/image_9.png', 'assets/image_10.png', 'assets/image_11.png',
        'assets/image_12.png', 'assets/image_13.png', 'assets/image_14.png',
        'assets/image_15.png', 'assets/image_16.png', 'assets/image_17.png',
    ];
    let currentIndex = 0;

    function loadMoreImages() {
        for (let i = 0; i < 5 && currentIndex < images.length; i++) {
            const img = document.createElement('img');
            img.src = images[currentIndex];
            img.alt = `Hannibal Image ${currentIndex + 1}`;
            imageGallery.appendChild(img);
            currentIndex++;
        }
        if (currentIndex >= images.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    loadMoreBtn.addEventListener('click', loadMoreImages);
    loadMoreImages(); // Initial load

    // Character list
    const characters = [
        { name: 'Hannibal Lecter', actor: 'Mads Mikkelsen' },
        { name: 'Will Graham', actor: 'Hugh Dancy' },
        { name: 'Jack Crawford', actor: 'Laurence Fishburne' },
        // Add more characters as needed
    ];

    characters.forEach(char => {
        const li = document.createElement('li');
        li.textContent = `${char.name} (${char.actor})`;
        characterList.appendChild(li);
    });

    // Quotes
    const quotes = [
        "I have no plans to call on you, Will. Your wife and child will be safe.",
        "Morality doesn't exist. Only morale.",
        "Killing must feel good to God too. He does it all the time.",
        "One should always try to eat the rude.",
        "I gave you a rare gift, but you didn't want it.",
        "When life becomes maddeningly polite, think about me.",
        "Betrayal and forgiveness are best seen as something akin to falling in love.",
        "It's beautiful.",
        "No greater love hath man than to lay down his life for a friend.",
        "If I saw you every day, forever, Will, I would remember this time.",
        "I'm not fortune's fool, I'm yours.",
        "Achilles wished all Greeks would die, so that he and Patroclus could conquer Troy alone.",
        // Add more quotes
    ];

    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteContainer.textContent = `"${quotes[randomIndex]}"`;
    }

    newQuoteBtn.addEventListener('click', displayRandomQuote);
    displayRandomQuote(); // Initial quote

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                speed: 'slow' // Add this line to make the scrolling slower
            });
        });
    });
});