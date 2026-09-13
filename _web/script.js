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

// Product Showcase Full-frame Interactive Slider
const showcaseContainers = document.querySelectorAll('.product-showcase-visual');

showcaseContainers.forEach((visual) => {
  const track = visual.querySelector('.product-slider-track');
  if (!track) return;

  const slides = track.querySelectorAll('.product-slide');
  const thumbs = visual.querySelectorAll('.thumb-btn');
  const counterCurrent = visual.querySelector('.counter-current');
  const counterTotal = visual.querySelector('.counter-total');
  const prevBtn = visual.querySelector('.slider-nav-btn.prev');
  const nextBtn = visual.querySelector('.slider-nav-btn.next');

  const total = slides.length;
  if (counterTotal) counterTotal.textContent = total;

  let isScrolling = null;
  let isDown = false;
  let startX = 0;
  let scrollLeftPos = 0;

  function updateActiveState(index) {
    const safeIndex = Math.max(0, Math.min(index, total - 1));
    if (counterCurrent) counterCurrent.textContent = safeIndex + 1;

    thumbs.forEach((t, i) => {
      const isActive = i === safeIndex;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    const activeThumb = thumbs[safeIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function getActiveIndex() {
    const width = track.clientWidth || 1;
    return Math.round(track.scrollLeft / width);
  }

  function scrollToSlide(index) {
    const width = track.clientWidth;
    const targetLeft = index * width;
    track.scrollTo({ left: targetLeft, behavior: 'smooth' });
    updateActiveState(index);
  }

  // Sync state on track scroll (swipe or programmatic)
  track.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      const idx = getActiveIndex();
      updateActiveState(idx);
    }, 60);
  }, { passive: true });

  // Thumbnail buttons click
  thumbs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-slide'), 10);
      if (!isNaN(idx)) {
        scrollToSlide(idx);
      }
    });
  });

  // Prev / Next arrow buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const current = getActiveIndex();
      const prev = current <= 0 ? total - 1 : current - 1;
      scrollToSlide(prev);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const current = getActiveIndex();
      const next = current >= total - 1 ? 0 : current + 1;
      scrollToSlide(next);
    });
  }

  // Mouse Drag to Swipe on Desktop
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeftPos = track.scrollLeft;
    track.style.scrollBehavior = 'auto';
    track.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    track.style.cursor = '';
    track.style.scrollBehavior = 'smooth';
    const idx = getActiveIndex();
    scrollToSlide(idx);
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = x - startX;
    track.scrollLeft = scrollLeftPos - walk;
  });

  // Keyboard navigation support when focused
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const current = getActiveIndex();
      scrollToSlide(Math.max(0, current - 1));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const current = getActiveIndex();
      scrollToSlide(Math.min(total - 1, current + 1));
    }
  });
});

// Home Lifestyle Showcase Slider Controls
const homeTrack = document.getElementById('home-showcase-track');
const homePrev = document.getElementById('home-showcase-prev');
const homeNext = document.getElementById('home-showcase-next');

let isDraggingHome = false;

