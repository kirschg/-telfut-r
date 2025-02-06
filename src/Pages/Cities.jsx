import "bootstrap/dist/css/bootstrap.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Style.css';

function Cities() {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:44365/api/cities")
            .then((res) => {
                setCities(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
    <div className="App" style={{flexDirection:"row", justifyContent:"flex-end"}} >
        {/*cities.map((city) => (
            <h3 className="city"><Link  to={"/" + city.name + "Restaurants"} style={{backgroundImage:`url(${city.image})`}}>
                {city.name}
            </Link></h3>
        ))*/}
        <h3 className="city"><Link style={{backgroundImage:`url()`}}>
                asd
            </Link></h3>
            <h3 className="city"><Link style={{backgroundImage:`url()`}}>
                asd
            </Link></h3>
            <h3 className="city"><Link style={{backgroundImage:`url()`}}>
                asd
            </Link></h3>
            <h3 className="city"><Link style={{backgroundImage:`url()`}}>
                asd
            </Link></h3>
            <h3 className="city"><Link style={{backgroundImage:`url()`}}>
                asd
            </Link></h3>
    </div>
  );
}
export default Cities;