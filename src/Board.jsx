/* eslint-disable react/prop-types */

import { Cell } from './Cell';

export function Board({ posiciones }) {

    {/* Hacer que cada celda sea un componente */ }

    return (
        <section>

            <div className="board">
                {
                    posiciones.map(((_, index) => {
                        return (
                            <Cell key={index} /> 
                        )
                    }))
                }
            </div>

        </section>
    )
}