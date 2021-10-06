import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({createCita}) => {
    // SetState
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false)

    const handleInput = (event) => {
        setCita({
            ...cita,
            [event.target.name]: event.target.value
        });
    };

    const {mascota, propietario, fecha, hora, sintomas} = cita

    const submitCita = event => {
        event.preventDefault();

        // Validation
        if (mascota && propietario && fecha && hora && sintomas) {
            setError(false)

            // Assign id
            cita.id = uuidv4()

            // Create cita
            createCita(cita)

            // Reset form
            setCita({
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
            })

        } else {
            setError(true)
        }

    };
    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                    <input
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Mascota"
                        onChange={handleInput}
                        value={mascota}
                    />
                <label>Nombre del dueño</label>
                    <input
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre del dueño de la mascota"
                        onChange={handleInput}
                        value={propietario}
                    />
                <label>Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={handleInput}
                        value={fecha}
                    />
                <label>Hora</label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={handleInput}
                        value={hora}
                    />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleInput}
                    value={sintomas}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;