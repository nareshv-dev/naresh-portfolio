// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// Skills Animation
// Skills Animation
const skills = [
    { name: 'Python', level: 95, category: 'language' },
    { name: 'Java', level: 80, category: 'language' },
    { name: 'TensorFlow', level: 90, category: 'framework' },
    { name: 'Keras', level: 88, category: 'framework' },
    { name: 'PyTorch', level: 85, category: 'framework' },
    { name: 'Scikit-Learn', level: 90, category: 'framework' },
    { name: 'Pandas', level: 92, category: 'framework' },
    { name: 'NumPy', level: 90, category: 'framework' },
    { name: 'OpenCV', level: 88, category: 'framework' },
    { name: 'MediaPipe', level: 85, category: 'framework' },
    { name: 'Machine Learning', level: 92, category: 'skill' },
    { name: 'Deep Learning', level: 88, category: 'skill' },
    { name: 'Computer Vision', level: 90, category: 'skill' },
    { name: 'Data Science', level: 87, category: 'skill' }
];
];

const skillsGrid = document.querySelector('.skills-grid');

skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <h3>${skill.name}</h3>
        <div class="progress">
            <div class="progress-bar" style="width: ${skill.level}%; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
        </div>
        <p>${skill.level}%</p>
    `;
    skillsGrid.appendChild(skillItem);
});

// Projects
const projects = [
    {
        title: 'PII Detection and Encryption',
        description: 'Developed an AI-driven system for adaptive PII detection and encryption across text and image data, ensuring privacy compliance and scalability.',
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=PII+Detection',
        technologies: ['TensorFlow', 'OpenCV', 'Python', 'Cryptography'],
        link: '#',
        date: 'Sep 2024 - Oct 2024'
    },
    {
        title: 'Real-Time Fall Detection System',
        description: 'Developed a real-time fall detection system for elderly care, achieving 96% accuracy using monocular cameras and ML-based motion analysis.',
        image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Fall+Detection',
        technologies: ['MediaPipe', 'TensorFlow', 'Streamlit', 'Computer Vision'],
        link: '#',
        date: 'Oct 2024 - Nov 2024'
    },
    {
        title: 'Drone-Assisted Victim Identification',
        description: 'Developed a drone-based disaster relief system using AI for real-time victim identification and efficient rescue operations.',
        image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Drone+AI',
        technologies: ['TensorFlow', 'OpenCV', 'Image Processing'],
        link: '#',
        date: 'Dec 2024 - Feb 2025'
    },
    {
        title: 'Insect Contamination Detection',
        description: 'Research project at NIT Trichy focused on detecting insect contamination using advanced machine learning and computer vision techniques.',
        image: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Research+Project',
        technologies: ['Deep Learning', 'Computer Vision', 'Research'],
        link: '#',
        date: 'Jun 2025 - Aug 2025'
    }
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <div class="project-date">${project.date}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary">View Details</a>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

}); // End of DOMContentLoaded
