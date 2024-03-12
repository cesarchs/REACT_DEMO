import React ,{ useState ,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../functions';


const ShowProducts = () => {
    const url = 'http://localhost:3005/';
    const [products, setProducts] = useState ([]);
    const [id, setId] = useState ('');
    const [name, setName] = useState ('');
    const [description, setDescription] = useState ('');
    const [price, setPrice] = useState ('');
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

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-4'>
                    <div className='d-grid mx-auto'>
                        <button className='btn btn-dart' data-bs-toggle = 'modal' data-bs-target = '#modalProducts'>
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
                                <tr><th>#ID</th><th>NOMBRE</th><th>UBICACION</th><th>DESCRIPCION</th></tr>
                            </thead>
                            <tbody className='table group-divider'>
                                {
                                    products.map( (product,i)=>(
                                        <tr key={product.id_fiscalia}>
                                            <td>{product.id_fiscalia}</td>
                                            <td>{product.cod_fiscalia}</td>
                                            <td>{product.ubucacion_fiscalia}</td>
                                            <td>{product.descripcion_fiscalia}</td>
                                            <td>
                                                <button className='btn btn-warning'>
                                                    <i className='fa-solid fa-edit'></i>
                                                </button>&nbsp;
                                                <button className='btn btn-danger'>
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
                            <input type='text' id='nombre' className='form-control' placeholder='Nombre' value = {name} onChange={(e)=> setName(e.target.value)}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProducts