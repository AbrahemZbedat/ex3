window.onload = function() {
    const form = document.getElementById('uploadForm');
    form.onsubmit = function(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        const fileInput = document.getElementById('imageUpload');
        const clearCheckBox = document.getElementById('clearImages');
        const file = fileInput.files[0];

        if (!file || !file.type.startsWith('image')) {
            alert("Please upload a valid image file.");
            return false;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const displayedImage = document.getElementById('displayedImage');
            displayedImage.src = e.target.result;
            displayedImage.style.display = 'block';

            if (clearCheckBox.checked) {
                localStorage.setItem('images', JSON.stringify([e.target.result]));  // Reset and store only the current image
            } else {
                let images = JSON.parse(localStorage.getItem('images') || '[]');
                images.push(e.target.result);
                localStorage.setItem('images', JSON.stringify(images));
            }

            displayPreviousImages();
        };
        reader.readAsDataURL(file);
    };

    displayPreviousImages();
};

function displayPreviousImages() {
    const previousImages = document.getElementById('previousImages');
    previousImages.innerHTML = '';  // Clear existing images
    let images = JSON.parse(localStorage.getItem('images') || '[]');

    // Display all images except the latest one (which is displayed separately)
    images.slice(0, images.length - 1).forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '70%';
        img.style.margin = '10px auto';
        img.style.display = 'block';
        previousImages.appendChild(img);
    });
}

