import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = () => {
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //Se pueden crear multiples states => este se crear para el error
    const [error, actualizarError] = useState(false) // inicializamos el actualizarError en false ya que si nos envian los campos vacios 

    // Funcion que se ejecuta cada vez que el usuario escribe un input
    const actualizaState = e => {
        actualizarCita({
            ...cita, // => Tomamos una copia de cita con spray operator
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita; // siempre es bueno extraerlos para no escribir this.mascota etc...

    // Cuando el usuario presiona agregar cita
    const subitCita = e => {
        e.preventDefault();

        // Lo primero siempre se debe validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        // Eliminar el mensaje si los campos estan llenos
        actualizarError(false);

        // Luego asignar un ID => para crear id unicos existe una libreria que se llama =>  npm i uuid => hay que importarla import uuid from 
        cita.id = uuid(); // => autogeneramos el uuid 


        // Crear la cita => Este componente se crea en el APP principal 


        // Reiniciar el form
    }

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {
                error //operador ternario si el error esta en true nos retorna la alerta de lo contrario retorna false
                    ?
                    <p className="alerta-error">Todos los campos son obligatorios</p>
                    :
                    null
            }
            <form
                onSubmit={subitCita}
            >
                <label>Nombre Mascota</label> 
                <input
                    type="text" //PARA TODOS ESTOS CAMPOS SE UTILIZO UNA LIBRERIA QUE SE LLAMA SKELETON SE IMPORTO EN EL INDEX .HTML
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizaState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={actualizaState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar
                </button>
            </form>
        </Fragment>
    );
}

export default Formulario;