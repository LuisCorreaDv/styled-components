import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import utilidades from "./assets/images/utilidades.svg";
import transporte from "./assets/images/transporte.svg";
import { Icono } from "./Components/UI";



export default (type) => {
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="restaurante" />,
        Salud: <Icono src={salud} alt="salud" />,
        Utilidades: <Icono src={utilidades} alt="utilidades" />,
        Transporte: <Icono src={transporte} alt="transporte" />,
        default: <Icono src={otros} alt="otros" />
    };

    return Images[type] || Images["default"];
};