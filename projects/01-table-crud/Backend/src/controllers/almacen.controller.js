//////////////// IMPORTAMOS CREDENCIALES DE BASE DE DATOS ///////////////////////////////////////
import { getConnection, querys, sql } from "../db"

//////////////////////////////////////////////////////////////////////////////////////////////////

export const getProducto = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getAllProducto);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const addProducto = async (req, res) => {
    const {product_name, product_stock, product_description,product_price} = req.body;
    //let {descripcion_fiscalia} = req.body; // se usa let para poder modificar la variable
  
    //if (cod_fiscalia == null || ubucacion_fiscalia == null || telefono_fiscalia == null ) {
     // return res.status(400).json({msg: 'por favor llenar todas las casillas correctamente'});
    //}
    //if (descripcion_fiscalia == null) descripcion_fiscalia = "";
    
    
    try {
      const pool = await getConnection();
      await pool.request()
        .input("product_name", sql.VarChar, product_name)
        .input("product_stock", sql.VarChar, product_stock)
        .input("product_description", sql.VarChar, product_description)
        .input("product_price", sql.VarChar, product_price)
        .query(querys.addProducto);
  
      res.json("producto agregado correctamente");
      
    } catch (error) {
      res.status(500);
      res.send(error.message);  
    }
  };

  export const updateProducto = async (req, res) => {
    const {product_name, product_stock, product_description,product_price} = req.body;
    //let {descripcion_fiscalia} = req.body; // se usa let para poder modificar la variable
  
    //if (cod_fiscalia == null || ubucacion_fiscalia == null || telefono_fiscalia == null ) {
    //  return res.status(400).json({msg: 'por favor llenar todas las casillas correctamente'});
   // }
    //if (descripcion_fiscalia == null) descripcion_fiscalia = "";
  
    try {
      const pool = await getConnection();
      await pool.request()
      .input("product_name", sql.VarChar, product_name)
      .input("product_stock", sql.VarChar, product_stock)
      .input("product_description", sql.VarChar, product_description)
      .input("product_price", sql.VarChar, product_price)
      .input("product_id", req.params.product_id)
      .query(querys.updateProducto);
  
      res.json("producto actualizado correctamente");
      
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  export const deleteProducto = async (req, res) => {
    try {
      const pool = await getConnection();
      await pool.request()
        .input("product_id", req.params.product_id)
        .query(querys.deleteProducto);
  
      res.json("producto Eliminado correctamente");
      
    } catch (error) {
      res.status(500);
      res.send(error.message);  
    }
  };