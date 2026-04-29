// ═══════════════════════════════════════
//   RJ Marketing & Media — script.js
// ═══════════════════════════════════════

// ─── SERVICES DATA ───

const SERVICES = [
  
  {
    icon: `<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    title: "Social Media Services",
    desc: "Complete social media management including content creation, scheduling, analytics, and community engagement across all major platforms.",
    color: "linear-gradient(135deg,#3b82f6,#22d3ee)",
    shadow: "rgba(59,130,246,0.3)",
    img: "img/social media photo.png",
    link: "social-media.html"
  },
  {
    icon: `<svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies including SEO, PPC, email campaigns, and conversion optimization to maximize your ROI.",
    color: "linear-gradient(135deg,#a855f7,#f472b6)",
    shadow: "rgba(168,85,247,0.3)",
    img:"img/digital marketing image.png",
    link: "digital-marketing.html"
  },
  {
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    title: "Website Development",
    desc: "Custom responsive websites built with modern technology. From design to deployment and ongoing maintenance — we handle everything.",
    color: "linear-gradient(135deg,#10b981,#14b8a6)",
    shadow: "rgba(16,185,129,0.3)",
    img: "img/website developer image.png",
    link: "#contact"
  },
  {
    icon: `<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    title: "Photography & Videography",
    desc: "Professional photo and video production with experienced cameramen. Perfect for events, product shoots, commercials, and brand content.",
    color: "linear-gradient(135deg,#f97316,#f59e0b)",
    shadow: "rgba(249,115,22,0.3)",
    img: "img/camera men image.png",
    link: "video-shoot.html"
  },
  {
    icon: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Model Providing Service",
    desc: "Professional models for songs, YouTube videos, company projects, and promotional campaigns. Vetted talent for every creative need.",
    color: "linear-gradient(135deg,#f43f5e,#ef4444)",
    shadow: "rgba(244,63,94,0.3)",
    img: "img/model.png",
    link: "model-providing.html"
  },
 {
    icon: `<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: "Influencer Marketing",
    desc: "At RJ Marketing & Media Agency, we help businesses reach the right audience through strategic influencer collaborations. We connect yourbrand with trusted influencers in your niche to increase visibility, engagement, and sales..",
    color: "linear-gradient(135deg,#f43f5e,#ef4444)",
    shadow: "rgba(244,63,94,0.3)",
    img: "img/ideas.png",
    link: "influencer-marketing.html"
  }
  
];

// ─── PORTFOLIO DATA ───
const PORTFOLIO = [
  {
    title: "Luxury Brand Launch",
    cat: "Social Media & Photography",
    desc: "Full brand launch campaign with professional photography, social media strategy, and influencer partnerships.",
    img: "https://media.base44.com/images/public/69b0fe4903ac07d3dfad9165/938610b62_generated_d18fd0d6.png"
  },
  {
    title: "E-Commerce Redesign",
    cat: "Web Development & SEO",
    desc: "Complete website redesign with modern UI/UX, resulting in 85% increase in conversions.",
    img: "https://media.base44.com/images/public/69b0fe4903ac07d3dfad9165/c7cdc353e_generated_93578031.png"
  },
  {
    title: "Viral Social Campaign",
    cat: "Digital Marketing",
    desc: "Multi-platform social campaign generating 2M+ impressions and 50K new followers in 30 days.",
    img: "https://media.base44.com/images/public/69b0fe4903ac07d3dfad9165/313730fd7_generated_0f636ca6.png"
  },
  {
    title: "Corporate Video Production",
    cat: "Photography & Videography",
    desc: "Professional video series for a corporate client including commercials, interviews, and product showcases.",
    img: "https://media.base44.com/images/public/69b0fe4903ac07d3dfad9165/2d734f080_generated_a1eef9a8.png"
  }
];

/// ─── RENDER SERVICES CARDS ───
function renderServices() {
  const grid = document.getElementById('services-grid');

  SERVICES.forEach((s, i) => {

    grid.innerHTML += `
    
      <div class="service-card fade-up"
           onclick="window.location.href='${s.link}'"
           style="transition-delay:${i * 0.1}s; cursor:pointer;">

        <div class="service-img">
          <img src="${s.img}" alt="${s.title}" loading="lazy"/>
          <div class="service-img-overlay"></div>
        </div>

        <div class="service-body">

          <div class="service-icon"
               style="background:${s.color};
               box-shadow:0 8px 24px ${s.shadow};">

            ${s.icon}

          </div>

          <h3>${s.title}</h3>

          <p>${s.desc}</p>

          <button class="service-learn">
            Learn More

            <svg viewBox="0 0 24 24">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>

          </button>

        </div>

      </div>`;
  });
}

// ─── RENDER PORTFOLIO CARDS ───
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  PORTFOLIO.forEach((p, i) => {
    grid.innerHTML += `
      <div class="portfolio-card fade-up" style="transition-delay:${i * 0.1}s">
        <div class="aspect">
          <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        </div>
        <div class="portfolio-overlay"></div>
        <div class="portfolio-content">
          <span class="portfolio-cat">${p.cat}</span>
          <h3>${p.title}</h3>
          <p class="portfolio-desc">${p.desc}</p>
          <span class="portfolio-link">
            View Project
            <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </span>
        </div>
      </div>`;
  });
}

// ─── NAVBAR — SCROLL EFFECT ───
function initNavbar() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ─── SMOOTH SCROLL ───
function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ─── MOBILE MENU ───
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

// ─── FOOTER YEAR ───
function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}

// ─── CONTACT FORM SUBMIT ───
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div>';

  // Simulate form submission (1.5s delay)
  setTimeout(() => {
    document.getElementById('contact-form-wrap').innerHTML = `
      <div class="success-state">
        <div class="success-icon">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3>Thank You!</h3>
        <p>Your message has been received. We'll get back to you within 24 hours.</p>
        <button class="btn-again" onclick="resetForm()">Send Another Message</button>
      </div>`;
  }, 1500);
}

// ─── RESET CONTACT FORM ───
function resetForm() {
  document.getElementById('contact-form-wrap').innerHTML = `
    <form id="contact-form" onsubmit="handleSubmit(event)">
      <div class="form-row">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" name="name" placeholder=" Your Name" required />
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="+91 **********" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
            <option value="website_development">Website Development</option>
            <option value="photography">Photography &amp; Videography</option>
            <option value="model_providing">Model Providing Service</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea name="message" placeholder="Tell us about your project..." rows="5"></textarea>
      </div>
      <button type="submit" class="btn-submit" id="submit-btn">
        <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        Send Message
      </button>
    </form>`;
}

// ─── SCROLL ANIMATIONS (IntersectionObserver) ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  // Observe all static fade elements
  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
    observer.observe(el);
  });

  // Re-observe dynamically added cards (services + portfolio)
  setTimeout(() => {
    document.querySelectorAll('.fade-up').forEach(el => {
      if (!el.classList.contains('visible')) observer.observe(el);
    });
  }, 100);
}

// ─── INIT ALL ───
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPortfolio();
  initNavbar();
  setYear();
  initScrollAnimations();
});

//sing in page connect

function openLogin() {
  window.location.href = "signin.html";
}


// all page work
function scrollToSection(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth"
  });
}


//contact form on Whatsapp---

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById("contact-form");

  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const service = form.service.value;
  const message = form.message.value;

  const text = `New Lead 🚀%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Service: ${service}%0A
Message: ${message}`;

  const whatsappURL = `https://wa.me/916367556046?text=${text}`;

  window.open(whatsappURL, "_blank");
}


//contact form on Email---











