import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

var icon1 = new GiEarthAmerica({color: '#047bf1'});
var icon2 = new MdAirplanemodeActive({color: '#f3a82e'});
var icon3 = new MdTimer({color: '#f34f2e'});
var icon4 = new FaMoneyCheck({color: '#3ef576'});

export const StatsData = [
    {
        icon: icon1,
        title: "Más De 100 Destinos",
        desc: "Viaja a más de 100 lugares únicos",
    },
    {
        icon: icon2,
        title: "1 Millón De Viajes Realizados",
        desc: "Más de 1 millón de viajes realizados el año pasado",
    },
    {
        icon: icon3,
        title: "Soporte Más Rápido",
        desc: "Accede a nuestro equipo de soporte 24/7",
    },
    {
        icon: icon4,
        title: "Mejores Tratos",
        desc: "Ofrecemos los mejores precios",
    }
]