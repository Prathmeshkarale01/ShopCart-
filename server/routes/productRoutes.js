
import { Router } from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controller/productController.js'

const productRouter = Router();



productRouter.get('/detail', getProductById);

productRouter.get('/', getAllProducts);

productRouter.post('/', createProduct);

productRouter.put('/', updateProduct);

productRouter.delete('/', deleteProduct);



export default productRouter;
