import { IMG_CDN_URL } from "../constant";
const RestrauntCard=({name,cloudinaryImageId,cuisines,avgRating,sla})=>{
    return(
        <div className="card w-[200px] p-2 m-2 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{sla.lastMileTravelString}</h4>
        </div>
    );
};
export default RestrauntCard;