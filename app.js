/* ==========================================================================
   G T Prashanth Portfolio JS - Dynamic Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial State & Configuration Loading
    initProfileData();
    initTheme();
    initParticles();
    initTyping();
    initCustomCursor();
    initScrollEffects();
    initVisitorCounter();
    
    // 2. Async GitHub API Load
    fetchGitHubData();
    
    // 3. Setup Contact Form & EmailJS
    initContactForm();
});

// Cache variables for filtering
let loadedProjectsList = [];

/* ==========================================================================
   Profile Binding (config.js -> DOM)
   ========================================================================== */
function initProfileData() {
    const prof = CONFIG.profile;
    
    // Bind basic profile details
    document.getElementById('hero-name').innerText = prof.name;
    document.getElementById('about-bio').innerText = prof.aboutMe;
    document.getElementById('about-location').innerText = prof.location;
    
    // Bind contact cards and links
    document.getElementById('about-email').innerText = prof.email;
    document.getElementById('about-email').href = `mailto:${prof.email}`;
    document.getElementById('contact-email').innerText = prof.email;
    document.getElementById('contact-email').href = `mailto:${prof.email}`;
    document.getElementById('contact-phone').innerText = prof.phone;
    document.getElementById('contact-phone').href = `tel:${prof.phone.replace(/\s/g, '')}`;
    document.getElementById('contact-location').innerText = prof.location;
    
    // Bind Resume URL
    document.getElementById('btn-resume-download').href = prof.resumeUrl;
    
    // Bind Social Media lists
    const footerSocials = document.getElementById('footer-socials');
    footerSocials.innerHTML = '';
    CONFIG.socials.forEach(social => {
        const a = document.createElement('a');
        a.href = social.url;
        a.target = '_blank';
        a.className = 'btn-theme-toggle text-decoration-none';
        a.innerHTML = `<i class="${social.icon}"></i>`;
        a.title = social.name;
        footerSocials.appendChild(a);
    });

    // Bind Coding Profiles
    const codingContainer = document.getElementById('coding-profiles-container');
    codingContainer.innerHTML = '';
    CONFIG.codingProfiles.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col-sm-6';
        col.innerHTML = `
            <a href="${p.url}" target="_blank" class="coding-profile-card d-block glass-card p-3">
                <div class="profile-card-content">
                    <div class="detail-icon-box" style="background-color: ${p.color}15;">
                        <i class="${p.icon} fs-4" style="color: ${p.color};"></i>
                    </div>
                    <div>
                        <span class="text-white font-outfit d-block font-weight-600 mb-0">${p.platform}</span>
                        <span class="text-muted small">@${p.username}</span>
                    </div>
                </div>
            </a>
        `;
        codingContainer.appendChild(col);
    });

    // Bind Education Timeline
    const eduContainer = document.getElementById('education-container');
    eduContainer.innerHTML = '';
    CONFIG.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'edu-card';
        item.innerHTML = `
            <div class="edu-dot"></div>
            <h5 class="text-white font-outfit mb-1">${edu.degree}</h5>
            <span class="text-gradient small font-outfit d-block mb-2">${edu.institution} | ${edu.period}</span>
            <p class="text-muted small mb-0">${edu.details}</p>
        `;
        eduContainer.appendChild(item);
    });

    // Bind Skills Grid
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    CONFIG.skills.forEach((category, catIndex) => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        let skillsHtml = '';
        category.items.forEach(skill => {
            skillsHtml += `
                <div class="skill-progress-row">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="skill-label text-white"><i class="${skill.icon} me-2 text-glow"></i>${skill.name}</span>
                        <span class="text-muted small">${skill.percentage}%</span>
                    </div>
                    <div class="progress-bar-custom">
                        <div class="progress-bar-fill" data-percent="${skill.percentage}"></div>
                    </div>
                </div>
            `;
        });

        col.innerHTML = `
            <div class="glass-card h-100 reveal">
                <div class="skill-card-body">
                    <h4 class="font-outfit text-white mb-4 border-bottom border-secondary-translucent pb-2">${category.category}</h4>
                    ${skillsHtml}
                </div>
            </div>
        `;
        skillsContainer.appendChild(col);
    });

    // Bind Experience Timeline
    const expContainer = document.getElementById('experience-timeline');
    expContainer.innerHTML = '';
    CONFIG.experience.forEach((exp, index) => {
        const item = document.createElement('div');
        const sideClass = index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right';
        item.className = `timeline-item ${sideClass} reveal`;
        item.innerHTML = `
            <div class="timeline-icon-node">
                <i class="${exp.icon}"></i>
            </div>
            <div class="glass-card p-4">
                <span class="text-secondary-gradient font-outfit small d-block mb-1">${exp.period}</span>
                <h4 class="text-white font-outfit mb-1">${exp.title}</h4>
                <h6 class="text-muted mb-3">${exp.subtitle}</h6>
                <p class="text-muted small mb-0">${exp.description}</p>
            </div>
        `;
        expContainer.appendChild(item);
    });

    // Bind Certifications
    const certContainer = document.getElementById('certifications-container');
    certContainer.innerHTML = '';
    CONFIG.certifications.forEach(cert => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-lg-3 reveal';
        col.innerHTML = `
            <div class="glass-card cert-card p-4">
                <div>
                    <div class="cert-icon-box">
                        <i class="${cert.icon}"></i>
                    </div>
                    <h5 class="text-white font-outfit mb-2">${cert.name}</h5>
                    <span class="text-muted small d-block mb-3">${cert.issuer}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3 border-top border-secondary-translucent pt-3">
                    <span class="text-gradient font-outfit small font-weight-600">${cert.date}</span>
                    <a href="${cert.link}" class="text-muted text-glow-hover"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        `;
        certContainer.appendChild(col);
    });

    // Bind Achievements
    const achContainer = document.getElementById('achievements-container');
    achContainer.innerHTML = '';
    CONFIG.achievements.forEach(ach => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3 reveal';
        col.innerHTML = `
            <div class="glass-card achievement-card p-4">
                <div class="glow-spot"></div>
                <div class="d-flex align-items-center gap-3 mb-3">
                    <div class="detail-icon-box bg-purple-translucent"><i class="${ach.icon} text-purple fs-4"></i></div>
                    <span class="text-gradient font-outfit font-weight-700">${ach.period}</span>
                </div>
                <h5 class="text-white font-outfit mb-2">${ach.title}</h5>
                <p class="text-muted small mb-0">${ach.description}</p>
            </div>
        `;
        achContainer.appendChild(col);
    });

    // Bind Testimonials
    const testContainer = document.getElementById('testimonials-container');
    testContainer.innerHTML = '';
    CONFIG.testimonials.forEach((test, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const item = document.createElement('div');
        item.className = `carousel-item ${activeClass}`;
        item.innerHTML = `
            <div class="testimonial-box py-3">
                <p class="text-muted fs-5 italic mb-4">"${test.quote}"</p>
                <div>
                    <h5 class="text-white font-outfit mb-1">${test.author}</h5>
                    <span class="text-gradient small">${test.role}</span>
                </div>
            </div>
        `;
        testContainer.appendChild(item);
    });

    // Bind Blogs
    const blogsContainer = document.getElementById('blogs-container');
    blogsContainer.innerHTML = '';
    CONFIG.blogs.forEach(blog => {
        const a = document.createElement('a');
        a.href = blog.link;
        a.className = 'blog-simple-card glass-card p-3 d-flex justify-content-between align-items-center text-decoration-none';
        a.innerHTML = `
            <div>
                <h6 class="text-white font-outfit mb-1">${blog.title}</h6>
                <span class="text-muted small">${blog.date} | ${blog.readTime}</span>
            </div>
            <i class="fa-solid fa-chevron-right text-muted small"></i>
        `;
        blogsContainer.appendChild(a);
    });

    // Bind FAQs
    const faqAccordion = document.getElementById('faqAccordion');
    faqAccordion.innerHTML = '';
    CONFIG.faqs.forEach((faq, index) => {
        const collapseId = `faq-collapse-${index}`;
        const headerId = `faq-header-${index}`;
        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <h2 class="accordion-header" id="${headerId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                    ${faq.question}
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" aria-labelledby="${headerId}" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    ${faq.answer}
                </div>
            </div>
        `;
        faqAccordion.appendChild(item);
    });

    // Fill tag cloud placeholder with skills
    const cloudContainer = document.querySelector('.skills-tag-cloud');
    if (cloudContainer) {
        cloudContainer.innerHTML = '';
        CONFIG.skills.forEach(cat => {
            cat.items.forEach(skill => {
                const tag = document.createElement('span');
                tag.className = 'skill-cloud-tag';
                tag.innerText = skill.name;
                cloudContainer.appendChild(tag);
            });
        });
    }
}

/* ==========================================================================
   Theme Management (Light / Dark Toggle)
   ========================================================================== */
function initTheme() {
    const rootHtml = document.documentElement;
    
    // Always force light mode
    rootHtml.setAttribute('data-theme', 'light');
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    
    // Set theme-invert property for standard icon / image compatibility
    document.documentElement.style.setProperty('--theme-invert', '0');
}

/* ==========================================================================
   Typing Animation (Pure Vanilla JavaScript)
   ========================================================================== */
function initTyping() {
    const typingSpan = document.getElementById('typing-text');
    const headline = CONFIG.profile.headline;
    const phrases = headline.split(' | ');
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingSpan.innerText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting faster
        } else {
            typingSpan.innerText = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Normal typing speed
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 1500; // Pause at the end of phrase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400; // Small delay before next word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    typeEffect();
}

/* ==========================================================================
   Particle Background Canvas
   ========================================================================== */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const maxParticles = Math.min(60, Math.floor((width * height) / 25000));
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Rebound borders
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
        draw() {
            const theme = document.documentElement.getAttribute('data-theme');
            ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.25)' : 'rgba(99, 102, 241, 0.2)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        // Draw connection lines
        const theme = document.documentElement.getAttribute('data-theme');
        const lineColor = theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(99,102,241,0.05)';
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < 100) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

/* ==========================================================================
   Custom Cursor Overlay
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const cursorGlow = document.getElementById('custom-cursor-glow');
    
    // Hide cursor overlay on touch devices
    if ('ontouchstart' in window) {
        if (cursor) cursor.style.display = 'none';
        if (cursorGlow) cursorGlow.style.display = 'none';
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        document.body.classList.add('mouse-active');
        
        // Position elements
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Add minimal easing to the glow circle
        cursorGlow.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 150, fill: "forwards" });
    });
    
    // Elevate scale on links
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .accordion-button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorGlow.style.borderColor = 'var(--secondary)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorGlow.style.borderColor = 'var(--primary)';
        });
    });
}

/* ==========================================================================
   Scroll Effects: Navbar, BackToTop, Scroll progress, Scroll reveal
   ========================================================================== */
function initScrollEffects() {
    const navbar = document.getElementById('main-navbar');
    const backToTopBtn = document.getElementById('btn-back-to-top');
    const scrollProgress = document.getElementById('scroll-progress');
    
    // Back to top click handler
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Scroll listener
    window.addEventListener('scroll', () => {
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScrollPercent = totalScrollHeight > 0 ? (window.scrollY / totalScrollHeight) * 100 : 0;
        
        // 1. Progress Bar width
        if (scrollProgress) {
            scrollProgress.style.width = `${currentScrollPercent}%`;
        }
        
        // 2. Sticky Navbar Styling
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        // 3. Back to Top visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        // 4. Highlight Active Navigation Node
        updateActiveNavNode();
    });

    // Intersection Observer: Scroll Reveal & Skills Progress Animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it contains skill bars, trigger progressive fills
                const fillBars = entry.target.querySelectorAll('.progress-bar-fill');
                fillBars.forEach(bar => {
                    const percent = bar.getAttribute('data-percent');
                    bar.style.width = `${percent}%`;
                });
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(r => observer.observe(r));
}

function updateActiveNavNode() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentActiveId = 'home';
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            currentActiveId = id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentActiveId}`) {
            link.classList.add('active');
        }
    });
}

