import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";
const Color = ({ nombreColor, borrarColor }) => {
    return (
        <>
            <div className="col-12 col-md-4 col-lg-3 mt-5">
                <article className="d-flex flex-column align-items-center cardColor">
                    <p className="lead m-0">{nombreColor}</p>
                    <aside>
                        <div className={nombreColor}></div>
                    </aside>
                    <aside className="my-1">
                        <Button variant="danger" type="submit" size="sm" onClick={() => borrarColor(nombreColor)}>
                            Borrar
                        </Button>
                    </aside>
                </article>
            </div>
        </>
    );
};

export default Color;
