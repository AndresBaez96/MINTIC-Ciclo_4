import Inversion from "./components/Inversion";
import swal from "sweetalert"
import { useEffect, useState } from "react";
import axios from "axios";

const Inicio = () => {
    const [inversiones, setInversiones] = useState([]);
    const obtenerInversiones = () => {
        axios.get("http://localhost:5000/api/inversiones")
        .then((respuesta) => {
            setInversiones(respuesta.data);
            console.log(respuesta.data);
        }).catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        obtenerInversiones();
    },[]);
    
    const handleDelete = (inversion) => {
        swal({
            title: "¿Estás seguro(a)",
            text: "Si borras la inversión, no se podrá recuperar",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete("http://localhost:5000/api/borrar-inversion/" + inversion._id)
                .then((rpta) => {
                    swal("La inversión "+ inversion._id + " fue borrada",{
                        icon: "success"
                    });
                    obtenerInversiones();
                    console.log(rpta);
                }).catch((error) => {
                    console.log(error);
                })

                
            }else{
                swal("Tu inversión no fue borrada")
            }
        });
        
    };
    return ( 
        <div className="p-3 pb md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Portafolio de Inversiones</h1>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {inversiones.map((inversion) => (
                    <Inversion 
                        key={inversion._id} 
                        inversion={inversion} 
                        handleDelete={handleDelete}/>    
                ))};
            </div>
        </div>
     );
}
 
export default Inicio;