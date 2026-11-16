const box = document.getElementById('box');
const fd = document.getElementById('fd');
const bek = document.getElementById('bek');
fd.addEventListener('click', () => {
    box.style.borderColor = 'red';
    box.style.borderWidth = '5px';
});
bek.addEventListener('click', () => {
    box.style.borderColor= 'black';
    box.style.borderWidth = '2px';
});