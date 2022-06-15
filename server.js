const express = require('express'),
    app = express();

const PORT = 3001

app.get("/api/calc_cost", (req, res) => {
    if (Object.keys(req.query).length === 5) {
        const {
            numbers_kilometers,
            price_kilometers,
            number_hours,
            price_hours,
            total_income
        } = req.query;
        const result = parseInt(total_income) - ((parseInt(numbers_kilometers) * parseInt(price_kilometers)) + (parseInt(number_hours) * parseInt(price_hours)));
        res.json({result: !result && result !== 0  ? 'invalid data sent!' : result});
    }else {
        res.status(500).send({ error: 'Failed to calculate' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

