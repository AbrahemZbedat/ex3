document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload a file.");
        return;
    }

    if (file.type !== "text/plain") {
        alert("Please upload a text file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const lines = e.target.result.split('\n');
        if (lines.length > 0) {
            document.getElementById('title1').textContent = lines[0];
        }
        if (lines.length > 1) {
            document.getElementById('title2').textContent = lines[1];
        }
        if (lines.length > 2) {
            document.getElementById('content').innerHTML = lines.slice(2).join('<br>');
        }
    };
    reader.readAsText(file);
});
