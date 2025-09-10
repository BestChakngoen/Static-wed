 exports.getPlayerById = (req, res) => {
 const playerId = req.params.id;
 res.json({ id: playerId, name: 'PlayerOne' });
 };

 exports.submitScore = (req, res) => {
 const { username, score } = req.body;
 res.status(201).json({ message: 'Score submitted', username, score });
 };