/* ==========================================================================
   Visitor Counter System
   ========================================================================== */
function initVisitorCounter() {
    const counterEl = document.getElementById('count-visitors');
    if (!counterEl) return;
    
    // Read count from localStorage
    let visits = localStorage.getItem('visitor_count');
    
    if (!visits) {
        // First visit - set base count
        visits = CONFIG.profile.visitorCounterStart;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('visitor_count', visits);
    
    // Animate counter from 0
    let count = 0;
    const target = visits;
    const duration = 1200; // ms
    const stepTime = Math.max(1, Math.floor(duration / target));
    
    const countTimer = setInterval(() => {
        count += Math.ceil(target / 100);
        if (count >= target) {
            counterEl.innerText = target.toLocaleString();
            clearInterval(countTimer);
        } else {
            counterEl.innerText = count.toLocaleString();
        }
    }, 15);
}

/* ==========================================================================
   GitHub REST API dynamic loaders
   ========================================================================== */
async function fetchGitHubData() {
    const username = CONFIG.profile.githubUsername;
    const reposGrid = document.getElementById('projects-grid');
    
    try {
        // Fetch User profile details
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (!profileRes.ok) throw new Error('Failed to fetch user profile');
        const profile = await profileRes.ok ? await profileRes.json() : {};
        
        // Update user stats in dashboard
        if (profile.avatar_url) {
            document.getElementById('github-avatar').src = profile.avatar_url;
            document.getElementById('github-followers').innerText = profile.followers;
            document.getElementById('github-following').innerText = profile.following;
            document.getElementById('github-repos-count').innerText = profile.public_repos;
        }

        // Fetch Repositories
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const rawRepos = await reposRes.json();
        
        // Process languages
        let languagesCount = {};
        let totalStars = 0;
        
        // Process loaded dynamic list
        loadedProjectsList = rawRepos.map(repo => {
            totalStars += repo.stargazers_count;
            
            // Record languages count
            if (repo.language) {
                languagesCount[repo.language] = (languagesCount[repo.language] || 0) + 1;
            }
            
            // Get override details if any
            const override = CONFIG.projectOverrides[repo.name] || {};
            
            return {
                title: override.title || formatRepoName(repo.name),
                description: override.description || repo.description || "No description provided yet. Explore source file configurations.",
                technologies: override.technologies || (repo.language ? [repo.language] : ["Open Source"]),
                image: override.image || `https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80`, // Generic code image
                repoUrl: repo.html_url,
                demoUrl: override.demoUrl || repo.homepage || "#",
                stars: repo.stargazers_count,
                updatedAt: repo.pushed_at ? repo.pushed_at.split('T')[0] : 'Recently',
                language: repo.language || 'Others',
                featured: override.featured || false
            };
        });

        // Set total stars count
        document.getElementById('github-stars').innerText = totalStars;
        document.getElementById('count-repos').innerText = loadedProjectsList.length;

        // Render dynamic languages breakdown
        renderLanguagesBreakdown(languagesCount);

        // Inject Custom Projects (Arduino, ML collection etc.) that are configured locally
        CONFIG.customProjects.forEach(cp => {
            loadedProjectsList.push(cp);
        });

        // Sort projects: Featured first, then stars, then alphabetically
        loadedProjectsList.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return b.stars - a.stars;
        });

        // Render projects grid
        renderProjects(loadedProjectsList);

        // Bind filter/search controllers
        initFilters();

        // Fetch Commit Feed
        fetchCommitFeed(username);

    } catch (err) {
        console.error('GitHub API error:', err);
        // Fallback to static custom project load if offline or rate-limited
        loadedProjectsList = CONFIG.customProjects;
        
        // Push overrides as mock projects if API fails
        Object.keys(CONFIG.projectOverrides).forEach(key => {
            const item = CONFIG.projectOverrides[key];
            loadedProjectsList.push({
                title: item.title,
                description: item.description,
                technologies: item.technologies,
                image: item.image,
                repoUrl: `https://github.com/gt1432/${key}`,
                demoUrl: item.demoUrl,
                stars: 2,
                updatedAt: '2026-07-03',
                language: item.technologies[0] || 'JavaScript',
                featured: item.featured
            });
        });
        
        renderProjects(loadedProjectsList);
        initFilters();
        
        // Mock commits
        const mockCommits = [
            { message: "Update configuration dashboard index.html and stylesheets", date: "2 hours ago", repo: "geominer-ai" },
            { message: "Deploy precision analytics models for AgriGeo", date: "1 day ago", repo: "GeoSmart-Agri" },
            { message: "Refactor core compiler compiler class structures", date: "3 days ago", repo: "code-compiler" }
        ];
        renderCommitFeed(mockCommits);
    }
    
    // Hide Loader
    const loader = document.getElementById('loader-screen');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
        }, 500);
    }
}

