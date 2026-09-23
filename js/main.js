/* ==================== 1. TYPING EFFECT ==================== */
const typingText = document.getElementById('typing-text');
const names = ['Ferdi'];
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentName = names[nameIndex];

    if (isDeleting) {
        typingText.textContent = currentName.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentName.substring(0, charIndex + 1);
        charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentName.length) {
        delay = 2000; // Jeda setelah teks selesai diketik
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        nameIndex = (nameIndex + 1) % names.length;
        delay = 500; // Jeda sebelum mengetik kata baru
    }

    setTimeout(typeEffect, delay);
}

typeEffect(); // Mulai efek

/* ==================== 2. GENERATE PROJECT CARDS ==================== */
const projects = [
    {
        title: 'Website Profil',
        desc: 'Website profil dengan HTML',
        image: '../images/web.webp'
    },
    {
        title: 'Kalkulator JS',
        desc: 'Kalkulator interaktif menggunakan JavaScript.',
        image: '../images/kalkulator.webp'
    },
    {
        title: 'Sistem Kasir',
        desc: 'Sistem Kasir sederhana.',
        image: '../images/sistemkasir.webp'
    }
];

const projectGrid = document.getElementById('project-grid');

if (projectGrid) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;

        card.addEventListener('click', () => {
            alert(`Anda memilih proyek: ${project.title}`);
        });

        projectGrid.appendChild(card);
    });
}

/* ==================== 3. FORM CONTACT ==================== */
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = 'Semua kolom harus diisi.';
            return;
        }

        formMessage.textContent = `Terima kasih, ${name}. Pesan Anda berhasil dikirim.`;
        contactForm.reset();
    });
}
// =========================
// DARK MODE
// =========================

const darkModeToggle = document.getElementById("darkModeToggle");

// Cek mode yang tersimpan
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");

    if (darkModeToggle) {
        darkModeToggle.textContent = "☀️";
    }
}

// Tombol Dark Mode
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙";
        }

    });
}