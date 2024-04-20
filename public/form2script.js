function displayColors() {
    const inputText = document.getElementById('textInput').value;
    const outputSection = document.getElementById('colorfulText');
    outputSection.innerHTML = ''; // Clear previous entries

    for (let i = 1; i <= 12; i++) {
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        const fontSize = 14 + (i * 2); // Start at 14px and increase by 2px each line
        const line = document.createElement('p');
        line.textContent = inputText;
        line.style.color = color;
        line.style.fontSize = `${fontSize}px`;
        outputSection.appendChild(line);
    }
}