
(function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (toggle){
    toggle.addEventListener('click', () => {
      const visible = window.getComputedStyle(nav).display !== 'none';
      nav.style.display = visible ? 'none' : 'flex';
      toggle.setAttribute('aria-expanded', String(!visible));
    });
  }

  const prepButtons = document.querySelectorAll('[data-prep]');
  const modal = document.getElementById('prepModal');
  const modalClose = document.getElementById('modalClose');
  const prepText = document.getElementById('prepText');
  prepButtons.forEach(btn => btn.addEventListener('click', () => {
    if(!modal) return;
    prepText.textContent = btn.getAttribute('data-prep');
    modal.setAttribute('aria-hidden','false');
  }));
  if (modalClose){
    modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
  }
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modal) modal.setAttribute('aria-hidden','true');
  });
})();
