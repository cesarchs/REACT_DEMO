import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

//esta funcion nos sirve para mostrar alertas de sweetalert
// este archivo de funciones es para en un solo archivo tener todas los funciones que vayamos a necesitar 
//importandolo acorde a la necesidad, esto para cuando cresca puede ser muy funcional

export function show_alerta (mensaje, icono, foco){
    onfocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title:mensaje,
        icon:icono
    });

}
function onfocus (foco){
    if (foco !== ''){
        document.getElementById(foco).focus();
    }
}