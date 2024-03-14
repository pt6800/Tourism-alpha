const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


// Menu Show
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
});


// Menu Hidden
navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
})
// Sticky Header
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 90);
});

// Search
const search = document.getElementById('search'),
searchBtn = document.getElementById('search-btn'),
searchClosen = document.getElementById('search-close')

// Search Show
searchBtn.addEventListener('click', () =>{
    search.classList.add('show-search')
})

// Search Hidden

searchClosen.addEventListener('click', () =>{
    search.classList.remove('show-search')
})