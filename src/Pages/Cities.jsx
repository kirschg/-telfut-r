import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
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
        <div className="App">
            <div className=" d-flex justify-content-evenly flex-wrap">
                {/*cities.map((city) => (
            <h3 className="city">
                <Link  to={"/" + city.name + "Restaurants"} style={{backgroundImage:`url(${city.image})`}}>
                    <div>{city.name}</div>
                </Link>
            </h3>
        ))*/}
                <h3 className="city selector">
                    <Link to={"/Budapest/Restaurants"} style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="city selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="city selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="city selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="city selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="city selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="city selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
            </div>
        </div>
    );
}
export default Cities;