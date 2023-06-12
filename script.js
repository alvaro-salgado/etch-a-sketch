const container = document.querySelector('.container');

for (let i = 0; i < 8; i++){
    const grid = document.createElement('div');
    grid.style.color ='red';
    
    grid.textContent = 'hello';
    
    container.appendChild(grid);
}
