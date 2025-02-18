import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import '../Style.css';

export const Order = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("User"));
  useEffect(()=>{
    if(user!==null){

    }
    else{
      navigate("/");
    }
  },[])
  return (
    <div className="App" style={{paddingTop:0, paddingBottom:"10px"}}>
        <div id="Order">

        </div>
    </div>
  );
}