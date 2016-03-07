var api = require('./api');


function init(app) {

  app.get('/b', function (req, res) {
    setTimeout(function () {
      var date = res.locals.dateStamp || new Date();
      return res.status(200).send('b - ' + date);
    }, 1000);
  });

  app.use('/b/api', api);
}

module.exports = init;