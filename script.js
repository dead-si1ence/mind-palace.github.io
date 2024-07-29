document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const imageCarousel = document.getElementById('image-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const characterList = document.getElementById('character-list');
    const quoteContainer = document.getElementById('quote-container');
    const newQuoteBtn = document.getElementById('new-quote');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-btn');
    const backgroundAudio = document.getElementById('background-audio');
    const muteBtn = document.getElementById('mute-btn');

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

    function loadImages() {
        imageCarousel.innerHTML = '';
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Hannibal Image ${index + 1}`;
            img.addEventListener('click', () => openLightbox(index));
            imageCarousel.appendChild(img);
        });
        updateCarousel();
    }

    function updateCarousel() {
        imageCarousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    function openLightbox(index) {
        lightboxImg.src = images[index];
        lightboxCaption.textContent = `Image ${index + 1} of ${images.length}`;
        lightbox.style.display = 'block';
    }

    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Character list
    const characters = [
        { name: 'Hannibal Lecter', actor: 'Mads Mikkelsen' },
        { name: 'Will Graham', actor: 'Hugh Dancy' },
        { name: 'Jack Crawford', actor: 'Laurence Fishburne' },
        // Add more characters here
    ];

    characters.forEach(char => {
        const li = document.createElement('li');
        li.textContent = `${char.name} (${char.actor})`;
        characterList.appendChild(li);
    });

    // Quote List
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
        // Add more quotes here
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
                inline: 'nearest'
            });
        });
    });

    // Background audio
    backgroundAudio.volume = 0.25; // Set volume to 50%
    backgroundAudio.play().catch(error => {
        console.log("Auto-play was prevented. Please interact with the page to start the audio.");
    });

    muteBtn.addEventListener('click', () => {
        if (backgroundAudio.paused) {
            backgroundAudio.play();
            muteBtn.textContent = '🔊';
        } else {
            backgroundAudio.pause();
            muteBtn.textContent = '🔇';
        }
    });

    // Initialize image carousel
    loadImages();
});