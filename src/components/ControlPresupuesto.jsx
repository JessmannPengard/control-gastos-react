import React from 'react'
import { formatearMoneda } from '../helpers'

const ControlPresupuesto = ({ presupuesto }) => {



    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto:</span> {formatearMoneda(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearMoneda(0)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearMoneda(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto