const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const recupToken = req.headers.authorization.split(' ')[1];
    req.decodToken = jwt.verify(recupToken, process.env.TOKEN);
    next();

  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};