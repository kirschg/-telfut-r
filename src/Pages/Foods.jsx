import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Style.css';

function Foods() {
    return (
        <div className="App">
            <div className=" d-flex justify-content-evenly flex-wrap">
                {/*restaurants.map((food) => (
            <h3 className="food">
                <Link  to={"/" + city.name + "Restaurants"} style={{backgroundImage:`url(${food.image})`}}>
                    <div>{food.name}</div>
                </Link>
            </h3>
        ))*/}
                <h3 className="food selector">
                    <Link to="/Budapest/McDonalds/Selection" style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="food selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="food selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="food selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="food selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="food selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
                <h3 className="food selector">
                    <Link style={{ backgroundImage: `url()` }}>
                        <div>asd</div>
                    </Link>
                </h3>
            </div>
        </div>
    );
}
export default Foods;