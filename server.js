const express = require('express'),
    app = express();

const PORT = 3001

app.get("/api", (req, res) => {
    res.json({message: 'cdc'});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