function formatRepoName(name) {
    // Replace hyphens/underscores with spaces and capitalize
    return name.replace(/[-_]/g, ' ')
               .replace(/\b\w/g, c => c.toUpperCase());
}

function renderLanguagesBreakdown(languagesObj) {
    const bar = document.getElementById('github-languages-bar');
    const legend = document.getElementById('github-languages-legend');
    if (!bar || !legend) return;
    
    bar.innerHTML = '';
    legend.innerHTML = '';
    
    // Convert to array
    const entries = Object.entries(languagesObj);
    const totalCount = entries.reduce((acc, curr) => acc + curr[1], 0);
    
    // Colors map
    const colors = {
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'JavaScript': '#f1e05a',
        'Java': '#b07219',
        'Python': '#3572A5',
        'C++': '#f34b7d',
        'C': '#555555'
    };
    
    const fallbackColors = ['#4f46e5', '#c084fc', '#3b82f6', '#10b981', '#f59e0b'];
    let index = 0;
    
    entries.forEach(([lang, val]) => {
        const percent = ((val / totalCount) * 100).toFixed(1);
        const color = colors[lang] || fallbackColors[index % fallbackColors.length];
        
        // Append Progress Bar Block
        const block = document.createElement('div');
        block.className = 'progress-bar';
        block.style.width = `${percent}%`;
        block.style.backgroundColor = color;
        block.title = `${lang}: ${percent}%`;
        bar.appendChild(block);
        
        // Append Legend Entry
        const leg = document.createElement('span');
        leg.innerHTML = `<i class="fa-solid fa-circle me-1" style="color: ${color};"></i> ${lang} (${percent}%)`;
        legend.appendChild(leg);
        
        index++;
    });
}

