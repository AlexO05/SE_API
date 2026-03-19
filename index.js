const express = require('express');
const app = express();

app.get('/command', (req, res) => {
    const user = req.query.user || 'someone';

    // Custom logic
    

    res.send(`@${user} hello from your custom API!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));