import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Style.css';

function Restaurants() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:44365/api/restaurants")
            .then((res) => {
                setRestaurants(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="App">
            <div className=" d-flex justify-content-evenly flex-wrap">
            {/*restaurants.map((restaurant) => (
            <h3 className="restaurant">
                <Link  to={"/" + city.name + "Restaurants"} style={{backgroundImage:`url(${restaurant.image})`}}>
                    <div>{restaurant.name}</div>
                </Link>
            </h3>
        ))*/}
            <h3 className="restaurant selector">
                <Link to="/Budapest/McDonalds/Selection" style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            <h3 className="restaurant selector">
                <Link style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            <h3 className="restaurant selector">
                <Link style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            <h3 className="restaurant selector">
                <Link style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            <h3 className="restaurant selector">
                <Link style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            <h3 className="restaurant selector">
                <Link style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            <h3 className="restaurant selector">
                <Link style={{ backgroundImage: `url()` }}>
                    <div>asd</div>
                </Link>
            </h3>
            </div>
        </div>
    );
}
export default Restaurants;