function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    
    if (projects.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center text-muted py-5">No projects match the criteria.</div>';
        return;
    }
    
    projects.forEach((proj, index) => {
        const featuredBadge = proj.featured ? `<div class="project-badge-featured">Featured</div>` : '';
        const techHtml = proj.technologies.slice(0, 3).map(tech => `<span class="tech-pill">${tech}</span>`).join('');
        
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 reveal active'; // Keep active to avoid reveal delay during search filters
        col.innerHTML = `
            <div class="glass-card project-card d-flex flex-column justify-content-between h-100">
                <div class="project-image-box position-relative">
                    <img src="${proj.image}" alt="${proj.title}" class="project-img">
                    <div class="project-card-overlay"></div>
                    ${featuredBadge}
                </div>
                <div class="project-card-content flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                        <h4 class="text-white font-outfit mb-2">${proj.title}</h4>
                        <p class="text-muted small mb-3">${truncateText(proj.description, 100)}</p>
                    </div>
                    <div class="project-tech-pills">
                        ${techHtml}
                    </div>
                </div>
                <div class="project-card-footer">
                    <button class="btn btn-sm btn-outline-premium py-1 px-3" onclick="openProjectModal(${index})">Details</button>
                    <div class="d-flex gap-2">
                        <a href="${proj.repoUrl}" target="_blank" class="btn btn-sm btn-theme-toggle" title="GitHub Repo"><i class="fa-brands fa-github"></i></a>
                        ${proj.demoUrl && proj.demoUrl !== '#' ? `<a href="${proj.demoUrl}" target="_blank" class="btn btn-sm btn-theme-toggle" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

function truncateText(str, n) {
    return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}

function openProjectModal(index) {
    const proj = loadedProjectsList[index];
    if (!proj) return;
    
    document.getElementById('modal-project-title').innerText = proj.title;
    document.getElementById('modal-project-image').src = proj.image;
    document.getElementById('modal-project-desc').innerText = proj.description;
    document.getElementById('modal-stars-count').innerText = proj.stars;
    document.getElementById('modal-updated-date').innerText = proj.updatedAt;
    
    // Bind modal tech tags
    const techContainer = document.getElementById('modal-project-tech');
    techContainer.innerHTML = '';
    proj.technologies.forEach(tech => {
        const pill = document.createElement('span');
        pill.className = 'tech-pill';
        pill.innerText = tech;
        techContainer.appendChild(pill);
    });
    
    // Bind buttons
    document.getElementById('modal-btn-repo').href = proj.repoUrl;
    
    const demoBtn = document.getElementById('modal-btn-demo');
    if (proj.demoUrl && proj.demoUrl !== '#') {
        demoBtn.href = proj.demoUrl;
        demoBtn.classList.remove('d-none');
    } else {
        demoBtn.classList.add('d-none');
    }
    
    // Show Modal
    const modal = new bootstrap.Modal(document.getElementById('projectDetailModal'));
    modal.show();
}

/* ==========================================================================
   Filter & Search Controllers
   ========================================================================== */
function initFilters() {
    const searchInput = document.getElementById('project-search');
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    let activeFilter = 'all';
    let searchQuery = '';
    
    function applyFilterAndSearch() {
        const filtered = loadedProjectsList.filter(proj => {
            const matchesSearch = proj.title.toLowerCase().includes(searchQuery) ||
                                  proj.description.toLowerCase().includes(searchQuery) ||
                                  proj.technologies.some(tech => tech.toLowerCase().includes(searchQuery));
            
            let matchesCategory = true;
            if (activeFilter === 'featured') {
                matchesCategory = proj.featured;
            } else if (activeFilter !== 'all') {
                matchesCategory = proj.language === activeFilter ||
                                  proj.technologies.includes(activeFilter);
            }
            
            return matchesSearch && matchesCategory;
        });
        
        renderProjects(filtered);
    }
    
    // Search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            applyFilterAndSearch();
        });
    }
    
    // Filter click listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.getAttribute('data-filter');
            applyFilterAndSearch();
        });
    });
}

