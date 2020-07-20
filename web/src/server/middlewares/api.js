module.exports = function setup(app) {
  app.get('/api/getTest', async (req, res) => {
    const getTest = require('./requests/getTest');
    const data = await getTest(req, res);
    res.send(data);
  });
};
