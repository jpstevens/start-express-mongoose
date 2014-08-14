var chalk = require('chalk'),
    q = require('q'),
    mongoose = require('mongoose');

exports.start = function (app) {
  var mongodb = app.get('mongodb') || app.get('mongoose') || process.env.MONGODB_URL;
  var deferred = q.defer();
  mongoose.connect(mongodb, function (err) {
    if (err) {
      deferred.reject(err);
    } else {
      var message = "Mongoose connected to: #{mongodb}";
      console.log(chalk.green(" ✔ ") + message);
      deferred.resolve();
    }
  });
  return deferred.promise;
};
