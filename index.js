/*DOCS
http://docs.sequelizejs.com/manual/installation/getting-started.html
*/
const Sequelize = require('sequelize');
const sequelizeConn = new Sequelize('postgres://postgres:password@localhost:5432/pgguide');
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
//const express = require('express')
//const app = express()
//require('./api')(sequelizeConn);

sequelizeConn.authenticate()
.then(() => {
	console.log("Connection have been established!");
    // Define a model -> product
	const Product = sequelizeConn.define("product", {
        /*id: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        }*/
    });
    
    // Find by title and log
	Product.findOne({
		attributes: ['title']
	}).then(prod => {
		console.log(prod.get("title"));
	});
}).catch(err => {
	console.log(err);
});

/*Sequelize.get('*', (req, res) => res.status(200).send({
	message: 'Welcome its working!',
}));*/

//module.exports = Sequelize;