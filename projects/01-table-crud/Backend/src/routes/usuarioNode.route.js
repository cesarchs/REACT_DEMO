import express from 'express'
import {getProducto,addProducto,updateProducto , deleteProducto}
from '../controllers/almacen.controller.js'


const Router = express();

//Routers 
Router.get('/', getProducto) // de prueba
Router.post('/addProducto',             addProducto     )   
Router.put('/updateProducto/:product_id',       updateProducto  )
Router.delete('/deleteProducto/:product_id', deleteProducto)

export default Router