/* ==========================================================================
   Recent Commit activity feed loaders
   ========================================================================== */
async function fetchCommitFeed(username) {
    try {
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public`);
        if (!eventsRes.ok) throw new Error('Commit feed failed');
        const events = await eventsRes.json();
        
        const pushes = events.filter(e => e.type === 'PushEvent').slice(0, 5);
        
        if (pushes.length === 0) {
            renderCommitFeed([]);
            return;
        }
        
        const commitData = [];
        pushes.forEach(push => {
            const repoName = push.repo.name.split('/')[1];
            const commits = push.payload.commits || [];
            const timeAgo = formatTimeAgo(new Date(push.created_at));
            
            commits.forEach(commit => {
                commitData.push({
                    message: commit.message,
                    date: timeAgo,
                    repo: repoName
                });
            });
        });
        
        renderCommitFeed(commitData.slice(0, 5));
    } catch (err) {
        console.warn('Commits fetch warning:', err);
        // Fallback default commits
        renderCommitFeed([]);
    }
}

function renderCommitFeed(commits) {
    const container = document.getElementById('commits-feed-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (commits.length === 0) {
        container.innerHTML = `
            <div class="commit-item py-2 text-center text-muted small">
                No recent push events detected. Verify GitHub API bounds.
            </div>
        `;
        return;
    }
    
    commits.forEach(c => {
        const div = document.createElement('div');
        div.className = 'commit-item d-flex justify-content-between align-items-start py-2';
        div.innerHTML = `
            <div class="pe-3">
                <span class="commit-msg text-white font-monospace d-block">${c.message}</span>
                <span class="text-muted small">repo: <strong class="text-secondary">${c.repo}</strong></span>
            </div>
            <span class="text-muted small text-nowrap font-outfit">${c.date}</span>
        `;
        container.appendChild(div);
    });
}

function formatTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    if (seconds < 60) return 'Just now';
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

/* ==========================================================================
   Contact Form Validation & EmailJS Submit handler
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('btn-submit-form');
    const successAlert = document.getElementById('form-alert-success');
    const errorAlert = document.getElementById('form-alert-error');
    
    if (!form) return;
    
    // Load EmailJS dynamically / Init SDK if available
    if (typeof emailjs !== 'undefined' && CONFIG.emailjs.publicKey !== 'user_publickey_placeholder') {
        emailjs.init(CONFIG.emailjs.publicKey);
        console.log("EmailJS SDK initialized successfully.");
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Trigger Bootstrap form validation classes
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }
        
        // If valid, trigger submission loading state
        submitBtn.disabled = true;
        const submitBtnText = submitBtn.querySelector('.btn-text');
        const originalText = submitBtnText.innerText;
        submitBtnText.innerText = "Transmitting...";
        
        successAlert.classList.add('d-none');
        errorAlert.classList.add('d-none');
        
        // Read form properties
        const nameVal = document.getElementById('user_name').value;
        const emailVal = document.getElementById('user_email').value;
        const subjectVal = document.getElementById('msg_subject').value;
        const messageVal = document.getElementById('message').value;

        try {
            // Check if user set up real EmailJS keys
            if (typeof emailjs !== 'undefined' && CONFIG.emailjs.publicKey !== 'user_publickey_placeholder') {
                
                const templateParams = {
                    from_name: nameVal,
                    from_email: emailVal,
                    subject: subjectVal,
                    message: messageVal,
                    to_name: "G T Prashanth"
                };

                await emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, templateParams);
                console.log("Email sent successfully using EmailJS SDK.");
                
            } else {
                // Mock Submission Mode
                console.log("Mock Email Submission details:", {
                    name: nameVal,
                    email: emailVal,
                    subject: subjectVal,
                    message: messageVal
                });
                // Wait 1.2s to simulate network latency
                await new Promise(resolve => setTimeout(resolve, 1200));
            }
            
            // Show Success UI
            successAlert.classList.remove('d-none');
            form.reset();
            form.classList.remove('was-validated');
            
        } catch (err) {
            console.error("Email send failed:", err);
            errorAlert.classList.remove('d-none');
        } finally {
            submitBtn.disabled = false;
            submitBtnText.innerText = originalText;
        }
    });
}
