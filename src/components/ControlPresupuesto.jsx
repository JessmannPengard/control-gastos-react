import React from 'react'
import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { formatearMoneda } from '../helpers'

const ControlPresupuesto = ({
    presupuesto,
    setPresupuesto,
    gastos,
    setGastos,
    setIsValidPresupuesto
}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        const nuevoPorcentaje = (100 - totalDisponible * 100 / presupuesto).toFixed(2);

        setGastado(totalGastado);
        setDisponible(totalDisponible);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1000)

    }, [gastos]);

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar el presupuesto?');
        if (resultado) {
            setGastos([]);
            setPresupuesto(0);
            setIsValidPresupuesto(false);
        }
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Resetear App
                </button>
                <p>
                    <span>Presupuesto:</span> {formatearMoneda(presupuesto)}
                </p>
                <p className={porcentaje > 100 ? 'negativo' : ''}>
                    <span>Disponible:</span> {formatearMoneda(disponible)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearMoneda(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto