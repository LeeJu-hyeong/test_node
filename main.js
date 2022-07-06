const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: "Succeed!"
    });
});

app.listen(3000, () => {
    console.log(`Server is Started`);
});