const TEST_MODE = false;

let inFinalCountdown = false;
let lastSecond = -1;
let newYearCelebrated = false;

let targetDate;
if (TEST_MODE) {
    targetDate = new Date(new Date().getTime() + 80 * 1000);
} else {
    const nextYear = new Date().getFullYear() + 1;
    targetDate = new Date(`January 1, ${nextYear} 00:00:00`);
}

function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;
    const totalSeconds = Math.floor(timeLeft / 1000);
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    if (totalSeconds <= 60 && totalSeconds > 0) {
        if (!inFinalCountdown) {
            activateFinalCountdown();
        }
        
        if (totalSeconds !== lastSecond) {
            updateFinalNumber(totalSeconds);
            lastSecond = totalSeconds;
        }
    } else if (totalSeconds <= 0 && !newYearCelebrated) {
        celebrateNewYear();
        newYearCelebrated = true;
    } else if (totalSeconds > 60) {
        if (inFinalCountdown) {
            deactivateFinalCountdown();
        }
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    requestAnimationFrame(updateCountdown);
}

function activateFinalCountdown() {
    inFinalCountdown = true;
    document.getElementById('mainContainer').classList.add('hidden');
    document.getElementById('finalCountdown').classList.add('active');
    document.body.style.background = 'linear-gradient(135deg, #0f0f1a 0%, #050505 50%, #0f0f1a 100%)';
}

function deactivateFinalCountdown() {
    inFinalCountdown = false;
    document.getElementById('mainContainer').classList.remove('hidden');
    document.getElementById('finalCountdown').classList.remove('active');
    document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)';
}

function updateFinalNumber(number) {
    const finalNumber = document.getElementById('finalNumber');
    finalNumber.textContent = number;
    
    finalNumber.classList.remove('pulse');
    void finalNumber.offsetWidth;
    finalNumber.classList.add('pulse');
    
    if (number <= 10) {
        createMultipleFireworks(3);
    }
}

function celebrateNewYear() {
    const finalNumber = document.getElementById('finalNumber');
    finalNumber.textContent = '✨ FELIZ 2026! ✨';
    finalNumber.style.fontSize = '8rem';
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createMultipleFireworks(5), i * 100);
    }
    
    setTimeout(() => {
        const nextYear = new Date().getFullYear() + 1;
        targetDate = new Date(`January 1, ${nextYear} 00:00:00`);
        deactivateFinalCountdown();
        newYearCelebrated = false;
        finalNumber.style.fontSize = '';
    }, 8000);
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

function createStars() {
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(star);
    }
}

function createFirework() {
    const fireworkContainer = document.createElement('div');
    fireworkContainer.style.position = 'absolute';
    fireworkContainer.style.left = Math.random() * 100 + '%';
    fireworkContainer.style.top = Math.random() * 100 + '%';
    fireworkContainer.style.zIndex = '5';
    
    for (let i = 0; i < 12; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        const angle = (i / 12) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        firework.style.setProperty('--x', Math.cos(angle) * distance + 'px');
        firework.style.setProperty('--y', Math.sin(angle) * distance + 'px');
        firework.style.animationDelay = Math.random() * 0.3 + 's';
        fireworkContainer.appendChild(firework);
    }
    
    document.body.appendChild(fireworkContainer);
    setTimeout(() => fireworkContainer.remove(), 2000);
}

function createMultipleFireworks(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => createFirework(), i * 200);
    }
}

updateCountdown();
createParticles();
createStars();
setInterval(createFirework, 3000);
