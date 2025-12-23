
import Router from 'express'
import { removeFromCart, addToCart, getCartItems } from '../controller/cartController.js'

const cartRouter = Router();

//Add the product to the cart
cartRouter.post('/add' , addToCart);

//get all items in the cart
cartRouter.get('/', getCartItems);


//Remove the product from the cart
cartRouter.post('/remove' , removeFromCart);

export default cartRouter;
