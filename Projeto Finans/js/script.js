const checkedCheckbox = document.querySelector("input[name=checkbox]");

function abrirMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

checkedCheckbox.addEventListener('change', abrirMenu);