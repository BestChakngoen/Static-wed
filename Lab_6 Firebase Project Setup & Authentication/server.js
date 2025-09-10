const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running.');
});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const playerRoutes = require('./routes/player');
app.use('/player', playerRoutes);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
app.get('/player/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'PlayerOne' });
});

app.post('/score', (req, res) => {
    const { username, score } = req.body;
    res.status(201).json({ message: 'Score submitted', username, score });
});

