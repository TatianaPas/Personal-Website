const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('show');
})