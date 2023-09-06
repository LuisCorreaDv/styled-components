import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import utilidades from "./assets/images/utilidades.svg";
import transporte from "./assets/images/transporte.svg";
import { Icono, IconoTema } from "./Components/UI";



export default (type) => {
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="restaurante" />,
        Salud: <IconoTema src={salud} alt="salud" />,
        Utilidades: <IconoTema src={utilidades} alt="utilidades" />,
        Transporte: <IconoTema src={transporte} alt="transporte" />,
        default: <IconoTema src={otros} alt="otros" />
    };

    return Images[type] || Images["default"];
};