const usersController = require('../actions').users;
const productsController = require('../actions').products;
const purchasesController = require('../actions').purchases;
const purchaseItemsController = require('../actions').purchase_items;

module.exports = (app) => {

    /*const Product = app.define("product", {});
    
    // Find by title and log
	Product.findOne({
		attributes: ['title']
	}).then(prod => {
		console.log(prod.get("title"));
	});*/
    
    
    
	app.get('/api', (req, res) => res.status(200).send({
		message: 'HI - API',
	}));

	//User methods
	app.post('/api/users', usersController.create); // post
	app.get('/api/users', usersController.list); // get

	//Products methods
	app.get('/api/products', productsController.list); //get
	app.get('/api/products/:id', productsController.listId); //get 
	app.post('/api/products', productsController.create); //post 
	app.put('/api/products/:id', productsController.update); //post 
	app.delete('/api/products/:id', productsController.destroy); //delete

	//Purchases method
	app.post('/api/purchases', purchasesController.create); // post 

	//Purchase_item method
	app.post('/api/purchase_items', purchaseItemsController.create);//post*/
	
};