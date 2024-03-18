import React ,{ useState ,useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../functions';


const ShowProducts = () => {

    const [products, setProducts] = useState ([]);

    //variables para producto
    const [idp, setIdP] = useState ('');
    const [nameP, setNameP] = useState ('');
    const [stockP, setstockP] = useState ('');
    const [descriptionP, setDescriptionP] = useState ('');
    const [priceP, setPriceP] = useState ('');

    const [operation, setOperation] = useState ('');
    const [title, setTitle] = useState ('');
    

    useEffect(() => {
        getProducts();
      }, []);

      const getProducts = async () => {
        fetch("http://localhost:3005/")
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }

      const openModal = (op, id, name,stock, description, price) => {
        setIdP('');
        setNameP('');
        setstockP('');
        setDescriptionP('');
        setPriceP('');
        setOperation(op);

        if(op ===1){
            setTitle('ADD PRODUCT');
        }
        else if (op ===2){
            setTitle('EDIT PRODUCTO');
            setIdP(id);
            setNameP(name);
            setstockP(stock);
            setDescriptionP(description);
            setPriceP(price);
        }
      }

  
      const validador = (
        product_id,
        product_name,
        product_stock,
        product_description,
        product_price) => {
        if (operation === 1) {
            enviarSolicitud(product_name,
                product_stock,
                product_description,
                product_price)
        }
        else (
            enviarSolicitud2(product_id,
                product_name,
                product_stock,
                product_description,
                product_price)
        )
      };

      const enviarSolicitud = async (
        product_name,
        product_stock,
        product_description,
        product_price
         ) => {

        agregarproducto(product_name,
            product_stock,
            product_description,
            product_price);
      }
      const enviarSolicitud2 = async (
        product_id,
        product_name,
        product_stock,
        product_description,
        product_price
         ) => {

        guardarCambios(
            product_id,
            product_name,
            product_stock,
            product_description,
            product_price);
      }

      const agregarproducto = (
        product_name,
        product_stock,
        product_description,
        product_price
      ) => {
        const nuevaP = {
            product_name: product_name,
            product_stock: product_stock,
            product_description: product_description,
            product_price: product_price,
        };
        fetch("http://localhost:3005/addProducto", {
          method: "POST",
          body: JSON.stringify(nuevaP),
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
            // Manejar la respuesta del endpoint (éxito o error)
            if (response.ok) {
              console.log("agregado exitosamente");
              document.getElementById('btnCerrar').click();
              getProducts();
            } else {
              console.error("Error al guardar los producto");
            }
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud", error);
          });
      };

      const guardarCambios = (
        product_id,
        product_name,
        product_stock,
        product_description,
        product_price) => {

            console.log(product_id, 'aca debe de estar el id');

        const ACTUALIZARP = {
            product_id: product_id,
            product_name: product_name,
            product_stock: product_stock,
            product_description: product_description,
            product_price: product_price,
        };
        console.log(product_id);

        // Realizar la llamada a tu endpoint para guardar los cambios
        fetch(`http://localhost:3005/updateProducto/${product_id}`, {
          method: "PUT",
          body: JSON.stringify(ACTUALIZARP),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            // Manejar la respuesta del endpoint (éxito o error)
            if (response.ok) {
              console.log("Cambios guardados con éxito");
              document.getElementById('btnCerrar').click();
              getProducts();
            } else {
              console.error("Error al guardar los cambios");
            }
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud", error);
          });
      };

      const eliminarProducto =(product_id) =>{
        setIdP(product_id);
        fetch(`http://localhost:3005/deleteProducto/${product_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
            // Manejar la respuesta del endpoint (éxito o error)
            if (response.ok) {
              console.log("producto eliminado");
              getProducts();
            } else {
              console.error("Error al eliminar");
            }
          })
          .catch((error) => {
            console.error("Error al realizar la solicitud", error);
          });
      }


  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-4'>
                    <div className='d-grid mx-auto'>
                        <button onClick={()=> openModal(1)}  className='btn btn-dart' data-bs-toggle = 'modal' data-bs-target = '#modalProducts'>
                            <i className='fa-solid fa-circle-plus'></i>Add
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr><th>#ID</th><th>NOMBRE</th><th>STOCK</th><th>DESCRIPTION</th><th>PRICE</th></tr>
                            </thead>
                            <tbody className='table group-divider'>
                                {
                                    products.map( (product,i)=>(
                                        <tr key={product.product_id}>
                                            <td>{product.product_id}</td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_stock}</td>
                                            <td>{product.product_description}</td>
                                            <td>{product.product_price}</td>
                                            <td>
                                                <button onClick={()=> openModal(2,product.product_id,product.product_name,product.product_stock,product.product_description,product.product_price )} className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                    <i className='fa-solid fa-edit'></i>
                                                </button>&nbsp;
                                                <button onClick={()=> eliminarProducto(product.product_id)} className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div id ='modalProducts' className='modal fade' aria-hidden= 'true'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <label className='h5'>{title}</label>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                    </div>
                    <div className='modal-body'>
                        <input type='hidden' id='id'></input>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-gift' ></i></span>
                            <input type='text' id='productop' className='form-control' placeholder='Producto' value = {nameP} onChange={(e)=> setNameP(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-gift' ></i></span>
                            <input type='text' id='ubicacionp' className='form-control' placeholder='Ubicacion' value = {stockP} onChange={(e)=> setstockP(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-gift' ></i></span>
                            <input type='text' id='descripcionp' className='form-control' placeholder='descripcion' value = {descriptionP} onChange={(e)=> setDescriptionP(e.target.value)}></input>
                        </div>
                        <div className='input-group mb-3'>
                            <span className='input-group-text'><i className='fa-solid fa-gift' ></i></span>
                            <input type='text' id='pricep' className='form-control' placeholder='price' value = {priceP} onChange={(e)=> setPriceP(e.target.value)}></input>
                        </div>
                        
                        <div className='d-grid col-6 mx-auto'>
                            <button onClick={()=> validador(idp,nameP,stockP,descriptionP,priceP)} className='btn btn-success'>
                                <i className='fa-solid fa-floppy-disk'></i> SAVE
                            </button>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button type='button' id = 'btnCerrar' className='btn btn-secondary' data-bs-dismiss ='modal'>
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProducts