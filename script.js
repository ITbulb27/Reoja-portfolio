document.getElementById('year').textContent = new Date().getFullYear();

  // Populate mobile file tree by cloning desktop tree
  document.getElementById('mobileFileTree').innerHTML = document.getElementById('desktopFileTree').innerHTML;

  // Mobile menu toggle
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileTree = document.getElementById('mobileTree');
  burgerBtn.addEventListener('click', () => {
    const isOpen = mobileTree.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', isOpen);
  });
  mobileTree.addEventListener('click', (e) => {
    if(e.target.closest('a')){
      mobileTree.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Scroll-spy for active nav item
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.file-tree a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(sec => observer.observe(sec));