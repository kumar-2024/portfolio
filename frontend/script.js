// script.js

// Backend API base URL - deploy ke time isko apne server ke URL se replace karo
const API_BASE_URL = "http://localhost:5000";

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Contact form -> backend API ko POST request
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {
      statusEl.textContent = 'Message Sent Successfully!';
      statusEl.style.color = 'green';
      form.reset();
    } else {
      statusEl.textContent = result.error || 'Something went wrong!';
      statusEl.style.color = 'red';
    }
  } catch (err) {
    statusEl.textContent = 'Server se connect nahi ho paaya. Baad me try karein.';
    statusEl.style.color = 'red';
  }
});

// Simple hover animation for profile image
const image = document.querySelector('.image');
image.addEventListener('mouseenter', () => {
  image.style.transform = 'rotateY(-50deg) rotateX(15deg)';
});
image.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateY(-30deg) rotateX(10deg)';
});
