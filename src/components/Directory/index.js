import React from "react";
import { Link } from "react-router-dom";
import ShopAllopatic from './../../assets/ShopAllo.jpg';
import ShopAyurvedic from './../../assets/ShopAyu.jpg';
import './styles.scss';

 const Directory  = props => {
     return(
         <div className ="directory">
            <div className= "wrap">
            <div className="item"
               style = {{
                   backgroundImage: `url(${ShopAyurvedic})`
                }}
            >
                <Link to="/search/ayurvedic">
            
                    Shop Ayurvedic
                </Link>
            </div>
            <div className="item"
                style = {{
                    backgroundImage: `url(${ShopAllopatic})`
                }}
            >
                <Link to="/search/allopathic">
                    Shop Allopathic 
                </Link>
            </div>
            </div>
        </div>
     );
 };

 export default Directory;