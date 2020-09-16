module.exports = function (app) {
  // MAIL SYSTEM
  const mail = require('./api/mail')
  app.use('/api/mail', mail)

}