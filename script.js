document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const researchIcon = document.getElementById('research-icon');
    const youtubeIcon = document.getElementById('youtube-icon');
    const blogIcon = document.getElementById('blog-icon');
    const mainHeading = document.querySelector(".hero h1"); // Get heading element
    const mainHeading1 = document.querySelector(".hero p"); // Get heading element

    const searchInput = document.getElementById("search");
    const sendIcon = document.getElementById("send-icon");

    // Gradient backgrounds for themes
    const lightGradient = "linear-gradient(to right, #E0F7FA, #F1F8FF, #F7F7F7)";
    const darkGradient = "linear-gradient(to right, #0F2027, #203A43, #2C5364)";

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark';
    body.classList.toggle('dark-mode', isDarkMode);
    setIcons(!isDarkMode);
    updateShadow(!isDarkMode);
    updateSendIcon();
    updateBackground();

    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setIcons(!isDark);
        updateShadow(!isDark);
        updateSendIcon();
        updateBackground();
    });

    // Click animations
    document.querySelectorAll('.brand .nav-links a, .youtube-logo, .research-icon, .blog-icon').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.add('click-animation');
            setTimeout(() => {
                this.classList.remove('click-animation');
            }, 400);
        });
    });

    // Redirect when pressing Enter
    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && searchInput.value.trim() !== "") {
            event.preventDefault();
            window.location.href = `chat.html?query=${encodeURIComponent(searchInput.value)}`;
        }
    });

    // Redirect when clicking Send Icon
    sendIcon.addEventListener("click", function () {
        if (searchInput.value.trim() !== "") {
            window.location.href = `chat.html?query=${encodeURIComponent(searchInput.value)}`;
        }
    });

});

// Function to set icons based on theme
function setIcons(isLight) {
    const themeToggle = document.getElementById('theme-toggle');
    const researchIcon = document.getElementById('research-icon');
    const youtubeIcon = document.getElementById('youtube-icon');
    const blogIcon = document.getElementById('blog-icon');

    const suffix = isLight ? "_lt.png" : "_dk.png";
    const basePath = "icon/";

    themeToggle.src = `${basePath}${isLight ? "light" : "dark"}.png`;
    researchIcon.src = `${basePath}rch${suffix}`;
    youtubeIcon.src = `${basePath}yt${suffix}`;
    blogIcon.src = `${basePath}blog${suffix}`;
}

// Function to update shadow effect for the main heading
function updateShadow(isLight) {
    const mainHeading = document.querySelector(".hero h1");
    const mainHeading1 = document.querySelector(".hero p");

    if (isLight) {
        mainHeading.style.textShadow = "4px 4px 10px rgba(50, 50, 50, 0.6)";
        mainHeading1.style.textShadow = "4px 4px 10px rgba(50, 50, 50, 0.6)";

    } else {
        mainHeading.style.textShadow = "4px 4px 15px rgba(255, 255, 255, 0.6)";
        mainHeading1.style.textShadow = "4px 4px 15px rgba(255, 255, 255, 0.6)";

    }
}

// Function to update the send icon based on theme
function updateSendIcon() {
    const sendIcon = document.getElementById("send-icon");
    const isDarkMode = document.body.classList.contains("dark-mode");
    sendIcon.src = isDarkMode ? "icon/send_dk.png" : "icon/send_lt.png";
}

// Function to update the background based on theme
function updateBackground() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    document.body.style.background = isDarkMode 
        ? "linear-gradient(to right,rgb(66, 66, 66),rgb(49, 69, 75),rgb(36, 66, 79))" 
        : "linear-gradient(to right,rgb(145, 223, 234), #F1F8FF)";
}


// Parallax effect
document.addEventListener('mousemove', (e) => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = 0.02;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.tech-card').forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});