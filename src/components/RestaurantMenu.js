import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const { resId } = useParams();
    // console.log(params);
    const [restaurant, setRestaurant] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+resId
        );
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    return !restaurant?(
    <Shimmer/>
    ):(
    <div>
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId}  />
            <h3>{restaurant.area}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}stars</h3>
            <h3>{restaurant.costForTwoMsg}</h3>
        </div>
        <div>
            <h1>Menu</h1>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

        </div>
    </div>
    );
};
export default RestaurantMenu;