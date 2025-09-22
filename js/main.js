(function(){
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    const visible = nav.style.display === 'block';
    nav.style.display = visible ? '' : 'block';
    btn.textContent = visible ? '☰' : '✕';
  });
  nav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> {
      if(window.innerWidth <= 600) {
        nav.style.display = '';
        btn.textContent = '☰';
      }
    });
  });
})();