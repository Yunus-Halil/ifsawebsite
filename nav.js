// IFISA shared nav + footer + scroll effects
(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'index.html',              label: 'Home' },
    { href: 'about.html',              label: 'About' },
    { href: 'programme.html',          label: 'Programme' },
    { href: 'learning-stages.html',    label: 'Learning Stages' },
    { href: 'pathways.html',           label: 'Pathways' },
    { href: 'student-experience.html', label: 'Students' },
    { href: 'schools.html',            label: 'Schools' },
    { href: 'partnerships.html',       label: 'Partnerships' },
    { href: 'research.html',           label: 'Research' },
    { href: 'join.html',               label: 'Join IFISA' },
    { href: 'news.html',               label: 'News' },
    { href: 'contact.html',            label: 'Contact', cta: true },
  ];

  // Inline SVG logo mark — graduate + laptop + star
  const logoSVG = `<svg width="36" height="36" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Star -->
    <polygon points="14,1 16.8,9.2 25.6,9.2 18.8,14.4 21.6,22.6 14,17.4 6.4,22.6 9.2,14.4 2.4,9.2 11.2,9.2" fill="#F5C842"/>
    <!-- Mortar board -->
    <rect x="22" y="18" width="36" height="6" rx="1.5" fill="#2D0057"/>
    <rect x="20" y="22" width="40" height="4" rx="1" fill="#2D0057"/>
    <!-- Tassel -->
    <rect x="57" y="26" width="2.5" height="9" rx="1.2" fill="#F5C842"/>
    <circle cx="58.25" cy="36" r="3" fill="#F5C842"/>
    <!-- Head -->
    <rect x="30" y="28" width="20" height="18" rx="4" fill="#2D0057"/>
    <circle cx="36" cy="36" r="2" fill="white"/>
    <circle cx="44" cy="36" r="2" fill="white"/>
    <path d="M35 41 Q40 45 45 41" stroke="white" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <!-- Laptop -->
    <rect x="18" y="50" width="44" height="26" rx="4" fill="#2D0057"/>
    <circle cx="40" cy="63" r="6" stroke="white" stroke-width="2.5" fill="none"/>
    <rect x="14" y="76" width="52" height="3" rx="1.5" fill="#2D0057" opacity=".4"/>
  </svg>`;

  const navHtml = `
<nav class="nav" id="main-nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      ${logoSVG}
      <span>IFISA</span>
    </a>
    <ul class="nav__links" id="nav-links">
      ${pages.map(p => `
        <li><a href="${p.href}" class="${p.cta ? 'nav__cta' : ''}${currentPage === p.href ? ' active' : ''}">${p.label}</a></li>
      `).join('')}
    </ul>
    <button class="nav__toggle" id="nav-toggle" aria-label="Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect y="4"  width="24" height="2.5" rx="1.25" fill="currentColor"/>
        <rect y="11" width="24" height="2.5" rx="1.25" fill="currentColor"/>
        <rect y="18" width="18" height="2.5" rx="1.25" fill="currentColor"/>
      </svg>
    </button>
  </div>
</nav>`;

  const footerLogoSVG = `<svg width="36" height="36" viewBox="0 0 80 80" fill="none">
    <polygon points="14,1 16.8,9.2 25.6,9.2 18.8,14.4 21.6,22.6 14,17.4 6.4,22.6 9.2,14.4 2.4,9.2 11.2,9.2" fill="#F5C842"/>
    <rect x="22" y="18" width="36" height="6" rx="1.5" fill="white" opacity=".9"/>
    <rect x="20" y="22" width="40" height="4" rx="1" fill="white" opacity=".9"/>
    <rect x="57" y="26" width="2.5" height="9" rx="1.2" fill="#F5C842"/>
    <circle cx="58.25" cy="36" r="3" fill="#F5C842"/>
    <rect x="30" y="28" width="20" height="18" rx="4" fill="white" opacity=".9"/>
    <circle cx="36" cy="36" r="2" fill="#2D0057"/>
    <circle cx="44" cy="36" r="2" fill="#2D0057"/>
    <path d="M35 41 Q40 45 45 41" stroke="#2D0057" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <rect x="18" y="50" width="44" height="26" rx="