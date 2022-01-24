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
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique place",
    },
    {
        icon: icon2,
        title: "1 Million Trips Made",
        desc: "Over 1 million trips completed last year",
    },
    {
        icon: icon3,
        title: "Fastest Support",
        desc: "Access our suppor team 24/7",
    },
    {
        icon: icon4,
        title: "Best Deals",
        desc: "We offer the best prices",
    }
]