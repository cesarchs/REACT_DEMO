export const querys = {
  getAllProducto: "select * from product",
  addProducto: "EXEC InsertarProducts @product_name, @product_stock, @product_description, @product_price",
  updateProducto: "EXEC ActualizarProduct @product_id, @product_name, @product_stock, @product_description, @product_price",
  deleteProducto: "EXEC borrarProducto @product_id",
};
