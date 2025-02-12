import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import '../Style.css';
function Restaurants() {
    const { City } = useParams();
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:7106/Ettermek/GetEttermekByVaros?Varos=" + City)
            .then((res) => {
                console.log(res.data);
                setRestaurants(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="App">
            <div className=" d-flex justify-content-evenly flex-wrap">
                {restaurants.map((restaurant) => (
                    <h3 className="restaurant selector" key={restaurant.id}>
                        <Link to={{ pathname: "/" + City + "/" + restaurant.id + "/Selection", state: { RestaurantId: restaurant.chain.nev } }} style={{ backgroundImage: `url(${restaurant.indexKep})` }}>
                            <div>{restaurant.chain.nev}</div>
                        </Link>
                    </h3>
                ))}
            </div>
        </div>
    );
}
export default Restaurants;