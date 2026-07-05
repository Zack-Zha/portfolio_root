/**
 * Reveal animation system using IntersectionObserver.
 *
 * Usage:
 *   <div data-reveal>Single element</div>
 *
 *   <div data-reveal-group>
 *     <div data-reveal>Stagger 1</div>
 *     <div data-reveal>Stagger 2</div>
 *   </div>
 *
 * Config (optional custom properties on the element):
 *   data-reveal-delay="200"       Override stagger/delay (ms)
 *   data-reveal-duration="700"    Transition duration (ms)
 *   data-reveal-y="20"            TranslateY offset (px)
 *   data-reveal-blur="4"          Blur amount (px)
 *
 * Group config:
 *   data-reveal-group="120"       Stagger interval for children (ms, default 100)
 */

const STAGGER_DEFAULT = 100;

function applyReveal(el: HTMLElement, delayMs: number): void {
  if (el.dataset.revealDelay !== undefined) {
    delayMs = parseInt(el.dataset.revealDelay, 10);
  }
  if (el.dataset.revealDuration !== undefined) {
    el.style.setProperty('--reveal-duration', `${el.dataset.revealDuration}ms`);
  }
  if (el.dataset.revealY !== undefined) {
    el.style.setProperty('--reveal-y', `${el.dataset.revealY}px`);
  }
  if (el.dataset.revealBlur !== undefined) {
    el.style.setProperty('--reveal-blur', `${el.dataset.revealBlur}px`);
  }
  el.style.setProperty('--reveal-delay', `${delayMs}ms`);
  el.classList.add('is-revealed');
}

function setupObserver(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;

        // Check if this element is inside a reveal-group
        const group = el.closest<HTMLElement>('[data-reveal-group]');
        if (group && !group.dataset.revealGroupProcessed) {
          group.dataset.revealGroupProcessed = '1';
          const staggerMs =
            parseInt(group.getAttribute('data-reveal-group') || '', 10) ||
            STAGGER_DEFAULT;
          const children = group.querySelectorAll<HTMLElement>(':scope > [data-reveal]');
          children.forEach((child, i) => {
            applyReveal(child, i * staggerMs);
          });
        } else if (!group) {
          // Standalone element (no group)
          applyReveal(el, 0);
        }

        observer.unobserve(el);
      }
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  // Find and observe all reveal elements
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  elements.forEach((el) => observer.observe(el));
}

// Run on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupObserver);
} else {
  setupObserver();
}
