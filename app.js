

/* Group members:-
Abraham Zbedat 213013618
Mohammed Tarabia 213011737
Tamer krakra 314657842  
*/

const express = require('express');
const path = require('path');
const port = 3000;
const app = express();






app.use(express.static('public'));

app.get('/:formName', (req, res) => {
    const formName = req.params.formName;
    const filePath = path.join(__dirname, 'public', `${formName}.html`);

    res.sendFile(filePath, err => {
        if (err) {
            res.status(404).send('Page not found');
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
