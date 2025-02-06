import "bootstrap/dist/css/bootstrap.css";
import { useState,useEffect } from "react";
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
        {restaurants.map((Restaurant) => (
            <Link classNAme="restaurant" to={"/"}>
                <h3>{Restaurant.name}</h3>
            </Link>
        ))}
    </div>
  );
}
export default Restaurants;