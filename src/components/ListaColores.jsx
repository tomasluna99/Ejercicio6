import React from "react";
import Color from "./Color";

const ListaColores = ({ listaColores, borrarColor }) => {
    return (
        <div>
            <section className="container">
                <aside className="container row justify-content-center align-items-center">
                    {/* aqui expongo el arreglo lista colores  iterendo el arreglo con el metodo maps de los arreglos*/}
                    {listaColores.map((elemento, posicion) => (
                        <Color key={posicion} nombreColor={elemento} borrarColor={borrarColor} />
                    ))}
                </aside>
            </section>
        </div>
    );
};

export default ListaColores;
