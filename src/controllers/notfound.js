/**
 * Handling not found api requests
 * Send a 404 status
 * it will print a message
 */

exports.index = (req, res) => {
  res.status(404);
  res.send({ message: 'Oops!!!! api path not found!' });
};
