// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    // Load and render projects
    loadProjects();
    
    // Load and render skills
    loadSkills();
    
    // Add scroll effect to navigation
    handleNavScroll();
});

// Fetch and display projects
async function loadProjects() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const projectsContainer = document.getElementById('projects-container');
        
        if (!projectsContainer) return;
        
        projectsContainer.innerHTML = data.projects.map(project => `
            <div class="project-card bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <i data-lucide="${project.icon}" class="w-6 h-6 text-primary"></i>
                        </div>
                        <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${project.category}</span>
                    </div>
                    
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${project.title}</h3>
                    <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${tech}</span>
                        `).join('')}
                    </div>
                    
                    <div class="flex gap-3 pt-4 border-t border-gray-100">
                        ${project.github ? `
                            <a href="${project.github}" target="_blank" rel="noopener" class="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition duration-300">
                                <i data-lucide="github" class="w-4 h-4"></i>
                                Code
                            </a>
                        ` : ''}
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" rel="noopener" class="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition duration-300">
                                <i data-lucide="external-link" class="w-4 h-4"></i>
                                Demo
                            </a>
                        ` : ''}
                        ${!project.github && !project.demo ? `
                            <span class="flex items-center gap-2 text-sm text-gray-400">
                                <i data-lucide="lock" class="w-4 h-4"></i>
                                Private Project
                            </span>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Re-initialize Lucide icons for the new content
        lucide.createIcons();
        
    } catch (error) {
        console.error('Error loading projects:', error);
        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer) {
            projectsContainer.innerHTML = '<p class="text-center text-gray-600 col-span-full">Failed to load projects. Please try again later.</p>';
        }
    }
}

// Fetch and display skills
async function loadSkills() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const skillsContainer = document.getElementById('skills-container');
        
        if (!skillsContainer) return;
        
        skillsContainer.innerHTML = data.skills.map(skillGroup => `
            <div class="mb-8">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <i data-lucide="${skillGroup.icon}" class="w-5 h-5 text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900">${skillGroup.category}</h3>
                </div>
                
                <div class="flex flex-wrap gap-3">
                    ${skillGroup.items.map(skill => `
                        <span class="skill-badge px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium">
                            ${skill}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
        
        // Re-initialize Lucide icons for the new content
        lucide.createIcons();
        
    } catch (error) {
        console.error('Error loading skills:', error);
        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skillsContainer.innerHTML = '<p class="text-center text-gray-600">Failed to load skills. Please try again later.</p>';
        }
    }
}

// Handle navigation scroll effect
function handleNavScroll() {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
        
        lastScrollY = window.scrollY;
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section > div');
    sections.forEach(section => {
        observer.observe(section);
    });
});
