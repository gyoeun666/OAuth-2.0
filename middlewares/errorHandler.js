const errorHandler = (err, res) => {
  console.log(err);
  res.status(err.statusCode || 500).json({ error: err.message });
};

module.exports = errorHandler;
