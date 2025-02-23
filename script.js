document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const researchIcon = document.getElementById('research-icon');
    const youtubeIcon = document.getElementById('youtube-icon');
    const blogIcon = document.getElementById('blog-icon');
    
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        setIcons(false);
    } else {
        setIcons(true);
    }

    themeToggle.addEventListener('click', toggleTheme);
    
    // Click animations
    document.querySelectorAll('.brand, .nav-links a, .youtube-logo, .research-icon, .blog-icon').forEach(item => {
        item.addEventListener('click', function(e) {
            this.classList.add('click-animation');
            setTimeout(() => {
                this.classList.remove('click-animation');
            }, 400);
        });
    });
});

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setIcons(!isDark);
}
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