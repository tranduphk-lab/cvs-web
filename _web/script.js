const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
}

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

if (header) {
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

if (header && menuButton && navigation) {
  const closeMenu = () => {
    menuButton.classList.remove('open');
    navigation.classList.remove('open');
    document.body.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
  };

  menuButton.addEventListener('click', () => {
    const isOpening = !navigation.classList.contains('open');
    if (!isOpening) return closeMenu();
    menuButton.classList.add('open');
    navigation.classList.add('open');
    document.body.classList.add('menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Đóng menu');
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const faqItems = document.querySelectorAll('.faq-list details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const topicInput = document.getElementById('topic');
    const messageInput = document.getElementById('message');
    const feedback = document.getElementById('form-feedback');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const topic = topicInput ? topicInput.value : '';

    if (!name || !phone || !topic) {
      if (feedback) {
        feedback.className = 'form-feedback-error';
        feedback.style.display = 'block';
        feedback.textContent = 'Vui lòng điền đầy đủ họ tên, số điện thoại và chọn tình trạng da đầu cần tư vấn.';
      }
      return;
    }

    if (feedback) {
      feedback.className = 'form-feedback-success';
      feedback.style.display = 'block';
      feedback.innerHTML = `✓ Cảm ơn <strong>${name}</strong>! Cavisi đã tiếp nhận câu hỏi của bạn. Chuyên viên sẽ liên hệ lại qua số <strong>${phone}</strong> trong thời gian sớm nhất.<br><span style="font-size:12px;opacity:0.9;">Nếu cần tư vấn khẩn cấp, vui lòng gọi Hotline <a href="tel:0764358668" style="font-weight:700;text-decoration:underline;">0764 358 668</a> hoặc nhắn tin qua <a href="https://zalo.me/0764358668" target="_blank" rel="noopener noreferrer" style="font-weight:700;text-decoration:underline;">Zalo</a>.</span>`;
    }

    contactForm.reset();
  });
}

const scrollTopBtn = document.getElementById('scroll-top-btn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 320);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
