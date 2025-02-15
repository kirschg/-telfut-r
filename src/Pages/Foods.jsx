import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import '../Style.css';

function Foods() {
    const { RestaurantId } = useParams();
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        axios.get("https://localhost:7106/Etelek/GetEtelekByEtterem?etteremId=" + RestaurantId)
            .then((res) => {
                console.log(res.data);
                setFoods(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [RestaurantId]);
    return (
        <div className="App">
            <div className=" d-flex justify-content-evenly flex-wrap">
                {foods.map((food) => (
                    <h3 className="food selector" key={food.id}>
                        <Link style={{ backgroundImage: `url(${food.indexkep})` }}>
                            <div>{food.nev}</div>
                        </Link>
                    </h3>
                ))}
            </div>
        </div>
    );
}
export default Foods;