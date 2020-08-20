let n = prompt("Enter n");
const container = document.querySelector('#container');

for (let i=0; i<n; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `This is the glorious text-content! ${i}`;
    container.appendChild(content);
}
