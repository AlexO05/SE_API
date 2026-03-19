const express = require('express');
const app = express();

app.get('/command', (req, res) => {
    const user = req.query.user || 'someone';

    // Custom logic
    const response = `@${user}, hello from your custom API!`;

    res.json({
        message: response
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));