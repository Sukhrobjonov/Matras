import React from "react";
import "./Dashboard.css";
import Home from "../../Assets/Images/home.png";
import { Link} from "react-router-dom";

import Profile2 from "../../Assets/Images/Mask Group.png";
import Toifalar from "../../Assets/Images/view_column.png";
import ShopCart from "../../Assets/Images/shopping_cart.png";
import Texnologiyalar from "../../Assets/Images/Texnologiyalar.png";
import WhiteMap from "../../Assets/Images/White-map.png";



const Dashboard = () =>{
        
    return (
        <div className="dashboard">
            {/* {children} */}
           
            <ul className="dashboard-list">
     
                    <li className="dashboard-item">
                    <Link to="/" type="button" className="dashboard-link" >
                        <img src={Home} alt="" className="dashboard-icon" />
                        <h3 className="dashboard-subtitle">
                            Buyurtmalar
                        </h3>
                    </Link>
                </li>
                                <li className="dashboard-item">
                                <Link to="/customers"  className="dashboard-link">
                                    <img src={Profile2} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                        Customers
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/toifalar"  className="dashboard-link">
                                    <img src={Toifalar} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                    Toifalar
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/mahsulotlar"  className="dashboard-link">
                                    <img src={ShopCart} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                        Mahsulotlar
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/texnologiyalar"  className="dashboard-link">
                                    <img src={Texnologiyalar} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                    Texnologiyalar
                                    </h3>
                                </Link>
                            </li>
                            <li className="dashboard-item">
                                <Link to="/manzil"  className="dashboard-link">
                                    <img src={WhiteMap} alt="" className="dashboard-icon" />
                                    <h3 className="dashboard-subtitle">
                                        Manzil
                                    </h3>
                                </Link>
                            </li>
                            
             
             
            </ul>

              

        </div>


    )
    
}



export default Dashboard;