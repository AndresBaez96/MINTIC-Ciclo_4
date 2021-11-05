import React, { useEffect, useState } from "react";
import axios from "axios";

const Inversion = (props) => {
    const {inversion, handleDelete} = props;
    const [actual, setActual] = useState(0);
    const [ganancia, setGanancia] = useState(0);
    const formatterCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 10
    });
    const formatterPercent = new Intl.NumberFormat("en-US", {
        style: "percent",
        maximumFractionDigits: 10
    });

    useEffect(() => {
        console.log(inversion);
        axios.get(
            "https://api.coingecko.com/api/v3/simple/price/?ids="+
            inversion.coin_name +
            "&vs_currencies=usd"
        ).then((rpta) => {
            const valorUSD = rpta.data[inversion.coin_name].usd;
            const ganancia = ((valorUSD * inversion.coins) - inversion.inversion) / inversion.inversion;
            setActual(valorUSD);
            setGanancia(ganancia);
        })
    });
    return ( 
        <React.Fragment>
            <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className={ganancia > 0 
                        ? "card-header py-3 bg-success" 
                        : "card-header py-3 bg-danger"}>
                        <h4 className="my-0 fw-normal">{inversion.coin_name}</h4>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title pricing-card-title">
                            {formatterCurrency.format(inversion.inversion)}
                            <small className="h6 text-muted fw-light d-block">
                                Invertido
                            </small>
                        </h2>
                        <h3 className="card-title pricing-card-title">
                            {inversion.coins}
                            <small className="h6 text-muted fw-light d-block">Coins</small>
                        </h3>
                        <h3 className="card-title pricing-card-title">
                            {formatterCurrency.format(actual)}
                            <small className="h6 text-muted fw-light d-block">Actual</small>
                        </h3>

                        <ul className="list-unstyled mt-3 mb-4">
                            <li className={ganancia > 0 
                                ? "card-header py-3 bg-success" 
                                : "card-header py-3 bg-danger"}>
                                <strong>{formatterPercent.format(ganancia)}</strong>
                            </li>
                            <li>{new Date(inversion.date).toLocaleDateString()}</li>
                        </ul>

                        <button
                            type="button"
                            className="w-100 btn btn-lg btn-outline-primary"
                            onClick={() => handleDelete(inversion)}
                            >
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Inversion;