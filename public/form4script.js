document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    if (!document.getElementById('terms').checked) {
        alert('You must agree to the terms and conditions.');
        return false;
    }

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    const queryString = Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&');

    // Create a new page and display the details
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <title>Submission Details</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>Form Submission Details</h1>
                <p>First Name: ${data.firstName}</p>
                <p>Surname: ${data.surname}</p>
                <p>Email: ${data.email}</p>
                <p>Gender: ${data.gender}</p>
                <p>Date of Birth: ${data.dob}</p>
                <p>Password: [hidden]</p>
            </body>
        </html>
    `);
    newWindow.document.close();
});