if (homeTrack) {
  const getScrollAmount = () => {
    const card = homeTrack.querySelector('.showcase-card');
    return card ? card.offsetWidth + 22 : 340;
  };

  if (homePrev) {
    homePrev.addEventListener('click', () => {
      homeTrack.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });
  }

  if (homeNext) {
    homeNext.addEventListener('click', () => {
      homeTrack.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  }

  // Mouse Drag to Swipe on Desktop
  let isDownHome = false;
  let startXHome = 0;
  let scrollLeftHome = 0;

  homeTrack.addEventListener('mousedown', (e) => {
    isDownHome = true;
    isDraggingHome = false;
    startXHome = e.pageX - homeTrack.offsetLeft;
    scrollLeftHome = homeTrack.scrollLeft;
    homeTrack.style.scrollBehavior = 'auto';
  });

  window.addEventListener('mouseup', () => {
    if (!isDownHome) return;
    isDownHome = false;
    homeTrack.style.cursor = '';
    homeTrack.style.scrollBehavior = 'smooth';
    setTimeout(() => { isDraggingHome = false; }, 60);
  });

  homeTrack.addEventListener('mousemove', (e) => {
    if (!isDownHome) return;
    const x = e.pageX - homeTrack.offsetLeft;
    const walk = x - startXHome;
    if (Math.abs(walk) > 6) {
      isDraggingHome = true;
      homeTrack.style.cursor = 'grabbing';
    }
    homeTrack.scrollLeft = scrollLeftHome - walk;
  });
}

// Global Image Zoom & Gallery Lightbox Controller
(function initImageModal() {
  let modal = document.getElementById('image-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="image-modal-backdrop"></div>
      <div class="image-modal-content">
        <button class="image-modal-close" type="button" aria-label="Đóng">&times;</button>
        <button class="image-modal-nav prev" type="button" aria-label="Xem ảnh trước">‹</button>
        <button class="image-modal-nav next" type="button" aria-label="Xem ảnh tiếp theo">›</button>
        <div class="image-modal-figure">
          <span class="image-modal-counter" id="image-modal-counter"></span>
          <img class="image-modal-img" id="image-modal-img" src="" alt="">
          <p class="image-modal-caption" id="image-modal-caption"></p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const modalImg = modal.querySelector('#image-modal-img');
  const modalCaption = modal.querySelector('#image-modal-caption');
  const modalCounter = modal.querySelector('#image-modal-counter');
  const closeBtn = modal.querySelector('.image-modal-close');
  const prevNav = modal.querySelector('.image-modal-nav.prev');
  const nextNav = modal.querySelector('.image-modal-nav.next');
  const backdrop = modal.querySelector('.image-modal-backdrop');

  let currentGallery = [];
  let currentIndex = -1;

  function updateModalContent() {
    if (currentIndex < 0 || currentIndex >= currentGallery.length) return;
    const item = currentGallery[currentIndex];
    if (modalImg) {
      modalImg.style.opacity = '0';
      setTimeout(() => {
        modalImg.src = item.src;
        modalImg.alt = item.caption || 'Chi tiết hình ảnh';
        modalImg.style.opacity = '1';
      }, 100);
    }
    if (modalCaption) {
      modalCaption.textContent = item.caption || '';
      modalCaption.style.display = item.caption ? 'block' : 'none';
    }
    if (modalCounter) {
      if (currentGallery.length > 1) {
        modalCounter.textContent = `${currentIndex + 1} / ${currentGallery.length}`;
        modalCounter.style.display = 'block';
      } else {
        modalCounter.style.display = 'none';
      }
    }
    if (prevNav && nextNav) {
      const showNav = currentGallery.length > 1;
      prevNav.style.display = showNav ? 'flex' : 'none';
      nextNav.style.display = showNav ? 'flex' : 'none';
    }
  }

  function openModal(src, caption, galleryName) {
    if (galleryName) {
      const galleryEls = Array.from(document.querySelectorAll(`[data-zoom-gallery="${galleryName}"]`));
      currentGallery = galleryEls.map((el) => ({
        src: el.getAttribute('data-zoom-src') || el.querySelector('img')?.src || '',
        caption: el.getAttribute('data-zoom-caption') || el.querySelector('img')?.getAttribute('alt') || ''
      }));
      currentIndex = currentGallery.findIndex((item) => item.src === src);
      if (currentIndex === -1) currentIndex = 0;
    } else {
      currentGallery = [{ src, caption }];
      currentIndex = 0;
    }

    updateModalContent();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (modalImg) modalImg.src = '';
    currentGallery = [];
    currentIndex = -1;
  }

  function prevSlide() {
    if (currentGallery.length <= 1) return;
    currentIndex = currentIndex <= 0 ? currentGallery.length - 1 : currentIndex - 1;
    updateModalContent();
  }

  function nextSlide() {
    if (currentGallery.length <= 1) return;
    currentIndex = currentIndex >= currentGallery.length - 1 ? 0 : currentIndex + 1;
    updateModalContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (prevNav) prevNav.addEventListener('click', (e) => { e.stopPropagation(); prevSlide(); });
  if (nextNav) nextNav.addEventListener('click', (e) => { e.stopPropagation(); nextSlide(); });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Attach click & keydown listeners to all zoomable elements
  document.querySelectorAll('[data-zoom-src]').forEach((el) => {
    const triggerZoom = () => {
      const src = el.getAttribute('data-zoom-src');
      const caption = el.getAttribute('data-zoom-caption') || el.querySelector('img')?.getAttribute('alt') || '';
      const gallery = el.getAttribute('data-zoom-gallery') || '';
      if (src) openModal(src, caption, gallery);
    };

    el.addEventListener('click', () => {
      if (isDraggingHome) return;
      triggerZoom();
    });

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerZoom();
      }
    });
  });
})();



