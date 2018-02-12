/*DOCS
http://docs.sequelizejs.com/manual/installation/getting-started.html
*/
const express = require('express')
const app = express()

require('./api')(app);

app.get('*', (req, res) => res.status(200).send({
	message: 'Welcome its working!',
}));

module.exports = app;